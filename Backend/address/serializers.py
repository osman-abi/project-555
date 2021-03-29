from rest_framework import serializers
from .models import (
    ShopAddress,
    WorkingDuration,
    TechniqueSupport,
    CopyRigth
)

""" I """
class ShopAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShopAddress
        fields = [
            'id',
            'address',
            'email_1',
            'email_2',
            'email_3',
            'email_4',
            'email_5',
            'email_6',
            'phone_number_1',
            'phone_number_2',
            'phone_number_3',
            'phone_number_4',
            'phone_number_5',
            'phone_number_6'
        ]


""" II """
class WorkingDurationSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkingDuration
        fields = [
            'id',
            'duration_d_from',
            'duration_d_to',
            'duration_t_from',
            'duration_t_to',
            'saturday_from',
            'saturday_to'
        ]


""" III """
class TechniqueSupportSerializer(serializers.ModelSerializer):
    class Meta:
        model = TechniqueSupport
        fields = ['id', 'support_text']


""" IV """
class CopyRightSerializer(serializers.ModelSerializer):
    class Meta:
        model = CopyRigth
        fields = ['id','year','context']
