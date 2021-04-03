from rest_framework import serializers
from django.core.exceptions import ValidationError
from .models import User, SubscribedUsers
from django.contrib import auth
from rest_framework.exceptions import AuthenticationFailed
from rest_framework_simplejwt.tokens import RefreshToken, TokenError




class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'id',
            'username',
            'email',
            'lastname',
            'phone_number',
            'address'
        ]


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        max_length=68, min_length=6, write_only=True)

    default_error_messages = {
        'username': 'The username should only contain alphanumeric characters'}

    class Meta:
        model = User
        fields = ['email', 'username', 'password', 'phone_number', 'lastname','address']

    def validate(self, attrs):
        email = attrs.get('email', '')
        username = attrs.get('username', '')

        if not username.isalnum():
            raise serializers.ValidationError(
                self.default_error_messages)
        return attrs

    def create(self, validated_data):
        print(validated_data)
        return User.objects.create_user(**validated_data)


class LoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(max_length=255, min_length=3,write_only=True)
    password = serializers.CharField(
        max_length=68, min_length=5, write_only=True)
    username = serializers.CharField(
        max_length=255, min_length=3, read_only=True)
    

    tokens = serializers.CharField(max_length=68,min_length=6,read_only=True)
    lastname = serializers.CharField(
        max_length=255, min_length=3, read_only=True)
    phone_number = serializers.CharField(
        max_length=255, min_length=3, read_only=True)
    address = serializers.CharField(
        max_length=255, min_length=3, read_only=True)
    is_superuser = serializers.BooleanField(required=False,read_only=True)

    # def get_tokens(self, obj):
    #     user = User.objects.get(email=obj['email'])

    #     return {
    #         'refresh': user.tokens()['refresh'],
    #         'access': user.tokens()['access']
    #     }

    class Meta:
        model = User
        fields = ['email', 'password', 'username','tokens','lastname','phone_number','address','is_superuser']

    def validate(self, attrs):
        email = attrs.get('email', '')
        password = attrs.get('password', '')
        # filtered_user_by_email = User.objects.filter(email=email)
        user = auth.authenticate(email=email, password=password)

        # if filtered_user_by_email.exists() and filtered_user_by_email[0].auth_provider != 'email':
        #     raise AuthenticationFailed(
        #         detail='Please continue your login using ' + filtered_user_by_email[0].auth_provider)

        
        
        if not user:
            raise AuthenticationFailed('Invalid credentials, try again')
        if not user.is_active:
            raise AuthenticationFailed('Account disabled, contact admin')
        if  user.is_verified:
            raise AuthenticationFailed('Email is not verified')

        return {
            'email': user.email,
            'username': user.username,
            'tokens': user.tokens,
            'is_superuser':user.is_superuser,
            'lastname':user.lastname,
            'phone_number':user.phone_number,
            'address':user.address
        }

        return super().validate(attrs)


class LogoutSerializer(serializers.Serializer):
    refresh = serializers.CharField()

    default_error_message = {
        'bad_token': ('Token is expired or invalid')
    }

    def validate(self, attrs):
        self.token = attrs['refresh']
        return attrs

    def save(self, **kwargs):

        try:
            RefreshToken(self.token).blacklist()

        except TokenError:
            raise ValidationError



class SubscribedUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubscribedUsers
        fields = '__all__'