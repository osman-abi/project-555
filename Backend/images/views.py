from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import (
    ProductImageSerializer,
    CoverImageSerializer,
    CoverPhotoSerializer,
    LogoSerializer
)
from .models import (
    ProductImage,
    CoverPhoto,
    CoverImage,
    Logo
)
from drf_yasg.utils import swagger_auto_schema

# Create your views here.


@swagger_auto_schema(methods=['post'], request_body=ProductImageSerializer)
@api_view(['GET', 'POST'])
def product_image_list(request):
    if request.method == 'GET':
        product_image = ProductImage.objects.all()
        serializer = ProductImageSerializer(product_image, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = ProductImageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@swagger_auto_schema(methods=['put', 'delete'], request_body=ProductImageSerializer)
@api_view(['GET', 'PUT', 'DELETE'])
def product_image_detail(request, pk):
    product_image = ProductImage.objects.get(pk=pk)

    if request.method == 'GET':
        serializer = ProductImageSerializer(product_image)
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == 'PUT':
        serializer = ProductImageSerializer(product_image, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    elif request.method == "DELETE":
        product_image.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@swagger_auto_schema(methods=['post'], request_body=CoverImageSerializer)
@api_view(['GET', 'POST'])
def cover_image_list(request):
    if request.method == 'GET':
        cover_image = CoverImage.objects.all()
        serializer = CoverImageSerializer(cover_image, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CoverImageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@swagger_auto_schema(methods=['put', 'delete'], request_body=CoverImageSerializer)
@api_view(['GET', 'PUT', 'DELETE'])
def cover_image_detail(request, pk):
    cover_image = CoverImage.objects.get(pk=pk)

    if request.method == 'GET':
        serializer = CoverImageSerializer(cover_image)
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == 'PUT':
        serializer = CoverImageSerializer(cover_image, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    elif request.method == "DELETE":
        cover_image.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@swagger_auto_schema(methods=['post'], request_body=CoverPhotoSerializer)
@api_view(['GET', 'POST'])
def cover_photo_list(request):
    if request.method == 'GET':
        cover_photo = CoverPhoto.objects.all()
        serializer = CoverPhotoSerializer(cover_photo, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CoverPhotoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@swagger_auto_schema(methods=['post'], request_body=LogoSerializer)
@api_view(['GET', 'POST'])
def logo_list(request):
    if request.method == 'GET':
        logo = Logo.objects.all()
        serializer = LogoSerializer(logo, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = LogoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@swagger_auto_schema(methods=['put', 'delete'], request_body=LogoSerializer)
@api_view(['GET', 'PUT', 'DELETE'])
def logo_detail(request, pk):
    logo = Logo.objects.get(pk=pk)

    if request.method == 'GET':
        serializer = LogoSerializer(logo)
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == 'PUT':
        serializer = LogoSerializer(logo, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    elif request.method == "DELETE":
        logo.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
