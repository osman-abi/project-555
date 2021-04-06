from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import (
    AboutSerializer,
    MissionSerializer,
    OurShopSerializer,
    YourMessageSerializer
)
from .models import (
    About,
    Mission,
    OurShop,
    YourMessage
)


from drf_yasg.utils import swagger_auto_schema
# Create your views here.

""" I """


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


@swagger_auto_schema(methods=['put', 'delete'], request_body=AboutSerializer)
@api_view(['GET', 'PUT', 'DELETE'])
def about_detail(request, pk):
    about = About.objects.get(pk=pk)

    if request.method == 'GET':
        serializer = AboutSerializer(about)
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == 'PUT':
        serializer = AboutSerializer(about, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    elif request.method == "DELETE":
        about.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


""" II """


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


@swagger_auto_schema(methods=['put', 'delete'], request_body=MissionSerializer)
@api_view(['GET', 'PUT', 'DELETE'])
def mission_detail(request, pk):
    mission = Mission.objects.get(pk=pk)

    if request.method == 'GET':
        serializer = MissionSerializer(mission)
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == 'PUT':
        serializer = MissionSerializer(mission, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    elif request.method == "DELETE":
        mission.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


""" III """


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


@swagger_auto_schema(methods=['put', 'delete'], request_body=OurShopSerializer)
@api_view(['GET', 'PUT', 'DELETE'])
def ourshop_detail(request, pk):
    ourshop = OurShop.objects.get(pk=pk)

    if request.method == 'GET':
        serializer = OurShopSerializer(ourshop)
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == 'PUT':
        serializer = OurShopSerializer(ourshop, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    elif request.method == "DELETE":
        ourshop.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@swagger_auto_schema(methods=['post'], request_body=YourMessageSerializer)
@api_view(['GET', 'POST'])
def message_list(request):
    if request.method == 'GET':
        message = YourMessage.objects.all()
        serializer = YourMessageSerializer(message, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = YourMessageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
