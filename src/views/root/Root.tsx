import styles from './styles.module.scss'
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';
import { useCanvasSettingsQuery } from '../../services/canvas';
import { useOptionsQuery } from '../../services/options';
import DanceFloor from '../../components/DanceFloor/DanceFloor';
import { useEffect, useState } from 'react';
import { Grid } from '../../common/types';

function Root() {
  const options = useOptionsQuery();
  const canvasSettings = useCanvasSettingsQuery();
  const [grid, setGrid] = useState<Grid>({ columns: canvasSettings.data?.columns || 0, rows: canvasSettings.data?.rows || 0 })

  const heading = <h1>Dance floor mat, just for you {options.data?.user.name}</h1>;

  useEffect(() => {
    if (canvasSettings.data) {
      setGrid(() => ({ columns: canvasSettings.data.columns, rows: canvasSettings.data.rows }))
    }
  }, [canvasSettings.data])

  if (canvasSettings.isLoading) {
    return (
      <>
        {heading}
        <LoadingIndicator message='Loading canvas...' />
      </>
    )
  }

  const incrementHandler = (property: keyof Grid) => () => {
    setGrid((old) => {
      return { ...old, [property]: old[property] + 1 };

    });
  }

  const decrementHandler = (property: keyof Grid) => () => {
    setGrid((old) => {
      return { ...old, [property]: old[property] - 1 };
    });
  }

  return (
    <div className={styles.root}>
      {heading}
      <div className={styles.settings}>
        <div className={styles.settings__item}>
          <h2>Rows: {grid.rows}</h2>
          <button className={styles.button} onClick={decrementHandler("rows")}>-</button>
          <button className={styles.button} onClick={incrementHandler("rows")}>+</button>
        </div>
        <div className={styles.settings__item}>
          <h2>Columns: {grid.columns}</h2>
          <button className={styles.button} onClick={decrementHandler("columns")}>-</button>
          <button className={styles.button} onClick={incrementHandler("columns")}>+</button>
        </div>
      </div>

      <DanceFloor columns={grid.columns} rows={grid.rows} />
    </div>
  )
}

export default Root
