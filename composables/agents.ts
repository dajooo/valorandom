import { acceptHMRUpdate, defineStore } from 'pinia'
import type { ValorantAgent } from '~/valorantapi'

export const useAgentsStore = defineStore('agents', () => {
  let agents = $ref<ValorantAgent[]>([])
  let selectedAgents = $ref<string[]>([])
  let selectedAgentsCookie = $(useCookie('selected_agents'))
  const selectedAgent = $ref('')

  const loadAgents = async () => {
    if (agents.length > 0)
      return
    const { data: fetchedAgents } = await useFetch<ValorantAgent[]>('/api/agents')
    agents = fetchedAgents.value!
    if (selectedAgentsCookie)
      selectedAgents = selectedAgentsCookie.split(',')
  }

  const selectAgent = (agentUuid: string) => {
    selectedAgents = [...selectedAgents, agentUuid]
    selectedAgentsCookie = selectedAgents.join(',')
  }

  const selectAgents = (agentUuids: string[]) => {
    selectedAgents = selectedAgents.concat(agents.filter(agent => agentUuids.includes(agent.uuid)).map(agent => agent.uuid))
    selectedAgentsCookie = selectedAgents.join(',')
  }

  const selectAllAgents = () => {
    selectedAgents = agents.map(weapon => weapon.uuid)
    selectedAgentsCookie = selectedAgents.join(',')
  }

  const unselectAgent = (agentUuid: string) => {
    selectedAgents = selectedAgents.filter(selectedAgent => selectedAgent !== agentUuid)
    selectedAgentsCookie = selectedAgents.join(',')
  }

  const unselectAllAgents = () => {
    selectedAgents = []
    selectedAgentsCookie = selectedAgents.join(',')
  }

  return {
    agents: $$(agents),
    selectedAgents: $$(selectedAgents),
    selectedAgent: $$(selectedAgent),
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
