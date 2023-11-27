import { Request, Response } from '@sdk12/api'
import { PokemonRepository } from '@/repository'
import { CreatePokemon, GetPokemon, UpdatePokemon, UpdateLevelPokemon, ListPokemon } from '@/entity/pokemon'

export class PokemonService {
  private pokemonRepository: PokemonRepository

  constructor() {
    this.pokemonRepository = PokemonRepository.build()
  }

  public createPokemon = async (request: Request, response: Response): Promise<void> => {
    try {
      const args: CreatePokemon = this.handleCreatePokemonRequest(request.body, request.url)

      const pokemonResponse = await this.pokemonRepository.createPokemon(
        args
      )

      response.status(201).json({ id: pokemonResponse.id }).send()
      return
    } catch (error) {
      console.log(error)
      this.sendError(response, error)
    }
  }

  private handleCreatePokemonRequest = (pokemon: CreatePokemon, url: string): CreatePokemon => {
    return {
      basicForm: pokemon.basicForm,
      ability: pokemon.ability,
      middleFormEvolutionLevel: pokemon.middleFormEvolutionLevel,
      middleForm: pokemon.middleForm,
      finalFormEvolutionLevel: pokemon.finalFormEvolutionLevel,
      finalForm: pokemon.finalForm
    }
  }

  public getPokemonById = async (request: Request, response: Response): Promise<void> => {
    console.log(request)
    try {
      const args: GetPokemon = this.handleGetPokemonRequest(request.body, request.url)

      const pokemonResponse = await this.pokemonRepository.getPokemonById(
        args.id
      )

      response.status(200).json({
        id: pokemonResponse.id,
        name: pokemonResponse.name,
        level: pokemonResponse.level,
        basicForm: pokemonResponse.basicForm,
        ability: pokemonResponse.ability,
        middleFormEvolutionLevel: pokemonResponse.middleFormEvolutionLevel,
        middleForm: pokemonResponse.middleForm,
        finalFormEvolutionLevel: pokemonResponse.finalFormEvolutionLevel,
        finalForm: pokemonResponse.finalForm,
        hasMoreEvolution: pokemonResponse.hasMoreEvolution
      }).send()
      return
    } catch (error) {
      console.log(error)
      this.sendError(response, error)
    }
  }

  private handleGetPokemonRequest = (pokemonId: string, url: string): GetPokemon => {
    return {
      id: pokemonId
    }
  }

  public updatePokemon = async (request: Request, response: Response): Promise<void> => {
    try {
      const args: UpdatePokemon = this.handleUpdatePokemonRequest(request.body, request.url)

      const pokemonResponse = await this.pokemonRepository.updatePokemon(args)

      response.status(200).json({
        updated: pokemonResponse.updated,
        message: pokemonResponse.responseMessage
      }).send()
      return
    } catch (error) {
      console.log(error)
      this.sendError(response, error)
    }
  }

  private handleUpdatePokemonRequest = (pokemon: UpdatePokemon, url: string): UpdatePokemon => {
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

  public updateLevelPokemon = async (request: Request, response: Response): Promise<void> => {
    try {
      const args: UpdateLevelPokemon = this.handleUpdateLevelPokemonRequest(request.body, request.url)

      const pokemonResponse = await this.pokemonRepository.updateLevelPokemon(args)

      response.status(200).json({
        levelUpdated: pokemonResponse.updated,
        message: pokemonResponse.responseMessage
      }).send()
      return
    } catch (error) {
      console.log(error)
      this.sendError(response, error)
    }
  }

  private handleUpdateLevelPokemonRequest = (pokemon: UpdateLevelPokemon, url: string): UpdateLevelPokemon => {
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

  public listPokemon = async (request: Request, response: Response): Promise<void> =>  {
    try {
      const args: ListPokemon = this.handleListPokemonRequest(request.body, request.url)

      const pokemonsList = await this.pokemonRepository.listPokemon(
        args
      )

      const pokemons = pokemonsList[Object.keys(pokemonsList)[0]];

      if (pokemons !== undefined) {
        response.status(200).json({ found: true, pokemons }).send()
        return
      }
      response.status(200).json({ found: false }).send()
      return
    } catch (error) {
      console.log(error)
      this.sendError(response, error)
    }
  }

  private handleListPokemonRequest = (pokemon: ListPokemon, url: string): ListPokemon => {
    return {
      abilities: pokemon.abilities,
      hasMoreEvolution: pokemon.hasMoreEvolution
    }
  }

  private sendError(response: Response, error: { message: any; details: any }) {
    response.status(400).json({ error: error.message, details: error.details }).send()
    response.status(403).json({ error: error.message, details: error.details }).send()
    response.status(404).json({ error: error.message, details: error.details }).send()
    response.status(500).json({ error: error.message, details: error.details }).send()
    response.status(503).json({ error: error.message, details: error.details }).send()
  }
}

export default new PokemonService()
