from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import InvoiceSerializer
from .models import Invoice
from drf_yasg.utils import swagger_auto_schema


@swagger_auto_schema(methods=['post'], request_body=InvoiceSerializer)
@api_view(['GET', 'POST'])
def invoice_list(request):
    if request.method == 'GET':
        invoice = Invoice.objects.all()
        serializer = InvoiceSerializer(invoice, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = InvoiceSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@swagger_auto_schema(methods=['put', 'delete'], request_body=InvoiceSerializer)
@api_view(['GET', 'PUT', 'DELETE'])
def invoice_detail(request, pk):
    invoice = Invoice.objects.get(pk=pk)

    if request.method == 'GET':
        serializer = InvoiceSerializer(invoice)
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == 'PUT':
        serializer = InvoiceSerializer(
            invoice, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    elif request.method == "DELETE":
        invoice.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
