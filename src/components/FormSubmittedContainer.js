import styles from "./form.module.css";

const FormSubmittedContainer = () => {
  return (
    <div className={styles.success}>
      <p className={styles.successText}>Thanks for submitting the form!</p>
    </div>
  );
};

export default FormSubmittedContainer;
