import robotjs from 'robotjs';
import Jimp from 'jimp';

export const handlePrintScreen = async (x: number, y: number) => {
  try {
    const img = robotjs.screen.capture(x, y, 200, 200);

    const image = new Jimp(200, 200);

    image.bitmap.data = img.image as Buffer;

    return await image.getBufferAsync(Jimp.MIME_PNG);
  } catch (e: unknown) {
    return e;
  }
};
