import { test, expect } from '@playwright/test'
import { getResource } from '../src/helpers'

test('get all products', async () => {
  const products = await getResource('products')
  expect(products).toBeDefined()
  expect(Array.isArray(products)).toBe(true)

  products.forEach((item: Product) => {
    expect(item).toHaveProperty('id')
    expect(item).toHaveProperty('title')
    expect(item).toHaveProperty('price')
    expect(item).toHaveProperty('description')
    expect(item).toHaveProperty('category')
    expect(item).toHaveProperty('image')
    expect(item).toHaveProperty('rating')
    expect(item.rating).toHaveProperty('rate')
    expect(item.rating).toHaveProperty('count')
  })
})
