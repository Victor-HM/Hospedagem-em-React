import styles from './styles.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.headerInfo}>

                <h3>Atividades</h3>
                <h3>Pessoais</h3>

        </div>
    </header>
  )
}