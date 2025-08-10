<script setup lang="ts">
definePageMeta({
  layout: 'picker',
})
const agentsStore = useAgentsStore()

function selectRandomAgent() {
  if (agentsStore.selectedAgents.length === 0) {
    const weapon = agentsStore.agents[Math.floor(Math.random() * agentsStore.agents.length)]
    if (weapon)
      agentsStore.selectedAgent = weapon.uuid
  }
  else {
    const weaponId = agentsStore.selectedAgents[Math.floor(Math.random() * agentsStore.selectedAgents.length)]
    if (weaponId)
      agentsStore.selectedAgent = weaponId
  }
}
</script>

<template>
  <div>
    <div class="flex flex-col gap-2 md:flex-row">
      <button class="btn btn-success" @click="agentsStore.selectAllAgents">
        Select All
      </button>
      <button class="btn btn-error" @click="agentsStore.unselectAllAgents">
        Unselect All
      </button>
      <button class="btn btn-primary" @click="selectRandomAgent">
        Get Random Agent
      </button>
    </div>
    <ul class="grid grid-cols-1 mt-4 gap-4 lg:grid-cols-4 md:grid-cols-3">
      <li v-for="agent in agentsStore.agents" :key="agent.uuid">
        <AgentCard :agent="agent" />
      </li>
    </ul>
  </div>
</template>
