
import styles from "./common.module.css"

const NameInput = ({ error, label, register, name }) => {
    return (
        <div className={styles.singleField}>
            <label className={styles.label}>{label}<span className={styles.required}>*</span></label>
            <input type="text" {...register(name)} className={`${styles.InputField} ${error && styles.InputFieldError}`} />
        </div>
    );
};

export default NameInput;
