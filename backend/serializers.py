from django.contrib.auth.models import User
from .models import Playlist, Radio
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'url', 'username', 'email', 'groups')


class PlaylistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Playlist
        fields = ('pk', 'name', 'cover_url', 'created_date', 'modified_date')


class RadioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Radio
        fields = ('pk', 'name', 'cover_url', 'created_date', 'modified_date')
