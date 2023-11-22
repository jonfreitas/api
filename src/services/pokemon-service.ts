import { Request, Response } from '@sdk12/api'
import { PokemonRepository } from '../repository/pokemon/pokemon-repository'
import { CreatePokemon, GetPokemon, UpdatePokemon, UpdateLevelPokemon, ListPokemon } from '../entity/pokemon'
import { BadRequestError } from '../entity/errors'
import path from 'path'

const pathProto = path.join(__dirname, '..', '..', 'src/protos/pokemon.proto')

export class PokemonService {
  private pokemonRepository: PokemonRepository

  constructor() {
    this.pokemonRepository = PokemonRepository.build()
  }

  public createPokemon = async (request: Request, response: Response): Promise<void> => {
    try {
      const pokemon: CreatePokemon = this.handleCreatePokemonRequest(request.body, request.url)

      const pokemonResponse = await this.pokemonRepository.createPokemon(
        pokemon
      )

      response.status(201).json({ id: pokemonResponse.id }).send()
      return
    } catch (error) {
      console.log(error)
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
    try {
      const pokemon: GetPokemon = this.handleGetPokemonRequest(request.body, request.url)

      const pokemonResponse = await this.pokemonRepository.getPokemonById(
        pokemon.id
      )

      response.status(200).json({ 
        id: pokemonResponse.id,
        name: pokemonResponse.name,
        level: pokemonResponse.level,
        basicForm: pokemonResponse.basicForm,
        ability: pokemonResponse.ability,
        middleFormEvolutionLevel: pokemonResponse.middleFormEvolutionLevel,
        middleForm: pokemonResponse.middleForm,
        finalFormEvolutionLeveld: pokemonResponse.finalFormEvolutionLevel,
        finalForm: pokemonResponse.finalForm,
        hasMoreEvolution: pokemonResponse.hasMoreEvolution
      }).send()
      return
    } catch (error) {
      console.log(error)
    }
  }

  private handleGetPokemonRequest = (pokemonId: string, url: string): GetPokemon => {
    return {
      id: pokemonId
    }
  }

  public updatePokemon = async (request: Request, response: Response): Promise<void> => {
    try {
      const pokemon: UpdatePokemon = this.handleUpdatePokemonRequest(request.body, request.url)
      
      const pokemonResponse = await this.pokemonRepository.updatePokemon(
        pokemon
      )

      response.status(200).json({ updated: true }).send()
      return
    } catch (error) {
      console.log(error)
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
      hasMoreEvolution: pokemon.hasMoreEvolution
    }
  }

  public updateLevelPokemon = async (request: Request, response: Response): Promise<void> => {
    try {
      const pokemon: UpdateLevelPokemon = this.handleUpdateLevelPokemonRequest(request.body, request.url)
      
      const pokemonResponse = await this.pokemonRepository.updateLevelPokemon(
        pokemon
      )

      response.status(200).json({ levelUpdated: true }).send()
      
      return
    } catch (error) {
      console.log(error)
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
      hasMoreEvolution: pokemon.hasMoreEvolution
    }
  }

  public listPokemon = async (request: Request, response: Response): Promise<void> =>  {
    try {
      const pokemon: ListPokemon = this.handleListPokemonRequest(request.body, request.url)
      
      const pokemonResponse = await this.pokemonRepository.listPokemon(
        pokemon
      )

      response.status(200).json([
        {
          found: true
        },
        { 
          id: pokemonResponse.id,
          name: pokemonResponse.name,
          level: pokemonResponse.level,
          basicForm: pokemonResponse.basicForm,
          ability: pokemonResponse.ability,
          middleFormEvolutionLevel: pokemonResponse.middleFormEvolutionLevel,
          middleForm: pokemonResponse.middleForm,
          finalFormEvolutionLeveld: pokemonResponse.finalFormEvolutionLevel,
          finalForm: pokemonResponse.finalForm
        }
      ]).send()
      
      return
    } catch (error) {
      console.log(error)
    }
  }

  private handleListPokemonRequest = (pokemon: ListPokemon, url: string): ListPokemon => {
    return {
      abilities: pokemon.abilities,
      hasMoreEvolution: pokemon.hasMoreEvolution
    }
  }
}

export default new PokemonService()