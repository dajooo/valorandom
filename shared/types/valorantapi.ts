export interface ValorantAgentRole {
  uuid: string
  displayName: string
  displayIcon: string
}

export interface ValorantAgent {
  uuid: string
  displayName: string
  displayIcon: string
  role: string
}

export interface ValorantWeapon {
  uuid: string
  displayName: string
  displayIcon: string
  category: string
  defaultSkinUuid: string
  cost?: number
}
