import ClipLoader from "react-spinners/ClipLoader";
import styles from "../common/common.module.css";

const Loader = ({ active }) => {
  return (
    <div className={styles.loader}>
      <ClipLoader
        color="#00b3ff"
        loading={active}
        size={25}
        speedMultiplier={0.6}
      />
      {active && <p>Fetching favorite star...</p>}
    </div>
  );
};

export default Loader;
