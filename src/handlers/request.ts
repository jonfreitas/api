import {CreatePokemon, GetPokemon, ListPokemon, UpdateLevelPokemon, UpdatePokemon} from "@/entity/pokemon";

export class RequestHandler {

  public static handleCreatePokemonRequest = (pokemon: CreatePokemon): CreatePokemon => {
    return {
      basicForm: pokemon.basicForm,
      ability: pokemon.ability,
      middleFormEvolutionLevel: pokemon.middleFormEvolutionLevel,
      middleForm: pokemon.middleForm,
      finalFormEvolutionLevel: pokemon.finalFormEvolutionLevel,
      finalForm: pokemon.finalForm
    }
  }

  public static handleGetPokemonRequest = (pokemonId: string): GetPokemon => {
    return {
      id: pokemonId
    }
  }

  public static handleUpdatePokemonRequest = (pokemon: UpdatePokemon): UpdatePokemon => {
    return {
      id: pokemon.id,
      name: pokemon.name,
      level: pokemon.level,
      basicForm: pokemon.basicForm,
      ability: pokemon.ability,
      middleFormEvolutionLevel: pokemon.middleFormEvolutionLevel,
      middleForm: pokemon.middleForm,
      finalFormEvolutionLevel: pokemon.finalFormEvolutionLevel,
      finalForm: pokemon.finalForm,
      hasMoreEvolution: pokemon.hasMoreEvolution,
      updated: pokemon.updated,
      responseMessage: pokemon.responseMessage
    }
  }

  public static handleUpdateLevelPokemonRequest = (pokemon: UpdateLevelPokemon): UpdateLevelPokemon => {
    return {
      id: pokemon.id,
      name: pokemon.name,
      level: pokemon.level,
      basicForm: pokemon.basicForm,
      ability: pokemon.ability,
      abilities: pokemon.abilities,
      middleFormEvolutionLevel: pokemon.middleFormEvolutionLevel,
      middleForm: pokemon.middleForm,
      finalFormEvolutionLevel: pokemon.finalFormEvolutionLevel,
      finalForm: pokemon.finalForm,
      hasMoreEvolution: pokemon.hasMoreEvolution,
      sentMessage: pokemon.sentMessage,
      origin: pokemon.origin,
      updated: pokemon.updated,
      responseMessage: pokemon.responseMessage
    }
  }

  public static handleListPokemonRequest = (pokemon: ListPokemon): ListPokemon => {
    return {
      abilities: pokemon.abilities,
      hasMoreEvolution: pokemon.hasMoreEvolution
    }
  }

}
