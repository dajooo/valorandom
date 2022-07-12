<script setup lang="ts">
definePageMeta({
  layout: 'picker',
})
const weaponStore = useWeaponsStore()
await weaponStore.loadWeapons()

const selectRandomWeapon = () => {
  if (weaponStore.selectedWeapons.length === 0)
    weaponStore.selectedWeapon = weaponStore.weapons[Math.floor(Math.random() * weaponStore.weapons.length)].uuid
  else
    weaponStore.selectedWeapon = weaponStore.selectedWeapons[Math.floor(Math.random() * weaponStore.selectedWeapons.length)]
}
</script>

<template>
  <div>
    <div class="flex gap-2">
      <button class="btn" @click="weaponStore.selectAllWeapons">
        Select All
      </button>
      <button class="btn" @click="weaponStore.unselectAllWeapons">
        Unselect All
      </button>
      <button class="btn" @click="selectRandomWeapon">
        Select Random Weapon
      </button>
    </div>
    <ul class="grid grid-cols-4 gap-4 mt-4">
      <li v-for="weapon in weaponStore.weapons" :key="weapon.uuid">
        <WeaponCard :weapon="weapon" />
      </li>
    </ul>
  </div>
</template>
