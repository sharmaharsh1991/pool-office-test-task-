
import styles from './common.module.css';

const Error = ({ errMsg }) => {
    return (
        errMsg && <p className={styles.alertText}>{errMsg}</p>
    )
}

export default Error