from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import FilterCategorySerializer
from .models import  FilterCategory
from drf_yasg.utils import swagger_auto_schema

# Create your views here.


        
        

""" II """
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


@swagger_auto_schema(methods=['put', 'delete'], request_body=FilterCategorySerializer)
@api_view(['GET', 'PUT', 'DELETE'])
def filter_category_detail(request, pk):
    filter_category = FilterCategory.objects.get(pk=pk)

    if request.method == 'GET':
        serializer = FilterCategorySerializer(filter_category)
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == 'PUT':
        serializer = FilterCategorySerializer(filter_category, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    elif request.method == "DELETE":
        filter_category .delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
