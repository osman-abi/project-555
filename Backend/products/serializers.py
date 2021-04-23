from rest_framework import serializers
from .models import Product, Comment
from images.serializers import ProductImageSerializer
from categories.serializers import ChildCategorySerializer, ParentCategorySerializer

""" I """
# category = ProductCategorySerializer( many=True)
# filter_category = FilterCategorySerializer( many=True)


class ProductSerializer(serializers.ModelSerializer):
    parent_category = ParentCategorySerializer(many=True)
    filter_category = ChildCategorySerializer(many=True)

    class Meta:
        model = Product
        fields = [
            'id',
            'name',
            'price',
            'description',
            'filter_category',
            'parent_category',
            'images',
            'stock_status',
            'best_seller',
            'publish_date'
        ]


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = [
            'id',
            'product',
            'firstname',
            'email',
            'commentt'
        ]
