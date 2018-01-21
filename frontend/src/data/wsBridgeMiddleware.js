import { wsUpdate } from './actions';

const wsBridgeMiddleware = (ws, stream) => store => {
  if (!stream)
    throw new Error("'stream' argument not provided to wsBridgeMiddleware");
  console.log('wsBridgeMiddleware started for stream', stream);

  ws.socket.onopen = () => {
    console.log('sending all messages in queue');
    for (const payload of queue) ws.stream(stream).send(payload);
  };

  ws.listen(function(action, stream) {
    console.log(action, stream);
  });

  ws.demultiplex(stream, payload => {
    console.log('stream data:', payload);
    store.dispatch(wsUpdate(payload));
  });

  const queue = [];

  return next => action => {
    if (
      action.meta &&
      action.meta.ws &&
      action.meta.ws.stream &&
      action.meta.ws.stream === stream
    ) {
      const { payload } = action;
      if (ws.socket.readyState === ws.socket.OPEN)
        ws.stream(action.meta.ws.stream).send(payload);
      else queue.push(payload);
    }

    return next(action);
  };
};

export default wsBridgeMiddleware;
