from django.contrib.auth.models import User
from rest_framework import viewsets, permissions

from .permissions import IsStaffOrReadOnly
from .models import Playlist
from .serializers import PlaylistSerializer, UserSerializer


class PlaylistViewSet(viewsets.ModelViewSet):
    queryset = Playlist.objects.all()
    serializer_class = PlaylistSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsStaffOrReadOnly]
