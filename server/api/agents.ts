import data from '../data/agents.json' with { type: 'json' }

const agents: ValorantAgent[] = data

export default defineEventHandler(() => agents)
