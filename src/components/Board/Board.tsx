import React, { useEffect, useRef, useState } from 'react';
import cls from './Board.module.scss';
import { useSelector } from 'react-redux';
import { snakeState } from '../../store/reducers/snakeReducer';
import { drawObject } from '../../utils/canvasUtils';

export const Board: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

  const snakeBody = useSelector((state: snakeState) => state.snake);

  useEffect(() => {
    setContext(canvasRef.current && canvasRef.current.getContext('2d'));
    drawObject(context, snakeBody, '#91C483');
  }, [context]);

  return <canvas className={cls.container} ref={canvasRef} />;
};
