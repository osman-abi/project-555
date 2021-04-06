from rest_framework import serializers
from .models import (
    About,
    Mission,
    OurShop,
    YourMessaga
)

class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = About
        fields = ['id','about_context']


class MissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mission
        fields = ['id', 'mission_context']
        

class OurShopSerializer(serializers.ModelSerializer):
    class Meta:
        model = OurShop
        fields = ['id', 'ourshop_context']


class YourMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = YourMessaga
        fields = ['id', 'name','email','title','message']
