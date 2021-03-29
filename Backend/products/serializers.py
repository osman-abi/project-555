from rest_framework import serializers
from .models import Product
from images.serializers import ProductImageSerializer
# from categories.serializers import ProductCategorySerializer, FilterCategorySerializer

""" I """
    # category = ProductCategorySerializer( many=True)
    # filter_category = FilterCategorySerializer( many=True)


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = [
            'id',
            'name',
            'price',
            'description',
            'filter_category',
            'images',
            'category',
            'stock_status',
            'best_seller',
            'publish_date'
        ]
