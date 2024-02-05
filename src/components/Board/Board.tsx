import React, { useEffect, useRef, useState } from 'react';
import cls from './Board.module.scss';
import { drawObject } from '../../utils/canvasUtils';
import { useAppSelector } from '../../hooks/redux';

export const Board: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

  const snakeBody = useAppSelector((state) => state.snakeReducer.snake);

  console.log(snakeBody);

  useEffect(() => {
    setContext(canvasRef.current && canvasRef.current.getContext('2d'));
    drawObject(context, snakeBody, '#91C483');
  }, [context, snakeBody]);

  return (
    <canvas
      className={cls.container}
      ref={canvasRef}
      width="1000"
      height="600"
    />
  );
};
