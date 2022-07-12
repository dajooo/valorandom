<script setup lang="ts">
definePageMeta({
  layout: 'picker',
})
const agentsStore = useAgentsStore()
await agentsStore.loadAgents()

const selectRandomAgent = () => {
  if (agentsStore.selectedAgents.length === 0)
    agentsStore.selectedAgent = agentsStore.agents[Math.floor(Math.random() * agentsStore.agents.length)].uuid
  else
    agentsStore.selectedAgent = agentsStore.selectedAgents[Math.floor(Math.random() * agentsStore.selectedAgents.length)]
}
</script>

<template>
  <div>
    <div class="flex gap-2">
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
    <ul class="grid grid-cols-4 gap-4 mt-4">
      <li v-for="agent in agentsStore.agents" :key="agent.uuid">
        <AgentCard :agent="agent" />
      </li>
    </ul>
  </div>
</template>
