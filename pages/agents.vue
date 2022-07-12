<script setup lang="ts">
definePageMeta({
  layout: 'picker',
})
const agentsStore = useAgentsStore()

const roll = () => {
  if (agentsStore.selectedAgent.length === 0)
    agentsStore.selectedAgent = agentsStore.agents[Math.floor(Math.random() * agentsStore.agents.length)].uuid
  else
    agentsStore.selectedAgent = agentsStore.selectedAgents[Math.floor(Math.random() * agentsStore.selectedAgents.length)]
}
</script>

<template>
  <div>
    <div class="flex gap-2">
      <button class="btn" @click="agentsStore.selectAllAgents">
        Select all
      </button>
      <button class="btn" @click="agentsStore.unselectAllAgents">
        Unselect all
      </button>
      <button class="btn" @click="roll">
        Roll
      </button>
    </div>
    <ul class="grid grid-cols-4 gap-4 mt-4">
      <li v-for="agent in agentsStore.agents" :key="agent.uuid">
        <AgentCard :agent="agent" />
      </li>
    </ul>
  </div>
</template>
