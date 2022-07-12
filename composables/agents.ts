import { acceptHMRUpdate, defineStore } from 'pinia'
import type { ValorantAgent, ValorantAgentsResponse } from '~/valorantapi'

export const useAgentsStore = defineStore('agents', () => {
  const agents = ref<ValorantAgent[]>([])
  const selectedAgents = ref<string[]>([])
  const selectedAgentsStore = useCookie('selected_agents')
  const selectedAgent = ref('')

  const loadAgents = async () => {
    if (agents.value.length > 0) return
    const { data: fetchedAgents } = await useFetch<ValorantAgentsResponse>('https://valorant-api.com/v1/agents')
    agents.value = fetchedAgents.value.data.filter(agent => agent.isPlayableCharacter)
    if (selectedAgentsStore.value)
      selectedAgents.value = selectedAgentsStore.value.split(',')
  }

  const selectAgent = (agentUuid: string) => {
    selectedAgents.value = [...selectedAgents.value, agentUuid]
    selectedAgentsStore.value = selectedAgents.value.join(',')
  }

  const selectAllAgents = () => {
    selectedAgents.value = agents.value.map(weapon => weapon.uuid)
    selectedAgentsStore.value = selectedAgents.value.join(',')
  }

  const unselectAgent = (agentUuid: string) => {
    selectedAgents.value = selectedAgents.value.filter(selectedAgent => selectedAgent !== agentUuid)
    selectedAgentsStore.value = selectedAgents.value.join(',')
  }

  const unselectAllAgents = () => {
    selectedAgents.value = []
    selectedAgentsStore.value = selectedAgents.value.join(',')
  }

  return {
    agents,
    selectedAgents,
    selectedAgent,
    loadAgents,
    selectAgent,
    selectAllAgents,
    unselectAgent,
    unselectAllAgents,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAgentsStore, import.meta.hot))

