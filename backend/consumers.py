import logging

from channels import Group
from channels.binding.base import CREATE
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

# rewrite starts here


class RadioBinding2(WebsocketBinding):
    model = Radio
    fields = []
    # stream = "radios"

    def run_action(self, action, pk, data):
        """
        Performs the requested action
        """
        # Check to see if we're allowed
        if self.has_permission(self.user, action, pk):
            if action == "sub":
                self.sub(pk)
            else:
                raise ValueError("Bad action %r" % action)

    def has_permission(self, user, action, pk):
        return True

    def sub(self, pk):
        logger.info('sub: %s', pk)
        payload = self.serialize(self.model.objects.get(pk=pk), CREATE)
        self.kwargs['multiplexer'].send(payload)
        Group('radios-%s' % pk, channel_layer=self.message.channel_layer).add(self.message.reply_channel)

    def serialize_data(self, instance):
        return RadioSerializer(instance).data


class Demultiplexer2(WebsocketDemultiplexer):
    consumers = {
        "radios": RadioBinding2.consumer,
    }
