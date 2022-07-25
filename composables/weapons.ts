import { acceptHMRUpdate, defineStore } from 'pinia'

export const useWeaponsStore = defineStore('weapons', () => {
  let weapons = $ref<ValorantWeapon[]>([])
  let selectedWeapons = $ref<string[]>([])
  let selectedWeaponsCookie = $(useCookie('selected_weapons'))
  const selectedWeapon = $ref('')
  const includeMelee = $ref(false)

  const loadWeapons = async () => {
    if (weapons.length > 0)
      return

    const { data: fetchedWeapons } = await useFetch<ValorantWeapon[]>('/api/weapons')
    weapons = fetchedWeapons.value
    if (selectedWeaponsCookie)
      selectedWeapons = selectedWeaponsCookie.split(',')
  }

  const selectWeapon = (weaponUuid: string) => {
    selectedWeapons = [...selectedWeapons, weaponUuid]
    selectedWeaponsCookie = selectedWeapons.join(',')
  }

  const selectWeapons = (weaponUuids: string[]) => {
    selectedWeapons = weapons.filter(weapon => weaponUuids.includes(weapon.uuid)).map(weapon => weapon.uuid)
    selectedWeaponsCookie = selectedWeapons.join(',')
  }

  const selectWeaponsInPriceRange = (minPrice: number, maxPrice: number) => {
    selectWeapons(weapons
      .filter(weapon => weapon.cost !== undefined)
      .filter(weapon => weapon.cost! >= minPrice && weapon.cost! <= maxPrice)
      .map(weapon => weapon.uuid),
    )
  }

  const selectAllWeapons = () => {
    selectWeapons(weapons.map(weapon => weapon.uuid))
  }

  const unselectWeapon = (weaponUuid: string) => {
    selectedWeapons = selectedWeapons.filter(selectedWeapon => selectedWeapon !== weaponUuid)
    selectedWeaponsCookie = selectedWeapons.join(',')
  }

  const unselectAllWeapons = () => {
    selectedWeapons = []
    selectedWeaponsCookie = selectedWeapons.join(',')
  }

  return {
    weapons: $$(weapons),
    selectedWeapons: $$(selectedWeapons),
    selectedWeapon: $$(selectedWeapon),
    includeMelee: $$(includeMelee),
    loadWeapons,
    selectWeapon,
    selectWeapons,
    selectWeaponsInPriceRange,
    selectAllWeapons,
    unselectWeapon,
    unselectAllWeapons,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useWeaponsStore, import.meta.hot))

