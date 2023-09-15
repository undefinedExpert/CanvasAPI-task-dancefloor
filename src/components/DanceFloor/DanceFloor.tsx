import { useEffect, useRef, useState } from 'react'
import Canvas from '../Canvas/Canvas';
import styles from './styles.module.scss'
import { useCanvasContext } from '../../hooks/useCanvasContext';
import { getRandomColor } from '../../common/utils';
import { Grid } from '../../common/types';

type Props = {
  rows: number;
  columns: number;
}

const createGrid = ({ rows, columns }: Grid) => {
  return Array.from({ length: rows }).map(() => Array.from({ length: columns }).map(() => getRandomColor()))
}

function DanceFloor({ rows, columns }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const context = useCanvasContext(canvasRef)
  const [grid, setGrid] = useState<string[][]>([]);

  useEffect(() => {
    setGrid(() => createGrid({ rows, columns }))
  }, [columns, rows])

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    const rect = canvasRef.current.getBoundingClientRect();
    canvasRef.current.width = rect.width;
    canvasRef.current.height = rect.height;
  }, [canvasRef])

  useEffect(() =>{ 
    if (!context || !canvasRef.current) {
      return;
    }
    const canvas = canvasRef.current;
    const clear = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
    }

    const drawRect = (x: number, y: number, size: number, color: string) => {
      context.fillStyle = color;
      context.beginPath();
      context.fillRect(x, y, size, size);
      context.stroke();
    }

    clear();

    const width = canvas.width / columns;
    const totalHeight = width * rows;
    canvas.height = totalHeight;
    
    for(const [rowIndex, row] of grid.entries()) {
      for(const [columnIndex, color] of row.entries()) {
        drawRect(width * columnIndex, width * rowIndex, width, color);
      }
    }
  }, [context, grid, rows, columns])


  return (
    <div className={styles.root}>
      <div className={styles.canvasWrapper}>
        <Canvas ref={canvasRef} />
      </div>
    </div>
  )
}

export default DanceFloor
