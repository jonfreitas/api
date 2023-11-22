import { Engine, IConfig } from '@sdk12/api'

import { Routes } from './routes'

const { APP_CONTEXT = '/pokemon' } = process.env

const config: IConfig = {
  routes: Routes,
  context: APP_CONTEXT,
}

Engine.start(config)
