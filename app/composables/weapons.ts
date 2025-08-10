export const useWeaponsStore = defineStore('weapons', () => {
  const weapons = ref<ValorantWeapon[]>([])
  const selectedWeapons = ref<string[]>([])
  const selectedWeaponsCookie = useCookie('selected_weapons')
  const selectedWeapon = ref('')

  const loadWeapons = async () => {
    if (weapons.value.length > 0)
      return

    const { data: fetchedWeapons } = await useFetch<ValorantWeapon[]>('/api/weapons')
    weapons.value = fetchedWeapons.value!
    if (selectedWeaponsCookie.value)
      selectedWeapons.value = selectedWeaponsCookie.value.split(',')
  }

  const selectWeapon = (weaponUuid: string) => {
    selectedWeapons.value = [...selectedWeapons.value, weaponUuid]
  }

  const selectWeapons = (weaponUuids: string[]) => {
    selectedWeapons.value = weapons.value.filter(weapon => weaponUuids.includes(weapon.uuid)).map(weapon => weapon.uuid)
  }

  const selectWeaponsInPriceRange = (minPrice: number, maxPrice: number) => {
    selectWeapons(weapons.value
      .filter(weapon => weapon.cost !== undefined)
      .filter(weapon => weapon.cost! >= minPrice && weapon.cost! <= maxPrice)
      .map(weapon => weapon.uuid),
    )
  }

  const selectAllWeapons = () => {
    selectWeapons(weapons.value.map(weapon => weapon.uuid))
  }

  const unselectWeapon = (weaponUuid: string) => {
    selectedWeapons.value = selectedWeapons.value.filter(selectedWeapon => selectedWeapon !== weaponUuid)
  }

  const unselectAllWeapons = () => {
    selectedWeapons.value = []
  }

  watch(selectedWeapons, (newValue, oldValue, onCleanup) => {
    selectedWeaponsCookie.value = newValue.join(',')
  })

  return {
    weapons,
    selectedWeapons,
    selectedWeapon,
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
