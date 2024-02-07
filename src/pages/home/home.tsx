import { EditProductModal, Table } from "./components"
import { Box, Stack, Typography } from "uikit"
import { Navbar } from "components"
import CardContainer from "./components/card-container"
import useStyles from "./home.styles"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { fetchHomeData } from "../../redux/home/action"
import { editProduct } from "../../redux/home/slice"
import { IProduct } from "redux/home/types"

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [showEditModal, setShowEditModal] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null)

  useEffect(() => {
    dispatch(fetchHomeData());
  }, [dispatch]);

  const handleEditModalClose = () => {
    setShowEditModal(false)
    setSelectedProduct(null)
  }

  const handleEditProduct = (currentProduct: IProduct) => {
    setSelectedProduct(currentProduct)
    setShowEditModal(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedProduct({ ...selectedProduct, [e.target.name]: e.target.value })
  }

  const handleUpdateProduct = () => {
    dispatch(editProduct({ data: selectedProduct }));
    handleEditModalClose();
  }

  return (
    <Box className={classes.container}>
      <Stack spacing={2}>
        <Navbar />
        <Stack className={classes.innerContainer} flexDirection="column" spacing={2}>
          <Typography variant="h4">Inventory stats</Typography>
          <CardContainer />
          <Table handleEditProduct={handleEditProduct} />
        </Stack>
      </Stack>

      {/* edit product modal */}
      {
        showEditModal && selectedProduct ? (
          <EditProductModal
            showEditModal={showEditModal}
            handleEditModalClose={handleEditModalClose}
            selectedProduct={selectedProduct}
            handleInputChange={handleInputChange}
            handleUpdateProduct={handleUpdateProduct}
          />
        ) : null
      }

    </Box>
  )
}

export default Home
