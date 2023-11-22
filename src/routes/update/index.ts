import { IRestRouter, IRoute } from '@sdk12/api'
import service from '../../services/pokemon-service'

export class Update implements IRestRouter {
  public type = 'rest'

  getRoutes(): IRoute[] {
    const routes = []

    routes.push({
      method: 'post',
      pattern: '/update',
      action: service.updatePokemon,
    })

    return routes
  }
}
