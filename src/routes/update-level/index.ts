import { IRestRouter, IRoute } from '@sdk12/api'
import service from '../../services/pokemon-service'

export class UpdateLevel implements IRestRouter {
  public type = 'rest'

  getRoutes(): IRoute[] {
    const routes = []

    routes.push({
      method: 'post',
      pattern: '/update-level',
      action: service.updateLevelPokemon,
    })

    return routes
  }
}
