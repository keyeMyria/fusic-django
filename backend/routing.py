from .consumers import Demultiplexer

channel_routing = [
    Demultiplexer.as_route(path=r"^/radios/(?P<pk>\d+)/$"),
]
