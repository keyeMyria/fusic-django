from channels.consumer import SyncConsumer
from channels.routing import URLRouter
from django.conf.urls import url


class EchoConsumer(SyncConsumer):

    def websocket_connect(self, event):
        self.send({
            "type": "websocket.accept",
        })

    def websocket_receive(self, event):
        self.send({
            "type": "websocket.send",
            "text": event["text"],
        })


ApiConsumer = URLRouter([
    url("^", EchoConsumer),
])
