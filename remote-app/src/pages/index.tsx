import { NameContextProvider } from "shared-library";
import { DeviceGroupSchemaContextProvider } from "shared-library";
import HeaderA from "@/components/HeaderA";
import HeaderB from "@/components/HeaderB";
import React, { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Suspense fallback={<div>Loading Home Component...</div>}>
        <div>
          <h1>Shared Context Provider</h1>
          <h2>REMOTE App</h2>
          <NameContextProvider.Provider value="Susan">
            <HeaderA />
          </NameContextProvider.Provider>
          <DeviceGroupSchemaContextProvider>
            <HeaderB />
          </DeviceGroupSchemaContextProvider>
        </div>
      </Suspense>
    </>
  );
}
