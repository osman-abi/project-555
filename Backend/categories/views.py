from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ProductCategorySerializer,FilterCategorySerializer
from .models import ProductCategory, FilterCategory
from drf_yasg.utils import swagger_auto_schema

# Create your views here.


@swagger_auto_schema(methods=['post'], request_body=ProductCategorySerializer)
@api_view(['GET', 'POST'])
def product_category_list(request):
    if request.method == 'GET':
        category = ProductCategory.objects.all()
        serializer = ProductCategorySerializer(category, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = ProductCategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@swagger_auto_schema(methods=['post'], request_body=FilterCategorySerializer)
@api_view(['GET', 'POST'])
def filter_category_list(request):
    if request.method == 'GET':
        filter_category = FilterCategory.objects.all()
        serializer = FilterCategorySerializer(filter_category, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = FilterCategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



