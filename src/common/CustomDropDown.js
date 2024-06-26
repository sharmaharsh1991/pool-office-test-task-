import { useEffect } from "react";
import styles from "./common.module.css";

const CustomDropDown = ({
  register,
  name,
  options,
  disabled,
  setValue,
  label,
}) => {
  useEffect(() => {
    if (options?.length > 0) {
      setValue(name, options?.[0]?.title);
    }
  }, [options]);

  return (
    <div className={styles.singleField}>
      <label className={styles.label} htmlFor="movies">
        {label}
      </label>

      <select
        className={`${styles.dropDown} ${styles.dropdownArrow} `}
        {...register(name)}
        name={name}
        disabled={disabled}
      >
        {options &&
          options.map((item, index) => (
            <option key={index} value={item.title}>
              {item.title}
            </option>
          ))}
      </select>
    </div>
  );
};

export default CustomDropDown;
