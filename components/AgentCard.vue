<script setup lang="ts">
import { storeToRefs } from 'pinia'
import type { ValorantAgent } from '~/valorantapi'

const { agent } = defineProps<{ agent: ValorantAgent }>()

const {
  selectedAgents,
  selectedAgent,
} = $(storeToRefs(useAgentsStore()))

const {
  selectAgent,
  unselectAgent,
} = useAgentsStore()

const toggleSelect = () => {
  if (selectedAgents.includes(agent.uuid))
    unselectAgent(agent.uuid)
  else
    selectAgent(agent.uuid)
}
</script>

<template>
  <InfoCard
    :selected="selectedAgents.includes(agent.uuid)"
    :highlighted="selectedAgent === agent.uuid"
    :image="agent.displayIconSmall"
    :title="agent.displayName"
    @click="toggleSelect"
  />
</template>
