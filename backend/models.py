# -*- coding: utf-8 -*-
from __future__ import unicode_literals


from django.db import models


class Playlist(models.Model):
    name = models.CharField(max_length=100)
    cover_url = models.URLField()
    # author

    created_date = models.DateTimeField('created at', auto_now_add=True)
    modified_date = models.DateTimeField('modified at', auto_now=True)


class Song(models.Model):
    name = models.CharField(max_length=100)

    created_date = models.DateTimeField('created at', auto_now_add=True)
    modified_date = models.DateTimeField('modified at', auto_now=True)


class PlaylistEntry(models.Model):
    playlist = models.ForeignKey(Playlist, on_delete=models.CASCADE)
    song = models.ForeignKey(Song, null=True, on_delete=models.SET_NULL)
    # author

    created_date = models.DateTimeField(auto_now_add=True)
