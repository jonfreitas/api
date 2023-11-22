export interface CreatePokemon {
  name?: string
  level?: number
  basicForm: string
  ability: string
  middleFormEvolutionLevel?: number
  middleForm?: string
  finalFormEvolutionLevel?: number
  finalForm?: string
  hasMoreEvolution?: boolean
  id?: string
}

export interface GetPokemon {
  id: string
  name?: string
  level?: string
  basicForm?: string
  ability?: string
  middleFormEvolutionLevel?: number
  middleForm?: string
  finalFormEvolutionLevel?: number
  finalForm?: string
  hasMoreEvolution?: boolean
}

export interface UpdatePokemon {
  id: string
  name?: string
  level?: string
  basicForm: string
  ability: string
  abilities?: string[]
  middleFormEvolutionLevel?: number
  middleForm?: string
  finalFormEvolutionLevel?: number
  finalForm?: string
  hasMoreEvolution?: boolean
}

export interface UpdateLevelPokemon {
  id: string
  name?: string
  level: string
  basicForm?: string
  ability?: string
  abilities?: string[]
  middleFormEvolutionLevel?: number
  middleForm?: string
  finalFormEvolutionLevel?: number
  finalForm?: string
  hasMoreEvolution?: boolean
}

export interface ListPokemon {
  id?: string
  name?: string
  level?: string
  basicForm?: string
  ability?: string
  abilities?: string[]
  middleFormEvolutionLevel?: number
  middleForm?: string
  finalFormEvolutionLevel?: number
  finalForm?: string
  hasMoreEvolution?: boolean
}
