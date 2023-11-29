import { expect } from 'chai'
import { RequestHandler } from '../../src/handlers/request'
import { CreatePokemon, GetPokemon, UpdatePokemon, UpdateLevelPokemon, ListPokemon } from '@/entity/pokemon'
import CreatePokemonMock from '../mocks/pokemon/create-pokemon.json'
import GetPokemonMock from '../mocks/pokemon/get-pokemon.json'
import UpdatePokemonMock from '../mocks/pokemon/update-pokemon.json'
import UpdateLevelPokemonMock from '../mocks/pokemon/update-level-pokemon.json'
import ListPokemonMock from '../mocks/pokemon/list-pokemon.json'

describe('Create Pokémon', () => {
  it('should process creating pokémon request and return a message successfully', () => {
    const {
      basicForm,
      ability,
      middleFormEvolutionLevel,
      middleForm,
      finalFormEvolutionLevel,
      finalForm
    } = RequestHandler.handleCreatePokemonRequest(
      CreatePokemonMock as unknown as CreatePokemon
    )

    expect(basicForm).to.have.deep.equal('Jonmon')
    expect(ability).to.have.deep.equal('Fire')
    expect(middleFormEvolutionLevel).to.have.deep.equal(21)
    expect(middleForm).to.have.deep.equal('Jonjonmon')
    expect(finalFormEvolutionLevel).to.have.deep.equal(30)
    expect(finalForm).to.have.deep.equal('Jonathanmon')
    expect(basicForm).to.have.length(6)
    expect(ability).to.have.length(4)
  })
})

describe('Get Pokémon By Id', () => {
  it('should process getting pokémon by id request and return a message successfully', () => {
    const { id} = RequestHandler.handleGetPokemonRequest(GetPokemonMock.id as string)

    expect(id).to.have.deep.equal('6564ce8f9ce02d2cca8869c6')
    expect(id).to.have.length(24)
  })
})

describe('Update Pokémon', () => {
  it('should process getting pokémon by id request and return a message successfully', () => {
    const {
      id,
      level,
      hasMoreEvolution
    } = RequestHandler.handleUpdatePokemonRequest(UpdatePokemonMock as unknown as UpdatePokemon)

    expect(id).to.have.deep.equal('6564ce8f9ce02d2cca8869c6')
    expect(level).to.have.deep.equal(53)
    expect(hasMoreEvolution).to.have.deep.equal(false)
  })
})

describe('Update Level Pokémon', () => {
  it('should process updating pokémon level request and return a message successfully', () => {
    const {
      id,
      level
    } = RequestHandler.handleUpdateLevelPokemonRequest(UpdateLevelPokemonMock as unknown as UpdateLevelPokemon)

    expect(id).to.have.deep.equal('6564ce8f9ce02d2cca8869c6')
    expect(level).to.have.deep.equal(52)
  })
})

describe('List Pokémon', () => {
  it('should process listing pokémons by abilities or it if more evolution request and return a message successfully', () => {
    const {
      abilities,
      hasMoreEvolution
    } = RequestHandler.handleListPokemonRequest(ListPokemonMock as unknown as ListPokemon)

    expect(hasMoreEvolution).to.have.deep.equal(false)
    expect(abilities).to.have.deep.equal(['Fire', 'Eletric'])
    expect(abilities).to.have.length(2)
  })
})
