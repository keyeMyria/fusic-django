import logging
from pprint import pformat

from channels.auth import channel_session_user, channel_session_user_from_http

logger = logging.getLogger(__name__)


@channel_session_user_from_http
def ws_connect(message):
    logger.debug(pformat(message.content))
    logger.debug(pformat(dict(message.channel_session.items())))

    message.reply_channel.send({"accept": True})


@channel_session_user
def ws_receive(message):
    logger.debug(pformat(message.content))
    logger.debug(pformat(dict(message.channel_session.items())))

    message.reply_channel.send({'text': 'reply ' + message['text']})
