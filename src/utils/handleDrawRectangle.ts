import robotjs from 'robotjs';

export const handleDrawRectangle = (
  xDelta: string,
  yDelta: string,
  x: number,
  y: number
) => {
  for (let i = 0; i < +xDelta; i += 1.5) {
    robotjs.dragMouse(x + i, y);
  }

  for (let i = 0; i < +yDelta; i += 1.5) {
    robotjs.dragMouse(x + +xDelta, y + i);
  }

  for (let i = 0; i < +xDelta; i += 1.5) {
    robotjs.dragMouse(x + +xDelta - i, y + +yDelta);
  }

  for (let i = 0; i < +yDelta; i += 1.5) {
    robotjs.dragMouse(x, y + +yDelta - i);
  }
};
