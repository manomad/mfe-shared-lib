import { group } from "console";
import { useContext } from "react";

import { DeviceGroupSchemaContext } from "shared-library";

export default function HeaderB() {
  const deviceGroupContext = useContext(DeviceGroupSchemaContext);

  console.log("Context: " + JSON.stringify(deviceGroupContext));

  return (
    <>
      <div>{`From remote - Header B`}</div>
      <>
        {deviceGroupContext &&
          deviceGroupContext.existingDeviceGroups.map((group) => (
            <div key={group}>{group}</div>
          ))}
      </>
    </>
  );
}
