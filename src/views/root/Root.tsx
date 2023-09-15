import styles from './styles.module.scss'
import Canvas from '../../components/Canvas/Canvas'
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';
import { useCanvasSettingsQuery } from '../../services/canvas';
import { useOptionsQuery } from '../../services/options';

function Root() {
  const options = useOptionsQuery();
  const canvasSettings = useCanvasSettingsQuery();
  const heading = <h1>Dance floor mat, just for you {options.data?.user.name}</h1>;

  if (canvasSettings.isLoading) {
    return (
        <>
          {heading}
          <LoadingIndicator message='Loading canvas...' />
        </>
    )
  }

  return (
    <div className={styles.root}>
      {heading}
      <div>
        rows: {canvasSettings.data?.rows} 
      </div>
      <div>
          columns: {canvasSettings.data?.columns} 
      </div>
      <Canvas />
    </div>
  )
}

export default Root
