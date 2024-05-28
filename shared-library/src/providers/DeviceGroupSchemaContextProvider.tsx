import React from "react";
import { DeviceGroupSchema } from "../types/deviceGroupSchema";
import { deviceGroupSchemaData } from "../utils/data";
import DeviceGroupSchemaContext from "./DeviceGroupSchemaContext";

interface DeviceGroupSchemaContextProviderProps {
  children?: any;
}

export default function DeviceGroupSchemaContextProvider(
  props: DeviceGroupSchemaContextProviderProps
) {
  const { children } = props;

  const [existingDeviceGroups, setExistingDeviceGroups] = React.useState<
    string[]
  >([]);

  const [existingDeviceGroupIds, setExistingDeviceGroupIds] = React.useState<
    string[]
  >([]);

  const [existingDeviceTypes, setExistingDeviceTypes] = React.useState<
    string[]
  >([]);

  const [deviceGroupSchema, setDeviceGroupSchema] =
    React.useState<DeviceGroupSchema>({
      tenant: "unknown",
      deviceCategories: [],
    });

  const context = {
    existingDeviceGroups: existingDeviceGroups,
    updateExistingDeviceGroups: (deviceGroups: string[]) => {
      setExistingDeviceGroups(deviceGroups);
    },
    existingDeviceGroupIds: existingDeviceGroupIds,
    updateExistingDeviceGroupIds: (deviceGroupIds: string[]) => {
      setExistingDeviceGroupIds(deviceGroupIds);
    },
    existingDeviceTypes: existingDeviceTypes,
    updateExistingDeviceTypes: (deviceTypes: string[]) => {
      setExistingDeviceTypes(deviceTypes);
    },
    deviceGroupSchema: deviceGroupSchema,
  };

  const fetchSchemaData = async () => {
    try {
      const schemaData = deviceGroupSchemaData[0] as DeviceGroupSchema;
      setDeviceGroupSchema(schemaData);
    } catch (error) {
      // console.log("Failed to fetch device group schema!");
    }
  };

  React.useEffect(() => {
    fetchSchemaData();
  }, []);

  return (
    <DeviceGroupSchemaContext.Provider value={context}>
      {children}
    </DeviceGroupSchemaContext.Provider>
  );
}
