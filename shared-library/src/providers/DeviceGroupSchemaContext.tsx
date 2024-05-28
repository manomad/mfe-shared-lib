import React from "react";
import { DeviceGroupSchema } from "../types/deviceGroupSchema";

const DeviceGroupSchemaContext = React.createContext({
  existingDeviceGroups: [] as string[], // List of existing device group names
  updateExistingDeviceGroups: (deviceGroups: string[]) => {},
  existingDeviceGroupIds: [] as string[], // List of existing device group IDs
  updateExistingDeviceGroupIds: (deviceGroupIds: string[]) => {},
  existingDeviceTypes: [] as string[], // List of existing device types - device type can exist only once for a particular tenant
  updateExistingDeviceTypes: (deviceTypes: string[]) => {},
  deviceGroupSchema: {} as DeviceGroupSchema, // Device category and device type information
});

export default DeviceGroupSchemaContext;
