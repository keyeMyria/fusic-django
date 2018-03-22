from django.conf.urls import url
from channels.routing import ProtocolTypeRouter, URLRouter
from backend.routing import ApiConsumer


application = ProtocolTypeRouter({
    "websocket": URLRouter([
        url("^api/", ApiConsumer),
    ])
})
