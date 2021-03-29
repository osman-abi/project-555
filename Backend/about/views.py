from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import (
    AboutSerializer,
    MissionSerializer,
    OurShopSerializer
)
from .models import (
    About,
    Mission,
    OurShop
)


from drf_yasg.utils import swagger_auto_schema
# Create your views here.


@swagger_auto_schema(methods=['post'], request_body=AboutSerializer)
@api_view(['GET', 'POST'])
def about_list(request):
    if request.method == 'GET':
        abouts = About.objects.all()
        serializer = AboutSerializer(abouts, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = AboutSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@swagger_auto_schema(methods=['post'], request_body=MissionSerializer)
@api_view(['GET', 'POST'])
def mission_list(request):
    if request.method == 'GET':
        missions = Mission.objects.all()
        serializer = MissionSerializer(missions, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = MissionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@swagger_auto_schema(methods=['post'], request_body=OurShopSerializer)
@api_view(['GET', 'POST'])
def our_shop_list(request):
    if request.method == 'GET':
        ourshop = OurShop.objects.all()
        serializer = OurShopSerializer(ourshop, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = OurShopSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
