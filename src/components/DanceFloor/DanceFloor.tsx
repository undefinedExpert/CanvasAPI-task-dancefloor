import { useEffect, useRef } from 'react'
import Canvas from '../Canvas/Canvas';
import styles from './styles.module.scss'
import { useCanvasContext } from '../../hooks/useCanvasContext';
import { getRandomColor } from '../../common/utils';

type Props = {
  rows: number;
  columns: number;
}

function DanceFloor({ rows, columns }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const context = useCanvasContext(canvasRef)

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

    const drawRect = (x: number, y: number, size: number) => {
      context.fillStyle = getRandomColor();
      context.beginPath();
      context.fillRect(x, y, size, size);
      context.stroke();
    }

    clear();

    const size = 100;
    for (let row = 0; row < rows; row++) {
      for (let column = 0; column < columns; column++) {
        drawRect(size * column, size * row, size);
      }
    } 
  }, [context, columns, rows])


  return (
    <div className={styles.root}>
      <div className={styles.canvasWrapper}>
        <Canvas width={100 * columns} height={100 * rows} ref={canvasRef} />
      </div>
    </div>
  )
}

export default DanceFloor
