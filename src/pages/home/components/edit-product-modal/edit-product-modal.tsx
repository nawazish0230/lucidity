import { ComponentType } from "react";
import { TextField } from "@mui/material";
import { Clear } from "@mui/icons-material";
import { Box, Button, Modal, Stack, Typography } from "uikit";
import useStyles from "./edit-product-modal.styles";
import { IEditProductModal } from "./edit-product-modal";

const inputStyles = { marginTop: 3, marginBottom: 3 };

const EditProductModal: ComponentType<IEditProductModal> = ({
  showEditModal,
  handleEditModalClose,
  selectedProduct,
  handleInputChange,
  handleUpdateProduct
}) => {
  const classes = useStyles();

  return (
    <Modal open={showEditModal}>
      <Box className={classes.modalContainer}>
        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h5" className={classes.modalHeading}>
            Edit product
          </Typography>
          <Clear
            className={classes.modalCross}
            onClick={handleEditModalClose}
          />
        </Stack>
        <Typography className={classes.modalTitle}>
          {selectedProduct?.name}
        </Typography>

        <Stack
          flexDirection="row"
          justifyContent="space-between"
          flexWrap="wrap"
        >
          <Box className={classes.modalInput}>
            <TextField
              label="category"
              sx={inputStyles}
              fullWidth
              name="category"
              value={selectedProduct?.category}
              onChange={handleInputChange}
            />
          </Box>
          <Box className={classes.modalInput}>
            <TextField
              label="price"
              sx={inputStyles}
              fullWidth
              name="price"
              value={selectedProduct?.price}
              onChange={handleInputChange}
            />
          </Box>
          <Box className={classes.modalInput}>
            <TextField
              type="number"
              label="quantity"
              fullWidth
              name="quantity"
              value={selectedProduct?.quantity}
              onChange={handleInputChange}
            />
          </Box>
          <Box className={classes.modalInput}>
            <TextField
              label="value"
              fullWidth
              name="totalValue"
              disabled
              value={selectedProduct?.totalValue}
              onChange={handleInputChange}
            />
          </Box>
        </Stack>

        <Stack flexDirection="row" justifyContent="flex-end" gap={4} mt={4}>
          <Button onClick={handleEditModalClose}>Cancel</Button>
          <Button variant="contained" size="small" onClick={handleUpdateProduct}>
            Save
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default EditProductModal;
