import data from '~/data/agent-roles.json'
const agentRoles: ValorantAgentRole[] = data

export default defineEventHandler(() => agentRoles)
