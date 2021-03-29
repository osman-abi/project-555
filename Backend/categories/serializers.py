from rest_framework import serializers
from .models import ProductCategory,FilterCategory

""" I """


class ProductCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductCategory
        fields = ['id','name','parent']


class FilterCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = FilterCategory
        fields = ['id', 'name', 'parent']
