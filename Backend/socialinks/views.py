from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import SocialLinksSerializer
from .models import SocialLinks
from drf_yasg.utils import swagger_auto_schema

# Create your views here.


@swagger_auto_schema(methods=['post'], request_body=SocialLinksSerializer)
@api_view(['GET', 'POST'])
def social_link_list(request):
    if request.method == 'GET':
        social = SocialLinks.objects.all()
        serializer = SocialLinksSerializer(social, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = SocialLinksSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
