import { servicant } from "$/services/servicant";

export default () => {
  servicant.read({ url: "api/reservations" }).then(console.log);

  return <p></p>;
};
