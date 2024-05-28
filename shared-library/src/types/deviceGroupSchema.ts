export interface DeviceCategory {
    name: string,
    deviceTypes: string[]
}

export interface DeviceGroupSchema {
    tenant: string,
    deviceCategories: DeviceCategory[]
}