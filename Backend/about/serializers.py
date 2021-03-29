from rest_framework import serializers
from .models import (
    About,
    Mission,
    OurShop
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
