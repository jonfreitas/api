import { expect } from 'chai'
import { RequestHandler } from '@/handlers/request'
import { CreatePokemon, GetPokemon, UpdatePokemon, UpdateLevelPokemon, ListPokemon } from '@/entity/pokemon'
import CreatePokemonMock from '../mocks/pokemon/create-pokemon.json'
import UpdatePokemonMock from '../mocks/pokemon/update-pokemon.json'
import UpdateLevelPokemonMock from '../mocks/pokemon/update-level-pokemon.json'
import ListPokemonMock from '../mocks/pokemon/list-pokemon.json'

describe('Create Pokémon', () => {
  it('should process creating pokémon request and return a message successfully', () => {
    let handler: RequestHandler

    const {
      id,
      basicForm,
      ability,
      middleFormEvolutionLevel,
      middleForm,
      finalFormEvolutionLevel,
      finalForm
    } = handler.handleCreatePokemonRequest(
      CreatePokemonMock as unknown as CreatePokemon
    )

    expect(basicForm).to.have.deep.equal('Jonmon')
    expect(id).to.have.length(1)
    expect(basicForm).to.have.length(1)
    expect(ability).to.have.length(1)
    expect(middleFormEvolutionLevel).to.have.length(1)
    expect(middleForm).to.have.length(1)
    expect(finalFormEvolutionLevel).to.have.length(1)
    expect(finalForm).to.have.length(1)
  })
})

describe('Get Pokémon By Id', () => {
  it('should process getting pokémon by id request and return a message successfully', () => {
    let handler: RequestHandler
    let getPokemon: GetPokemon

    const { id} = handler.handleGetPokemonRequest(getPokemon.id as string)

    expect(id).to.have.deep.equal('6564ce8f9ce02d2cca8869c6')
    expect(id).to.have.length(1)
  })
})

describe('Update Pokémon', () => {
  it('should process getting pokémon by id request and return a message successfully', () => {
    let handler: RequestHandler

    const {
      id,
      level,
      hasMoreEvolution,
      updated,
      responseMessage
    } = handler.handleUpdatePokemonRequest(UpdatePokemonMock as unknown as UpdatePokemon)

    expect(id).to.have.deep.equal('6564ce8f9ce02d2cca8869c6')
    expect(level).to.have.deep.equal(53)
    expect(hasMoreEvolution).to.have.length(1)
    expect(updated).to.have.length(1)
    expect(responseMessage).to.have.length(1)
  })
})

describe('Update Level Pokémon', () => {
  it('should process updating pokémon level request and return a message successfully', () => {
    let handler: RequestHandler

    const {
      id,
      level,
      updated,
      responseMessage
    } = handler.handleUpdateLevelPokemonRequest(UpdateLevelPokemonMock as unknown as UpdateLevelPokemon)

    expect(id).to.have.deep.equal('6564ce8f9ce02d2cca8869c6')
    expect(level).to.have.deep.equal(52)
    expect(updated).to.have.length(1)
    expect(responseMessage).to.have.length(1)
  })
})

describe('List Pokémon', () => {
  it('should process listing pokémons by abilities or it if more evolution request and return a message successfully', () => {
    let handler: RequestHandler

    const {
      id,
      ability,
      abilities,
      hasMoreEvolution
    } = handler.handleListPokemonRequest(ListPokemonMock as unknown as ListPokemon)

    expect(id).to.have.deep.equal('6564ce8f9ce02d2cca8869c6')
    expect(hasMoreEvolution).to.have.deep.equal(false)
    expect(ability).to.have.length(1)
    expect(abilities).to.have.length(1)
    expect(hasMoreEvolution).to.have.length(1)
  })
})
