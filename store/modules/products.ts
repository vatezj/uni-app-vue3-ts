export const moduleName = 'products'

export type IProductItem = { id: number, title: string, inventory: number; quantity: number }
export type TState = {
  items: Array<{ id: number, quantity: number }>;
  checkoutStatus: null | 'successful' | 'failed'
}

const state: () => TState = () => ({
  items: [],
  checkoutStatus: null
})

