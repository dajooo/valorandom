interface ValorantAgentRole {
    uuid: string
    displayName: string
    displayIcon: string
}

interface ValorantAgent {
    uuid: string
    displayName: string
    displayIconSmall: string
    role: string
}

interface ValorantWeapon {
    uuid: string,
    displayName: string,
    displayIcon: string,
    category: string,
    defaultSkinUuid: string,
    cost?: number
}

