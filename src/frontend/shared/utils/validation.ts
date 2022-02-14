import { string } from "yup";

export const card = () =>
  string().test(
    "valid-card",
    "is not a valid card number (0000 0000 0000 0000)",
    (value) => /^(?:\d{4} ?){4}$/i.test(value || "")
  );

export const phone = () =>
  string().test(
    "valid-phone",
    "is not a valid phone number (__ 000 000 000)",
    (value) => /^\d{2} ?(?:\d{3} ?){3}$/i.test(value || "")
  );
