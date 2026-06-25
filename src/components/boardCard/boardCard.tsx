import styles from './boardCard.module.css'

export default function BoardCard (){
    return (
        <div className={styles.board}>
                <div className={styles.cover + " yellow"}></div>
                <div className={styles.content}>
                  <div className={styles.header}>
                    <h3 className={styles.title}>Board 1</h3>
                    <a href="#" className={styles.link}>View</a>
                  </div>

                  <p className={styles.description}>amet consectetur adipisicing elit. Quis, dicta.</p>

                </div>
              </div>
    )
}