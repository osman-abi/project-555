from rest_framework import serializers
from .models import FacebookLink,InstagramLink,WhatsappLink

""" I """


class FacebookLinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = FacebookLink
        fields = ['id', 'link']


class InstagramLinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = InstagramLink
        fields = ['id', 'link']



class WhatsappLinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = WhatsappLink
        fields = ['id', 'link']