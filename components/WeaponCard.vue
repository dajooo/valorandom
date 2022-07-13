<script setup lang="ts">
import { storeToRefs } from 'pinia'
import type { ValorantWeapon } from '~/valorantapi'

const { weapon } = defineProps<{ weapon: ValorantWeapon }>()

const {
  selectedWeapons,
  selectedWeapon,
} = $(storeToRefs(useWeaponsStore()))

const {
  selectWeapon,
  unselectWeapon,
} = useWeaponsStore()

const toggleSelect = () => {
  if (selectedWeapons.includes(weapon.uuid))
    unselectWeapon(weapon.uuid)
  else
    selectWeapon(weapon.uuid)
}
</script>

<template>
  <InfoCard
    :image="weapon.displayIcon"
    :title="weapon.displayName"
    :subtitle="weapon.shopData && weapon.shopData.cost ? `$${weapon.shopData.cost}` : undefined"
    :selected="selectedWeapons.includes(weapon.uuid)"
    :highlighted="selectedWeapon === weapon.uuid"
    @click="toggleSelect"
  />
</template>
