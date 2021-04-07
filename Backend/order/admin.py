from django.contrib import admin
from .models import Invoice, MyOrders

admin.site.register(Invoice)
admin.site.register(MyOrders)
# Register your models here.
