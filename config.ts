import config from './playwright.config'

interface ProjectConfig {
  name: string
  use: {
    baseURL: string
  }
}

interface PlaywrightConfig {
  projects: ProjectConfig[]
}

const typedConfig: PlaywrightConfig = config as PlaywrightConfig

export const baseURL = typedConfig.projects[0].use.baseURL
