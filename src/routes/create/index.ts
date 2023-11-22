import { IRestRouter, IRoute } from '@sdk12/api'
import service from '../../services/pokemon-service'

export class Create implements IRestRouter {
  public type = 'rest'

  getRoutes(): IRoute[] {
    const routes = []

    routes.push({
      method: 'post',
      pattern: '/create',
      action: service.createPokemon,
    })

    return routes as IRoute[]
  }

}
