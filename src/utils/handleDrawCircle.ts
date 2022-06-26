import robotjs from 'robotjs';

export const handleDrawCircle = (radius: number) => {
  const mousePos = robotjs.getMousePos();

  for (let i = 0; i <= Math.PI * 2; i += 0.01) {
    const x = mousePos.x + radius * Math.cos(i);
    const y = mousePos.y + radius * Math.sin(i);

    robotjs.dragMouse(x, y);
  }
};
