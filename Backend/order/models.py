from django.db import models
from account.models import User
from products.models import Product

# Create your models here.



    

class Invoice(models.Model):
    firstname = models.CharField(
        max_length=150, blank=False, verbose_name='Ad')
    lastname = models.CharField(
        max_length=150, blank=False, verbose_name='Soyad')
    phone = models.CharField(max_length=30, blank=False,
                             verbose_name='Əlaqə nömrəsi')
    items = models.ManyToManyField(
        Product, blank=True, verbose_name='Məhsullar')
    ordered_date = models.DateTimeField(auto_now=True,verbose_name='Sifarişin edilmə tarixi')
    shipping_address = models.TextField(
        max_length=5000, blank=True, null=True, verbose_name='Çatdırılacaq ünvan')
    amount = models.CharField(
        max_length=100, blank=True, null=True, verbose_name='Məbləğ')
    transaction_id = models.CharField(max_length=20, blank=True, null=True)
    