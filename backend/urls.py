from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()
router.register(r'playlists', views.PlaylistViewSet)
router.register(r'users', views.UserViewSet)

urlpatterns = router.urls
