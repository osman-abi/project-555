from rest_framework import serializers
from .models import Invoice, MyOrders

class InvoiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Invoice
        fields = ['id','firstname','lastname','phone','items','ordered_date','shipping_address','amount','transaction_id']


class MyOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyOrders
        fields = ['id', 'user', 'orderID', 'history', 'amount']
