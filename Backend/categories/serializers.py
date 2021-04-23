from rest_framework import serializers
from .models import ParentCategory, ChildCategory


""" I """


class ParentCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ParentCategory
        fields = ['id', 'name']


class ChildCategorySerializer(serializers.ModelSerializer):
    parent = ParentCategorySerializer()

    class Meta:
        model = ChildCategory
        fields = ['id', 'parent', 'name']
