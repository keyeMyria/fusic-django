# -*- coding: utf-8 -*-
from __future__ import unicode_literals


from django.db import models


class Playlist(models.Model):
    name = models.CharField(max_length=100)
    cover_url = models.URLField(blank=True)
    # author

    created_date = models.DateTimeField('created at', auto_now_add=True)
    modified_date = models.DateTimeField('modified at', auto_now=True)

    def __str__(self):
        return self.name


class Song(models.Model):
    name = models.CharField(max_length=100)

    created_date = models.DateTimeField('created at', auto_now_add=True)
    modified_date = models.DateTimeField('modified at', auto_now=True)


class PlaylistEntry(models.Model):
    playlist = models.ForeignKey(Playlist, on_delete=models.CASCADE)
    song = models.ForeignKey(Song, on_delete=models.CASCADE)
    # author

    created_date = models.DateTimeField(auto_now_add=True)
