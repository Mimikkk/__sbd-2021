import { Nullable } from "@internal/types";
import { FormikProps } from "formik";
import { MutableRefObject } from "react";

export interface FormProps<T extends object> {
  formRef: MutableRefObject<Nullable<FormikProps<T>>>;
  initialValues: T;
}
