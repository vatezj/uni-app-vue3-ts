
import { TRootState, TRootGetters } from '@/store/index'
import { GettersReturnType } from '@/store/type'

const GettersTypes = {
  cartProducts: 'cartProducts',
  cartTotalPrice: 'cartTotalPrice'
} as const
type VGettersTypes = (typeof GettersTypes)[keyof typeof GettersTypes]

export type TGetters = {
  readonly [key in VGettersTypes]: (
    state: TState, getters: GettersReturnType<TGetters, key>, rootState: TRootState, rootGetters: TRootGetters
  ) => key extends typeof GettersTypes.cartProducts ? Array<{
    title: string;
    price: number;
    quantity: number;
  }> : number
}

// getters
const getters: GetterTree<TState, TRootState> & TGetters = {
  [GettersTypes.cartProducts]: (state, getters, rootState, rootGetters) => {
    // ...
  }
}

