import { NameContextProvider } from "shared-library";
import HeaderA from "@/components/HeaderA";
import HeaderB from "@/components/HeaderB";

export default function Home() {
  return (
    <>
      <div>
        <h1>Shared Context Provider</h1>
        <h2>REMOTE App</h2>
        <NameContextProvider.Provider value="Susan">
          <HeaderA />
        </NameContextProvider.Provider>
        <HeaderB />
      </div>
    </>
  );
}
