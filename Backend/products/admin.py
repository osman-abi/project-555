from django.contrib import admin
from .models import Product,Comment
# Register your models here.

class ProductAdmin(admin.ModelAdmin):
    list_display = ('name','artikul')
    search_fields = ('name','artikul')


admin.site.register(Product, ProductAdmin)
admin.site.register(Comment)

