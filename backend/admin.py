# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from .models import Playlist, Song, PlaylistEntry


class PlaylistEntryInline(admin.TabularInline):
    model = PlaylistEntry
    # extra = 3


class PlaylistAdmin(admin.ModelAdmin):
    inlines = [PlaylistEntryInline]
    list_display = ('name', 'created_date', 'modified_date')


admin.site.register(Song)
admin.site.register(Playlist, PlaylistAdmin)