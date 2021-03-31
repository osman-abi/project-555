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


@swagger_auto_schema(methods=['put', 'delete'], request_body=ShopAddressSerializer)
@api_view(['GET', 'PUT', 'DELETE'])
def shop_address_detail(request, pk):
    shop_address = ShopAddressSerializer.objects.get(pk=pk)

    if request.method == 'GET':
        serializer = ShopAddressSerializer(shop_address)
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == 'PUT':
        serializer = ShopAddressSerializer(shop_address, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    elif request.method == "DELETE":
        shop_address.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


""" II """


@swagger_auto_schema(methods=['post'], request_body=WorkingDurationSerializer)
@api_view(['GET', 'POST'])
def work_duration_list(request):
    if request.method == 'GET':
        work = WorkingDuration.objects.all()
        serializer = WorkingDurationSerializer(work, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = WorkingDurationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@swagger_auto_schema(methods=['put', 'delete'], request_body=WorkingDurationSerializer)
@api_view(['GET', 'PUT', 'DELETE'])
def work_duration_detail(request, pk):
    working_duration = WorkingDuration.objects.get(pk=pk)

    if request.method == 'GET':
        serializer = WorkingDurationSerializer(working_duration)
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == 'PUT':
        serializer = WorkingDurationSerializer(
            working_duration, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    elif request.method == "DELETE":
        working_duration.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


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


@swagger_auto_schema(methods=['put', 'delete'], request_body=TechniqueSupportSerializer)
@api_view(['GET', 'PUT', 'DELETE'])
def tech_support_detail(request, pk):
    tech_support = TechniqueSupportSerializer.objects.get(pk=pk)

    if request.method == 'GET':
        serializer = TechniqueSupportSerializer(tech_support)
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == 'PUT':
        serializer = TechniqueSupportSerializer(
            tech_support, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    elif request.method == "DELETE":
        tech_support.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


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


@swagger_auto_schema(methods=['put', 'delete'], request_body=CopyRightSerializer)
@api_view(['GET', 'PUT', 'DELETE'])
def copy_right_detail(request, pk):
    copy = CopyRigth.objects.get(pk=pk)

    if request.method == 'GET':
        serializer = CopyRightSerializer(copy)
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == 'PUT':
        serializer = CopyRightSerializer(copy, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    elif request.method == "DELETE":
        copy.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
