import { Request, Response } from '@sdk12/api'
import { PokemonRepository } from '@/repository'
import { CreatePokemon, GetPokemon, UpdatePokemon, UpdateLevelPokemon, ListPokemon } from '@/entity/pokemon'
import { RequestHandler } from "@/handlers/request"

export class PokemonService {
  private pokemonRepository: PokemonRepository
  private handler: RequestHandler

  constructor() {
    this.pokemonRepository = PokemonRepository.build()
  }

  public createPokemon = async (request: Request, response: Response): Promise<void> => {
    try {
      const args: CreatePokemon = this.handler.handleCreatePokemonRequest(request.body)

      const pokemonResponse = await this.pokemonRepository.createPokemon(args)

      response.status(201).json({ id: pokemonResponse.id }).send()
      return
    } catch (error) {
      console.log(error)
      this.sendError(response, error)
    }
  }

  public getPokemonById = async (request: Request, response: Response): Promise<void> => {
    try {
      const args: GetPokemon = this.handler.handleGetPokemonRequest(request.body)

      const pokemonResponse = await this.pokemonRepository.getPokemonById(args.id)

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

  public updatePokemon = async (request: Request, response: Response): Promise<void> => {
    try {
      const args: UpdatePokemon = this.handler.handleUpdatePokemonRequest(request.body)

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

  public updateLevelPokemon = async (request: Request, response: Response): Promise<void> => {
    try {
      const args: UpdateLevelPokemon = this.handler.handleUpdateLevelPokemonRequest(request.body)

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

  public listPokemon = async (request: Request, response: Response): Promise<void> =>  {
    try {
      const args: ListPokemon = this.handler.handleListPokemonRequest(request.body)

      const pokemonsList = await this.pokemonRepository.listPokemon(args)

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

  private sendError(response: Response, error: { message: any; details: any }) {
    response.status(400).json({ error: error.message, details: error.details }).send()
    response.status(403).json({ error: error.message, details: error.details }).send()
    response.status(404).json({ error: error.message, details: error.details }).send()
    response.status(500).json({ error: error.message, details: error.details }).send()
    response.status(503).json({ error: error.message, details: error.details }).send()
  }
}

export default new PokemonService()
