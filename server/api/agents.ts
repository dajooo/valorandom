import type { ValorantAgent } from '~/valorantapi'
import data from '~/data/agents.json'

const agents: ValorantAgent[] = data

export default defineEventHandler(() => agents)
