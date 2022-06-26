import robotjs from 'robotjs';

export const handleDrawSquare = (delta: string, x: number, y: number) => {
  for (let i = 0; i < +delta; i += 1.5) {
    robotjs.dragMouse(x + i, y);
  }

  for (let i = 0; i < +delta; i += 1.5) {
    robotjs.dragMouse(x + +delta, y + i);
  }

  for (let i = 0; i < +delta; i += 1.5) {
    robotjs.dragMouse(x + +delta - i, y + +delta);
  }

  for (let i = 0; i < +delta; i += 1.5) {
    robotjs.dragMouse(x, y + +delta - i);
  }
};
