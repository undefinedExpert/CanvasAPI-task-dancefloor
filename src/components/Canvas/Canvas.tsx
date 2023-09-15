import { forwardRef } from "react"
import styles from './styles.module.scss';

const Canvas = forwardRef<HTMLCanvasElement, React.HTMLProps<HTMLButtonElement>>(function Canvas(_, ref) {
  return (
    <div className={styles.root} >
      <canvas className={styles.canvas} ref={ref} />
    </div>
  );
});

export default Canvas
