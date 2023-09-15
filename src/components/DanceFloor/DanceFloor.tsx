import { useEffect, useRef } from 'react'
import Canvas from '../Canvas/Canvas';

function DanceFloor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() =>{ 
    // render canvas rects
  }, [canvasRef])


  return (
    <div>
      <Canvas ref={canvasRef} />
    </div>
  )
}

export default DanceFloor
