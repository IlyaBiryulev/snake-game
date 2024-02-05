import { IBoardObject } from '../models/IBoardObject';

export const clearBoard = (context: CanvasRenderingContext2D | null) => {
  if (context) {
    context.clearRect(0, 0, 1000, 600);
  }
};

export const drawObject = (
  context: CanvasRenderingContext2D | null,
  body: IBoardObject[],
  color: string,
  strokeStyle = '#000',
) => {
  if (context) {
    body.forEach((item: IBoardObject) => {
      context.fillStyle = color;
      context.strokeStyle = strokeStyle;
      context?.fillRect(item.x, item.y, 20, 20);
      context?.strokeRect(item.x, item.y, 20, 20);
    });
  }
};
