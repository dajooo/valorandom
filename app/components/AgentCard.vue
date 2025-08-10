<script setup lang="ts">
const { agent } = defineProps<{ agent: ValorantAgent }>()

const agentStore = useAgentsStore()

function toggleSelect() {
  if (agentStore.selectedAgents.includes(agent.uuid))
    agentStore.unselectAgent(agent.uuid)
  else
    agentStore.selectAgent(agent.uuid)
}
</script>

<template>
  <InfoCard
    :selected="agentStore.selectedAgents.includes(agent.uuid)"
    :highlighted="agentStore.selectedAgent === agent.uuid"
    :image="agent.displayIcon"
    :title="agent.displayName"
    @click="toggleSelect"
  />
</template>
