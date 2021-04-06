from rest_framework import serializers
from .models import (
    About,
    Mission,
    OurShop,
    YourMessage
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
        model = YourMessage
        fields = ['id', 'name','email','title','message']
