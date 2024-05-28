import { useContext } from "react";
import { NameContextProvider } from "shared-library";

export default function HeaderA() {
  const name = useContext(NameContextProvider);

  return <div>{`From remote - Header A - Welcome - ${name}!`}</div>;
}
