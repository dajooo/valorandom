<script setup lang="ts">
import { ValorantAgent } from '~/valorantapi'

definePageMeta({
  layout: 'picker',
})
const agentsStore = useAgentsStore()

function selectRandomAgent() {
  if (agentsStore.selectedAgents.length === 0)
    agentsStore.selectedAgent = agentsStore.agents[Math.floor(Math.random() * agentsStore.agents.length)].uuid
  else
    agentsStore.selectedAgent = agentsStore.selectedAgents[Math.floor(Math.random() * agentsStore.selectedAgents.length)]
}
</script>

<template>
  <div>
    <div class="flex flex-col md:flex-row gap-2">
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
    <ul class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
      <li v-for="agent in (agentsStore.agents as ValorantAgent[])" :key="agent.uuid">
        <AgentCard :agent="agent" />
      </li>
    </ul>
  </div>
</template>
