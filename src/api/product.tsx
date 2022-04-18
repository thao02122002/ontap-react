import instance from "./instance";
import { ProductType } from "../types/productType";


export const create = (product: ProductType) => {
  const url = `/products`
  return instance.post(url, product)
}

export const list = () => {
  const url = `/products`
  return instance.get(url)
}

export const read = (id: string) => {
   const url = `/products/${id}`
   return instance.get(url)
}

export const update = (product: ProductType) => {
  const url = `/products/${product.id}`
  return instance.put(url, product)
}

export const remove = (id: string) => {
  const url = `/products/${id}`
  return instance.delete(url)
}