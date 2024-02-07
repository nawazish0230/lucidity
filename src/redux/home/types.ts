import { ApiStatus } from "constant"

interface IProduct {
  name: string
  category: string
  value: string
  quantity: number
  price: string
  totalValue: number
  isDisabled: boolean
}

type IProducts = IProduct[]

interface IProductDetails {
  totalProducts: number
  totalStoreValue: number
  outOfStockProducts: number
  numberOfCategories: number
  data: IProduct[]
}

// initial state of homstate
interface IHomeState {
  data: IProductDetails,
  filteredData: IProductDetails,
  status: keyof typeof ApiStatus,
  error: string | undefined,
}


export type { IProduct, IProducts, IProductDetails, IHomeState }
