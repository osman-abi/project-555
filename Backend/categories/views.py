from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
import json
from rest_framework.response import Response
from .serializers import ParentCategorySerializer, ChildCategorySerializer
from .models import ParentCategory, ChildCategory
from drf_yasg.utils import swagger_auto_schema

# Create your views here.


""" I """


@swagger_auto_schema(methods=['post'], request_body=ParentCategorySerializer)
@api_view(['GET', 'POST'])
def parent_category_list(request):
    if request.method == 'GET':
        parent_category = ParentCategory.objects.all()
        serializer = ParentCategorySerializer(parent_category, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = ParentCategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


""" II """


@swagger_auto_schema(methods=['post'], request_body=ChildCategorySerializer)
@api_view(['GET', 'POST'])
def child_category_list(request):
    if request.method == 'GET':
        child_category = ChildCategory.objects.all()
        serializer = ChildCategorySerializer(child_category, many=True)

        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = ChildCategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
