import { Formik, FormikProps } from "formik";
import { MutableRefObject, ReactElement } from "react";
import { Nullable } from "@internal/types";
import { style } from "styles";
import { cx } from "shared/utils";

interface Props<T extends object> {
  children?: ReactElement;
  initialValues: T;
  onSubmit: (values: T) => Promise<void>;
  validationSchema: any | (() => any);
  formRef: MutableRefObject<Nullable<FormikProps<T>>>;
}

export const Form = <T extends object>({ children, ...props }: Props<T>) => (
  <Formik {...props}>
    <form className={cx(style("form"))}>{children}</form>
  </Formik>
);
