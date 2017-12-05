from django.contrib.auth.models import User
from rest_framework import viewsets

from .models import Playlist
from .serializers import PlaylistSerializer, UserSerializer


class PlaylistViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Playlist.objects.all()
    serializer_class = PlaylistSerializer


class UserViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
