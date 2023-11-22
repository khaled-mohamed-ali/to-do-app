import styles from './page.module.css'
import Login from "@/app/components/login";


export default function Home() {
    return (
        <div className={styles.main}>
                <Login/>
        </div>
    )
}
