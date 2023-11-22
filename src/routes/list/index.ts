import { IRestRouter, IRoute } from '@sdk12/api'
import service from '../../services/pokemon-service'

export class List implements IRestRouter {
  public type = 'rest'

  getRoutes(): IRoute[] {
    const routes = []

    routes.push({
      method: 'get',
      pattern: '/list',
      action: service.listPokemon,
    })

    return routes
  }

}
