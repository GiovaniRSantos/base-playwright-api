import { baseURL } from '../config'

console.log('Base URL:', baseURL)


export function getEndpoint(resource: string): string {
  const baseEndpoint = baseURL

  const options: { [key: string]: string } = {
    products: "products"
  }

  return baseEndpoint + options[resource]
}

export async function getResource(resource: string, queryParam?: string, headers?: Record<string, string>) {
  const endpoint = getEndpoint(resource)
  let url = endpoint

  if (queryParam) {
    url = `${endpoint}?${queryParam}`
  }

  const response = await fetch(url, { headers })
  return response.json()
}
