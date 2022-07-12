export interface ValorantApiResponse<TData> {
    status: number;
    data: TData
}

interface ValorantAgentRole {
    uuid: string
    displayName: string
    description: string
    displayIcon: string
    assetPath: string
}

interface ValorantAgentAbility {
    slot: string
    displayName: string
    description: string
    displayIcon: string
}

interface ValorantAgentVoiceLineMedia {
    id: number
    wwise: string
    wave: string
}

interface ValorantAgentVoiceLine {
    minDuration: number
    maxDuration: number
    mediaList: ValorantAgentVoiceLineMedia
}

export interface ValorantAgent {
    uuid: string
    displayName: string
    description: string
    developerName: string
    characterTags: string[]
    displayIcon: string
    displayIconSmall: string
    bustPortrait: string
    fullPortrait: string
    fullPortraitV2: string
    killfeedPortrait: string
    background: string
    backgroundGradientColors: string[]
    assetPath: string
    isFullPortraitRightFacing: boolean
    isPlayableCharacter: boolean
    isAvailableForTest: boolean
    isBaseContent: boolean
    role: ValorantAgentRole
    abilities: ValorantAgentAbility[]
    voiceLine: ValorantAgentVoiceLine
}

export interface ValorantAgentsResponse extends ValorantApiResponse<ValorantAgent[]> {
}

interface ValorantWeaponAbsStats {
    zoomMultiplier: number
    fireRate: number
    runSpeedMultiplier: number
    burstCount: number
    firstBulletAccuracy: number
}

interface ValorantWeaponAltShotgunStats {
    shotgunPelletCount: number
    burstRate: number
}

interface ValorantWeaponBurstStats {
    shotgunPelletCount: number
    burstDistance: number
}

interface ValorantWeaponDamageRange {
    rangeStartMeters: number
    rangeEndMeters: number
    headDamage: number
    bodyDamage: number
    legDamage: number
}

interface ValorantWeaponStats {
    fireRate: number
    magazineSize: number
    runSpeedMultiplier: number
    equipTimeSeconds: number
    reloadTimeSeconds: number
    firstBulletAccuracy: number
    shotgunPelletCount: number
    wallPenetration: string
    feature: string
    fireMode: string
    altFireType: string
    adsStats: ValorantWeaponAbsStats
    altShotgunStats: ValorantWeaponAltShotgunStats
    airBurstStats: ValorantWeaponBurstStats
    damageRanges: ValorantWeaponDamageRange[]
}

interface ValorantWeaponGridPosition {
    row: number
    column: number
}

interface ValorantWeaponShopData {
    cost: number
    category: string
    categoryText: string
    gridPosition: ValorantWeaponGridPosition
    canBeTrashed: boolean
    image: string
    newImage: string
    newImage2: string
    assetPath: string
}

interface ValorantWeaponSkinChroma {
    uuid: string
    displayName: string
    displayIcon: string
    fullRender: string
    swatch: string
    streamedVideo: string
    assetPath: string
}

interface ValorantWeaponSkinLevel {
    uuid: string
    displayName: string
    levelItem: string
    displayIcon: string
    streamedVideo: string
    assetPath: string
}

interface ValorantWeaponSkin {
    uuid: string
    displayName: string
    themeUuid: string
    contentTierUuid: string
    displayIcon: string
    wallpaper: string
    assetPath: string
    chromas: ValorantWeaponSkinChroma[]
    levels: ValorantWeaponSkinLevel[]
}

interface ValorantWeapon {
    uuid: string
    displayName: string
    category: string
    defaultSkinUuid: string
    displayIcon: string
    killStreamIcon: string
    assetPath: string
    weaponStats: ValorantWeaponStats
    shopData: ValorantWeaponShopData
    skins: ValorantWeaponSkin[]
}

export interface ValorantWeaponsResponse extends ValorantApiResponse<ValorantWeapon[]> {
}
