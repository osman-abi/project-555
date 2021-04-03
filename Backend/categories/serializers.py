from rest_framework import serializers
from .models import FilterCategory

""" I """




class FilterCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = FilterCategory
        fields = ['id', 'name', 'parent']
