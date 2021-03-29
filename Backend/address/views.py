from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import (
    ShopAddressSerializer,
    WorkingDurationSerializer,
    TechniqueSupportSerializer,
    CopyRightSerializer
)
from .models import (
    ShopAddress,
    WorkingDuration,
    TechniqueSupport,
    CopyRigth
)
from drf_yasg.utils import swagger_auto_schema
# Create your views here.

""" I """
@swagger_auto_schema(methods=['post'], request_body=ShopAddressSerializer)
@api_view(['GET', 'POST'])
def shop_address_list(request):
    if request.method == 'GET':
        shop = ShopAddress.objects.all()
        serializer = ShopAddressSerializer(shop, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = ShopAddressSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


""" II """
@swagger_auto_schema(methods=['post'], request_body=WorkingDurationSerializer)
@api_view(['GET', 'POST'])
def work_duration_list(request):
    if request.method == 'GET':
        work = WorkingDuration.objects.all()
        serializer = WorkingDurationSerializer(abouts, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = WorkingDurationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


""" III"""
@swagger_auto_schema(methods=['post'], request_body=TechniqueSupportSerializer)
@api_view(['GET', 'POST'])
def tech_support_list(request):
    if request.method == 'GET':
        support = TechniqueSupport.objects.all()
        serializer = TechniqueSupportSerializer(support, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = TechniqueSupportSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


""" IV """
@swagger_auto_schema(methods=['post'], request_body=CopyRightSerializer)
@api_view(['GET', 'POST'])
def copy_rigth_list(request):
    if request.method == 'GET':
        copy = CopyRigth.objects.all()
        serializer = CopyRightSerializer(copy, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CopyRightSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
