import logging

from channels.binding.websockets import WebsocketBinding
from channels.generic.websockets import WebsocketDemultiplexer

from .models import Radio, RadioVote
from .serializers import RadioVoteSerializer, RadioSerializer

logger = logging.getLogger(__name__)


class RadioBinding(WebsocketBinding):
    model = Radio
    fields = []
    stream = "radios"

    @classmethod
    def group_names(cls, instance):
        return ["radio-updates"]

    def serialize_data(self, instance):
        return RadioSerializer(instance).data

    @classmethod
    def trigger_inbound(cls, message, multiplexer, pk, **kwargs):
        """
        Overrides base trigger_inbound to handle connect
        """
        if message.channel.name == "websocket.connect":
            logger.info('connect to radio: %s', pk)

            # send the inital value of the instance as a 'read' action
            instance = cls.model.objects.get(pk=pk)
            data = cls().serialize(instance, 'read')
            multiplexer.send(data)

        super(RadioBinding, cls).trigger_inbound(message, **kwargs)


class VoteBinding(WebsocketBinding):
    model = RadioVote
    fields = []
    stream = "radios"

    @classmethod
    def group_names(cls, instance):
        group = 'radios-%d' % instance.radio.pk
        logger.info('update on group: %s', group)
        return [group]

    def serialize_data(self, instance):
        return RadioVoteSerializer(instance).data


class Demultiplexer(WebsocketDemultiplexer):
    consumers = {
        "radios": RadioBinding.consumer,
    }

    def connection_groups(self, pk, **kwargs):
        return ['radios-' + pk]
