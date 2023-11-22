import { IRestRouter, IRoute } from '@sdk12/api'
import service from '../../services/pokemon-service'

export class Get implements IRestRouter {
  public type = 'rest'

  getRoutes(): IRoute[] {
    const routes = []

    routes.push({
      method: 'get',
      pattern: '/getById',
      action: service.getPokemonById,
    })

    return routes as IRoute[]
  }

}
