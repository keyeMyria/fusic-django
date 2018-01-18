from .consumers import Demultiplexer, Demultiplexer2

channel_routing = [
    Demultiplexer.as_route(path=r"^/radios/(?P<pk>\d+)/$"),
    Demultiplexer2.as_route(path=r"^/ws"),
]
