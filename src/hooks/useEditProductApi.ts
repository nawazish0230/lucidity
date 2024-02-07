import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { editProduct } from '../redux/home/slice';
import { IProduct } from '../redux/home/types';

const useEditProductApi = () => {
  const dispatch = useDispatch();
  const [showEditModal, setShowEditModal] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null)

  const handleEditModalClose = () => {
    setShowEditModal(false)
    setSelectedProduct(null)
  }

  const handleEditProduct = (currentProduct: IProduct) => {
    setSelectedProduct(currentProduct)
    setShowEditModal(true)
  }

  const handleUpdateProduct = () => {
    dispatch(editProduct({ data: selectedProduct }));
    handleEditModalClose();
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedProduct({ ...selectedProduct, [e.target.name]: e.target.value })
  }

  return {
    showEditModal, selectedProduct, handleEditModalClose, handleEditProduct, handleUpdateProduct, handleInputChange
  }
}

export default useEditProductApi
