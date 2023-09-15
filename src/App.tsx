import styles from './App.module.scss'
import Canvas from './components/Canvas/Canvas'

function App() {
  return (
    <div className={styles.root}>
      <h1>Dance floor  mat</h1>

      <Canvas />
    </div>
  )
}

export default App
