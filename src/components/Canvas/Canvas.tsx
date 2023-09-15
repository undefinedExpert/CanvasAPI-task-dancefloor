import { forwardRef } from "react"
import styles from './styles.module.scss';

const Canvas = forwardRef<HTMLCanvasElement, React.HTMLProps<HTMLCanvasElement>>(function Canvas(props, ref) {
  return (
    <div className={styles.root} >
      <canvas className={styles.canvas} ref={ref} width={props.width} height={props.height} onClick={props.onClick} />
    </div>
  );
});

export default Canvas
