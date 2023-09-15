import { useState, useEffect, RefObject } from 'react';

export function useCanvasContext(canvasRef: RefObject<HTMLCanvasElement>): CanvasRenderingContext2D | null {
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) {
        setContext(ctx);
      }
    }
  }, [canvasRef]);

  return context;
}