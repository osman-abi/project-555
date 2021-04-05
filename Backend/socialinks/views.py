from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import FacebookLinkSerializer, InstagramLinkSerializer,WhatsappLinkSerializer
from .models import FacebookLink,InstagramLink,WhatsappLink
from drf_yasg.utils import swagger_auto_schema

# Create your views here.


@swagger_auto_schema(methods=['post'], request_body=FacebookLinkSerializer)
@api_view(['GET', 'POST'])
def facebook_link_list(request):
    if request.method == 'GET':
        facebook = FacebookLink.objects.all()
        serializer = FacebookLinkSerializer(facebook, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = FacebookLinkSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@swagger_auto_schema(methods=['post'], request_body=InstagramLinkSerializer)
@api_view(['GET', 'POST'])
def instagram_link_list(request):
    if request.method == 'GET':
        instagram = InstagramLink.objects.all()
        serializer = InstagramLinkSerializer(instagram, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = InstagramLinkSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@swagger_auto_schema(methods=['post'], request_body=WhatsappLinkSerializer)
@api_view(['GET', 'POST'])
def whatsapp_link_list(request):
    if request.method == 'GET':
        whatsapp = WhatsappLink.objects.all()
        serializer = WhatsappLinkSerializer(whatsapp, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = WhatsappLinkSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
