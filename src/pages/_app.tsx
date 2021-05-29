import '../styles/global.scss'
import styles from '../styles/app.module.scss'

import Header from '../components/header';


function MyApp({ Component, pageProps }) {
  return (
    <div>
        <Header />
      <div className={styles.container}>
        <Component {...pageProps} />
      </div>
    </div>
    
  )
}

export default MyApp
