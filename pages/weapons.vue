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

const priceCategories = $ref([
  {
    name: 'Low Buy',
    min: 0,
    max: 800,
  },
  {
    name: 'Half Buy',
    min: 0,
    max: 1600,
  },
  {
    name: 'Full Buy',
    min: 0,
    max: 4700,
  },
])
</script>

<template>
  <div>
    <div class="flex justify-between">
      <div class="flex flex-col lg:flex-row gap-2">
        <button class="btn btn-success" @click="weaponStore.selectAllWeapons">
          Select All
        </button>
        <button class="btn btn-error" @click="weaponStore.unselectAllWeapons">
          Unselect All
        </button>
        <button class="btn btn-primary" @click="selectRandomWeapon">
          Get Random Weapon
        </button>
      </div>
      <div class="flex flex-col lg:flex-row gap-2">
        <button v-for="priceCategory in priceCategories" :key="priceCategory.name" class="btn btn-primary" @click="weaponStore.selectWeaponsInPriceRange(priceCategory.min, priceCategory.max)">
          {{ priceCategory.name }} <span class="text-sm text-gray-300">${{ priceCategory.max }}</span>
        </button>
      </div>
    </div>
    <ul class="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4">
      <li v-for="weapon in weaponStore.weapons" :key="weapon.uuid">
        <WeaponCard :weapon="weapon" />
      </li>
    </ul>
  </div>
</template>
