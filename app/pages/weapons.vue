<script setup lang="ts">
definePageMeta({
  layout: 'picker',
})
const weaponStore = useWeaponsStore()
await weaponStore.loadWeapons()

function selectRandomWeapon() {
  if (weaponStore.selectedWeapons.length === 0) {
    const weapon = weaponStore.weapons[Math.floor(Math.random() * weaponStore.weapons.length)]
    if (weapon)
      weaponStore.selectedWeapon = weapon.uuid
  }
  else {
    const weaponId = weaponStore.selectedWeapons[Math.floor(Math.random() * weaponStore.selectedWeapons.length)]
    if (weaponId)
      weaponStore.selectedWeapon = weaponId
  }
}

const priceCategories = ref([
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
      <div class="flex flex-col gap-2 lg:flex-row">
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
      <div class="flex flex-col gap-2 lg:flex-row">
        <button v-for="priceCategory in priceCategories" :key="priceCategory.name" class="btn btn-primary" @click="weaponStore.selectWeaponsInPriceRange(priceCategory.min, priceCategory.max)">
          {{ priceCategory.name }} <span class="text-sm text-gray-300">${{ priceCategory.max }}</span>
        </button>
      </div>
    </div>
    <ul class="grid grid-cols-1 mt-4 gap-4 lg:grid-cols-4 md:grid-cols-3">
      <li v-for="weapon in weaponStore.weapons" :key="weapon.uuid">
        <WeaponCard :weapon="weapon" />
      </li>
    </ul>
  </div>
</template>
