import { acceptHMRUpdate, defineStore } from 'pinia'

export const useAgentsStore = defineStore('agents', () => {
  const agents = ref<ValorantAgent[]>([])
  const selectedAgents = ref<string[]>([])
  const selectedAgentsCookie = useCookie('selected_agents')
  const selectedAgent = ref('')

  const loadAgents = async () => {
    if (agents.value.length > 0)
      return
    const { data: fetchedAgents } = await useFetch<ValorantAgent[]>('/api/agents')
    agents.value = fetchedAgents.value!
    if (selectedAgentsCookie.value)
      selectedAgents.value = selectedAgentsCookie.value.split(',')
  }

  const selectAgent = (agentUuid: string) => {
    selectedAgents.value = [...selectedAgents.value, agentUuid]
  }

  const selectAgents = (agentUuids: string[]) => {
    selectedAgents.value = selectedAgents.value.concat(agents.value.filter(agent => agentUuids.includes(agent.uuid)).map(agent => agent.uuid))
  }

  const selectAllAgents = () => {
    selectedAgents.value = agents.value.map(weapon => weapon.uuid)
  }

  const unselectAgent = (agentUuid: string) => {
    selectedAgents.value = selectedAgents.value.filter(selectedAgent => selectedAgent !== agentUuid)
  }

  const unselectAllAgents = () => {
    selectedAgents.value = []
  }

  watch(selectedAgents, (newValue, oldValue, onCleanup) => {
    selectedAgentsCookie.value = newValue.join(',')
  })

  return {
    agents,
    selectedAgents,
    selectedAgent,
    loadAgents,
    selectAgent,
    selectAgents,
    selectAllAgents,
    unselectAgent,
    unselectAllAgents,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAgentsStore, import.meta.hot))
