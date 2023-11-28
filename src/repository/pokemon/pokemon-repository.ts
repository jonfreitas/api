import { logger } from '@sdk12/api'
import { buildClient, GrpcError, GrpcRepository } from '../grpc'
import { CreatePokemon, GetPokemon, UpdatePokemon, UpdateLevelPokemon, ListPokemon } from '@/entity/pokemon'

export class PokemonRepository extends GrpcRepository {
  static build(): PokemonRepository {
    const build = buildClient({
      proto: 'pokemon.proto',
      ipAddress: process.env.POKEDATA_SERVER_IP
    })
    return new PokemonRepository(build)
  }

  async createPokemon(pokemon: CreatePokemon): Promise<CreatePokemon> {
    return new Promise((resolve, reject) => {
      try {
        this.client.createPokemon(
          pokemon,
          (error: GrpcError, response: CreatePokemon) => {
            if (error) {
              return reject(this.formatError(error))
            }
            return resolve(response)
          }
        )
      } catch (err) {
        logger.error('CREATE_POKEMON_ERROR', {
          err: err as Error,
          pokemon,
        })
        reject(err)
      }
    })
  }

  async getPokemonById(id: string): Promise<GetPokemon> {
    return new Promise((resolve, reject) => {
      try {
        this.client.getPokemon(
          id,
          (error: GrpcError, response: GetPokemon) => {
            if (error) {
              return reject(this.formatError(error))
            }
            return resolve(response)
          }
        )
      } catch (err) {
        logger.error('GET_POKEMON_ERROR', {
          err: err as Error,
          id,
        })
        reject(err)
      }
    })
  }

  async updatePokemon(pokemon: UpdatePokemon): Promise<UpdatePokemon> {
    return new Promise((resolve, reject) => {
      try {
        this.client.updatePokemon(
          pokemon,
          (error: GrpcError, response: UpdatePokemon) => {
            if (error) {
              return reject(this.formatError(error))
            }
            return resolve(response)
          }
        )
      } catch (err) {
        logger.error('UPDATE_POKEMON_ERROR', {
          err: err as Error,
          pokemon,
        })
        reject(err)
      }
    })
  }

  async updateLevelPokemon(pokemon: UpdateLevelPokemon): Promise<UpdateLevelPokemon> {
    return new Promise((resolve, reject) => {
      try {
        this.client.updateLevelPokemon(
          pokemon,
          (error: GrpcError, response: UpdateLevelPokemon) => {
            if (error) {
              return reject(this.formatError(error))
            }
            return resolve(response)
          }
        )
      } catch (err) {
        logger.error('UPDATE_LEVEL_POKEMON_ERROR', {
          err: err as Error,
          pokemon,
        })
        reject(err)
      }
    })
  }

  async listPokemon(pokemons: ListPokemon): Promise<ListPokemon> {
    return new Promise((resolve, reject) => {
      try {
        this.client.listPokemon(
          pokemons,
          (error: GrpcError, response: ListPokemon) => {
            if (error) {
              return reject(this.formatError(error))
            }
            return resolve(response)
          }
        )
      } catch (err) {
        logger.error('LIST_POKEMON_ERROR', {
          err: err as Error,
          pokemons,
        })
        reject(err)
      }
    })
  }
}
