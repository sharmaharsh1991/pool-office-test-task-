import { useForm } from "react-hook-form";
import { formSchema } from "../schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useQuery } from "@apollo/client";
import { STAR_WARS_QUERY } from "../query/starwarquery";
import FormSubmittedContainer from "./FormSubmittedContainer";
import Error from "../common/Error";
import NameInput from "../common/NameInput";
import Loader from "../common/Loader";
import CustomDropDown from "../common/CustomDropDown";
import styles from "./form.module.css";

const MyForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitSuccessful },
  } = useForm({ resolver: yupResolver(formSchema) });

  const {
    loading,
    error: appoloResponseError,
    data,
  } = useQuery(STAR_WARS_QUERY);

  const onSubmit = (formData) => {
    console.log(formData);
  };

  const handleFormReset = () => {
    isSubmitSuccessful && reset();
  };

  return (
    <div className={styles.container}>
      <div className={styles.formOuter}>
        <h1 className={styles.title} onClick={handleFormReset}>
          My form
        </h1>
        {isSubmitSuccessful ? (
          <FormSubmittedContainer />
        ) : (
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <Error errMsg={errors.firstName?.message} />
            <Error errMsg={errors.lastName?.message} />
            <div className={styles.nameContainer}>
              <NameInput
                register={register}
                label="First Name"
                name="firstName"
                error={errors.firstName}
              />
              <NameInput
                register={register}
                label="Last Name"
                name="lastName"
                error={errors.lastName}
              />
              <CustomDropDown
                register={register}
                label="Favorite Star War Movies:"
                name="movies"
                disabled={appoloResponseError?.message}
                options={data?.allFilms?.films}
                setValue={setValue}
              />
              <Loader active={loading} />{" "}
              {/* Loader for fetching favorite movie star */}
            </div>
            <Error errMsg={appoloResponseError?.message} /> {/* for api error*/}
            <button className={styles.submit} type="submit">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default MyForm;
