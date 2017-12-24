import logging

from channels.binding.websockets import WebsocketBinding
from channels.generic.websockets import WebsocketDemultiplexer

from .models import Radio, RadioVote

logger = logging.getLogger(__name__)


class RadioBinding(WebsocketBinding):
    model = Radio
    stream = "radios"
    fields = ('id', 'name', 'cover_url', 'created_date', 'modified_date', 'songs', 'votes')

    @classmethod
    def group_names(cls, instance):
        return ["radio-updates"]


class VoteBinding(WebsocketBinding):
    model = RadioVote
    stream = "radios"
    fields = ('id', 'owner', 'song', 'radio')

    @classmethod
    def group_names(cls, instance):
        group = 'radios-%d' % instance.radio.pk
        logger.info('update on group: %s', group)
        return [group]


class Demultiplexer(WebsocketDemultiplexer):
    consumers = {
        "radios": RadioBinding.consumer,
    }

    def connection_groups(self, pk, **kwargs):
        logger.info(repr(kwargs))
        return ['radios-' + pk]
