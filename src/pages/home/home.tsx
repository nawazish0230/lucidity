import { EditProductModal, Table } from "./components"
import { Box, Stack, Typography } from "uikit"
import { Navbar } from "components"
import CardContainer from "./components/card-container"
import useStyles from "./home.styles"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchHomeData } from "../../redux/home/action"
import useEditProductApi from "hooks/useEditProductApi"

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const {
    showEditModal, selectedProduct, handleInputChange, handleEditModalClose, handleEditProduct, handleUpdateProduct
  } = useEditProductApi();

  useEffect(() => {
    dispatch(fetchHomeData());
  }, [dispatch]);

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
