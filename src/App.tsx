
import styles from './App.module.css'
import BoardCard from './components/boardCard/boardCard'

function App() {


  return (
    <div className={styles.app}>
      <header>header</header>
      <main>
        <header className={styles.header}>
          <h1 className={styles.title}>todo</h1>
          <button className={styles.action}>create</button>
        </header>
        <main className={styles.main}>
          <ul className={styles.boards}>
            <li >
                <BoardCard/>
            </li>
            <li >
                <BoardCard/>
            </li>
            <li >
                <BoardCard/>
            </li>
            <li >
                <BoardCard/>
            </li>
          
          </ul>
        </main>
      </main>
      <footer>footer</footer>
    </div>
  )
}

export default App
