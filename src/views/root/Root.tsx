import styles from './styles.module.scss'
import Canvas from '../../components/Canvas/Canvas'

function Root() {
  return (
    <div className={styles.root}>
      <h1>Dance floor mat</h1>
      <Canvas />
    </div>
  )
}

export default Root
