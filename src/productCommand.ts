import { expect } from '@playwright/test'

export async function validateProduct(item: Product){
    expect(item).toHaveProperty('id')
    expect(item).toHaveProperty('title')
    expect(item).toHaveProperty('price')
    expect(item).toHaveProperty('description')
    expect(item).toHaveProperty('category')
    expect(item).toHaveProperty('image')
    expect(item).toHaveProperty('rating')
    expect(item.rating).toHaveProperty('rate')
    expect(item.rating).toHaveProperty('count')
  }