import { test, expect } from '@playwright/test'
import { getResource } from '../src/helpers'
import {validateProduct} from '../src/productCommand'

test.describe('Produtos',() => {
  test('get all products', async () => {
    const products = await getResource('products')
    expect(products).toBeDefined()
    expect(Array.isArray(products)).toBe(true)
  
    
    products.forEach((item: Product) => {
      validateProduct(item)
    })
  })
  
  test('get one product', async () => {
    const products = await getResource('products', '1')
    expect(products).toBeDefined()
    expect(Array.isArray(products)).toBe(true)
  
    products.forEach((item: Product) => {
      validateProduct(item)
    })
  })
})


