import { baseURL } from '../config'

/**
 * Realiza uma navegação personalizada e verifica o título da página.
 * @param {string} resource Parâmetro referente ao valor e "options" da função getEndpoint.
 */

export async function getEndpoint(resource: string): Promise<string> {
  const baseEndpoint = await baseURL 
  const options: { [key: string]: string } = {
    products: "products"
  }
  
  if (!(resource in options)) {
    throw new Error(`Resource "${resource}" is not defined.`)
  }

  return baseEndpoint + options[resource]
}

export async function getResource(resource: string, queryParam?: string, headers?: Record<string, string>): Promise<any> {
  const endpoint = await getEndpoint(resource)
  let url = endpoint

  if (queryParam) {
    url = `${endpoint}?${queryParam}`
  }

  try {
    const response = await fetch(url, { headers })
    
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`)
    }

    return await response.json() 
  } catch (error) {
    console.error('Fetch error:', error)
    throw error 
  }
}

