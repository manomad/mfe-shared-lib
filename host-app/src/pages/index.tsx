import { NameContextProvider } from "shared-library";
import React from "react";

const HeaderA = React.lazy(() => import("remote/HeaderA"));
const HeaderB = React.lazy(() => import("remote/HeaderB"));

export default function Home() {
  return (
    <>
      <div>
        <h1>Shared Context Provider</h1>
        <h2>HOST App</h2>
        <NameContextProvider.Provider value="Billy">
          <React.Suspense fallback="Loading Name">
            <HeaderA />
            <HeaderB />
          </React.Suspense>
        </NameContextProvider.Provider>
      </div>
    </>
  );
}
