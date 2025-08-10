import data from '../data/weapon-categories.json'

const weaponCategories: string[] = data

export default defineEventHandler(() => weaponCategories)
