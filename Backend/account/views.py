from django.shortcuts import render
from rest_framework import generics, status, views, permissions
from .serializers import RegisterSerializer, LoginSerializer, LogoutSerializer,UserSerializer, SubscribedUserSerializer
from rest_framework.response import Response
from .models import User,SubscribedUsers
from django.shortcuts import redirect
from drf_yasg.utils import swagger_auto_schema
from rest_framework.decorators import api_view
from drf_yasg import openapi
from rest_framework_simplejwt.tokens import RefreshToken

test_param = openapi.Parameter(
    'test', openapi.IN_QUERY, description="test manual param", type=openapi.TYPE_BOOLEAN)
user_response = openapi.Response('response description', UserSerializer)

# 'method' can be used to customize a single HTTP method of a view


@swagger_auto_schema(method='get', responses={200: user_response})
@api_view(['GET'])
def user_list(request):
    if request.method == 'GET':
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class RegisterView(generics.GenericAPIView):
    serializer_class = RegisterSerializer
    permission_classes = [permissions.AllowAny]

    @swagger_auto_schema(operation_description="register")
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        refresh = RefreshToken.for_user(user)
        return Response({
            "data": request.data,
            "is admin":user.is_superuser,
            "access_token":str(refresh.access_token),
            "refresh_token":str(refresh)
        })


class LoginAPIView(generics.GenericAPIView):
    serializer_class = LoginSerializer
    permission_classes = [permissions.AllowAny]

    @swagger_auto_schema(operation_description="login")
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        
        return Response({'data': serializer.data}, status=status.HTTP_201_CREATED)


class LogoutAPIView(generics.GenericAPIView):
    serializer_class = LogoutSerializer
    permission_classes = (permissions.IsAuthenticated,)

    @swagger_auto_schema(operation_description="logout")
    def post(self, request):

        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(status=status.HTTP_204_NO_CONTENT)



@swagger_auto_schema(methods=['post'], request_body=SubscribedUserSerializer)
@api_view(['GET', 'POST'])
def subscribe(request):
    if request.method == 'GET':
        user = SubscribedUsers.objects.all()
        serializer = SubscribedUserSerializer(user, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = SubscribedUserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)