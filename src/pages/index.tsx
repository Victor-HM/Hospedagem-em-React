import styles from './style.module.scss'

export default function Home() {
  return (
    <div> 
          <section className={styles.secInfo}>
                <div className={styles.welcome}>
                    <h1>BEM VINDO</h1>
                </div>
                  <div className={styles.info}>
                      <p>
                          Eae Dev, eu sou o Victor, estou cursando Desenvolvimento de Sistemas na Etec Cidade Tiradentes.
                          Atualmente estou aprendendo HTML, CSS, JavaScript, Java, entre outros. Fique de olho também no meu
                          GitHub, lá postarei várias que estou aprendendo no momento. Esta hospedagem serve para guardar
                          várias atividades minhas na ETEC e outros projetos meus.
                      </p>
                  </div>
                <section className={styles.content}>
                  <div className={styles.school}>
                      <img className={styles.image} src="/user1.svg" alt="user" />
                      <h2>Victor Hugo Carvalho Moreira dos Santos</h2>
                  </div>
                  <div className={styles.school}>
                      <img className={styles.image} src="/group.svg" alt="group" />
                      <h2>2ºB</h2>
                  </div>
                  <div className={styles.school}>
                      <img className={styles.image} src="/clock.svg" alt="clock" />
                      <h2>Tarde</h2>
                  </div>
                </section>
                <section className={styles.link}>
            <h2>Links</h2>

                <a href="1_ano/index.html"> 1ºAno </a> 
            <p>
                <a href="2_ano/index.html"> 2ºAno </a>
            </p>
    </section>
                
            </section>
    </div>
  )
}
