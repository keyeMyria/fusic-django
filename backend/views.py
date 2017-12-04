from django.contrib.auth.models import User
from django.http import HttpResponse
from rest_framework import viewsets

from .models import Playlist
from .serializers import PlaylistSerializer, UserSerializer


def index(request):
    return HttpResponse("This is the api index")


class PlaylistViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Playlist.objects.all()
    serializer_class = PlaylistSerializer


class UserViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
