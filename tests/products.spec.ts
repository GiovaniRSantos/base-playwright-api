import { test, expect } from '@playwright/test'
import { getResource } from '../src/helpers'

test('get all products', async () => {
  const products = await getResource('products')
  console.log('GET products:', products)
  expect(products).toBeDefined()
})
