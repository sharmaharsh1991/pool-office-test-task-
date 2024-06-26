import * as yup from "yup";
export const formSchema = yup
  .object({
    firstName: yup.string().required("You need to enter a first name"),
    lastName: yup.string().required("You need to enter a last name"),
    movies: yup.string().required(""),
  })
  .required();
