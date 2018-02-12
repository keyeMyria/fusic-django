from .consumers import Demultiplexer

channel_routing = [
    Demultiplexer.as_route(path=r"^/ws"),
]
