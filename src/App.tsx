
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
              <BoardCard
                id={1}
                color='blue'
                description='in yek payam testi ast'
                title='board 1'
              />
            </li>
            <li >
              <BoardCard
                id={2}
                color='gray'
                description='in yek payam testi ast in yek payam testi ast in yek payam testi ast in yek payam testi ast'
                title='board 2'
              />
            </li>
            <li >
              <BoardCard
                id={3}
                color='yellow'
                description=' in yek payam testi ast in yek payam testi ast in yek payam testi ast in yek payam testi astin yek payam testi ast in yek payam testi ast in yek payam testi ast'
                title='board 3'
              />
            </li>
            <li >
              <BoardCard
                id={4}
                color='blue'
                description=' in yek payam testi ast  in yek payam testi ast'
                title='board 4'
              />
            </li>

          </ul>
        </main>
      </main>
      <footer>footer</footer>
    </div>
  )
}

export default App
