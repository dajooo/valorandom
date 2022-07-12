import { acceptHMRUpdate, defineStore } from 'pinia'
import type { ValorantWeapon, ValorantWeaponsResponse } from '~/valorantapi'

export const useWeaponsStore = defineStore('weapons', () => {
  const weapons = ref<ValorantWeapon[]>([])
  const selectedWeapons = ref<string[]>([])
  const selectedWeaponsStore = useCookie('selected_weapons')
  const selectedWeapon = ref('')

  const loadWeapons = async () => {
    const fetchedWeapons = await $fetch<ValorantWeaponsResponse>('https://valorant-api.com/v1/weapons')
    weapons.value = fetchedWeapons.data
    if (selectedWeaponsStore.value)
      selectedWeapons.value = selectedWeaponsStore.value.split(',')
  }

  const selectWeapon = (weaponUuid: string) => {
    selectedWeapons.value = [...selectedWeapons.value, weaponUuid]
    selectedWeaponsStore.value = selectedWeapons.value.join(',')
  }

  const selectAllWeapons = () => {
    selectedWeapons.value = weapons.value.map(weapon => weapon.uuid)
    selectedWeaponsStore.value = selectedWeapons.value.join(',')
  }

  const unselectWeapon = (weaponUuid: string) => {
    selectedWeapons.value = selectedWeapons.value.filter(selectedWeapon => selectedWeapon !== weaponUuid)
    selectedWeaponsStore.value = selectedWeapons.value.join(',')
  }

  const unselectAllWeapons = () => {
    selectedWeapons.value = []
    selectedWeaponsStore.value = selectedWeapons.value.join(',')
  }

  return {
    weapons,
    selectedWeapons,
    selectedWeapon,
    loadWeapons,
    selectWeapon,
    selectAllWeapons,
    unselectWeapon,
    unselectAllWeapons,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useWeaponsStore, import.meta.hot))

