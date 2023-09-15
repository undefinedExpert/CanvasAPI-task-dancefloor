import styles from './styles.module.scss'
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';
import { useCanvasSettingsQuery } from '../../services/canvas';
import { useOptionsQuery } from '../../services/options';
import DanceFloor from '../../components/DanceFloor/DanceFloor';

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

  if  (!canvasSettings.data) {
    throw new Error("Oops, something went wrong while loading canvas.");
  }

  return (
    <div className={styles.root}>
      {heading}
      <DanceFloor columns={canvasSettings.data.columns} rows={canvasSettings.data.rows} />
    </div>
  )
}

export default Root
