import data from '~/data/weapons.json'
const weapons: ValorantWeapon[] = data

export default defineEventHandler(() => weapons)
