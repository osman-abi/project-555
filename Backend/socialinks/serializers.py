from rest_framework import serializers
from .models import SocialLinks

""" I """


class SocialLinksSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialLinks
        fields = ['id', 'link']
