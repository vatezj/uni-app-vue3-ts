import { moduleName as cartModuleName ,TState as TCartState} from '@/store/modules/cart'
import { moduleName as productsModuleName,TState as TProductState } from '@/store/modules/products'



export type TRootState = {
  [cartModuleName]: TCartState;
  [productsModuleName]: TProductState;
}

