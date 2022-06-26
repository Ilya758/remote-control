/* eslint-disable indent */
import { WebSocketServer } from 'ws';
import robotjs from 'robotjs';
import Constants from './constants';
import { handleDrawCircle } from './utils/handleDrawCircle';
import { handleDrawSquare } from './utils/handleDrawSquare';
import { handleDrawRectangle } from './utils/handleDrawRectangle';

const wss = new WebSocketServer({ port: 5000 });
const {
  drawCircle,
  drawRectangle,
  drawSquare,
  mouseDown,
  mouseLeft,
  mouseRight,
  mouseUp,
} = Constants;

wss.on('connection', ws => {
  ws.on('message', data => {
    console.log('received: %s', data);

    const [command, delta, addDelta] = data.toString().split(' ');

    const fixedDelta = Math.abs(+delta);

    const mouseCoords = robotjs.getMousePos();

    switch (command) {
      case mouseDown: {
        robotjs.moveMouse(mouseCoords.x, mouseCoords.y + fixedDelta);

        ws.send(mouseDown);

        break;
      }

      case mouseUp: {
        robotjs.moveMouse(mouseCoords.x, mouseCoords.y - fixedDelta);

        ws.send(mouseUp);
        break;
      }

      case mouseLeft: {
        robotjs.moveMouse(mouseCoords.x - fixedDelta, mouseCoords.y);

        ws.send(mouseLeft);
        break;
      }

      case mouseRight: {
        robotjs.moveMouse(mouseCoords.x + fixedDelta, mouseCoords.y);

        ws.send(mouseRight);
        break;
      }

      case drawCircle: {
        handleDrawCircle(Number(delta));

        ws.send(drawCircle);

        break;
      }

      case drawSquare: {
        handleDrawSquare(delta, mouseCoords.x, mouseCoords.y);

        ws.send(drawRectangle);

        break;
      }

      case drawRectangle: {
        handleDrawRectangle(delta, addDelta, mouseCoords.x, mouseCoords.y);

        ws.send(drawRectangle);

        break;
      }

      default:
        break;
    }
  });

  ws.send('Start connection');
});

wss.on('close', () => {
  console.log('Have a nice day!');
});
