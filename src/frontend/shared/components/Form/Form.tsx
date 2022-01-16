import { Formik } from "formik";
import { ReactNode } from "react";
import { style } from "styles";
import { isEntity } from "shared/utils";
import { Actions } from "./Actions";

interface Props<T extends object> {
  children?: ReactNode;
  initialValues: T;
  onSubmit: (values: T) => Promise<void>;
  onRemove?: (values: T) => void;
  validationSchema: any | (() => any);
}

export const Form = <T extends object>({
  children,
  onRemove,
  ...props
}: Props<T>) => (
  <Formik {...props} validateOnMount>
    {({ isValid, submitForm, values }) => (
      <form className={style("form")}>
        {children}
        <Actions
          onSubmit={async () => (await submitForm(), isValid)}
          onRemove={
            (isEntity(values) || undefined) && (async () => onRemove?.(values))
          }
        />
      </form>
    )}
  </Formik>
);
