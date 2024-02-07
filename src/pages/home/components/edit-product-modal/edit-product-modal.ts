import { IProduct } from "redux/home/types";

interface IEditProductModal {
  showEditModal: boolean
  handleEditModalClose: () => void
  selectedProduct: IProduct | null;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleUpdateProduct: () => void
}

export type { IEditProductModal }
