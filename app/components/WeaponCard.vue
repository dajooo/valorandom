<script setup lang="ts">
const { weapon } = defineProps<{ weapon: ValorantWeapon }>()

const weaponStore = useWeaponsStore()

function toggleSelect() {
  if (weaponStore.selectedWeapons.includes(weapon.uuid))
    weaponStore.unselectWeapon(weapon.uuid)
  else
    weaponStore.selectWeapon(weapon.uuid)
}
</script>

<template>
  <InfoCard
    :image="weapon.displayIcon"
    :title="weapon.displayName"
    :subtitle="weapon.cost ? `$${weapon.cost}` : undefined"
    :selected="weaponStore.selectedWeapons.includes(weapon.uuid)"
    :highlighted="weaponStore.selectedWeapon === weapon.uuid"
    @click="toggleSelect"
  />
</template>
