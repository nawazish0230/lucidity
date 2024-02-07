import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";

import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Header from "./header";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import { ApiStatus } from "constant";
import { Stack } from "uikit";
import { Visibility, VisibilityOff, Edit, Delete } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { deleteProduct, disabledProduct } from "../../../../redux/home/slice";
import { RenderBoundary } from "components";
import { IProduct } from "redux/home/types";
import { ComponentType } from "react";
import { ITableProps } from "./table.types";

const DashboardTable: ComponentType<ITableProps> = ({ handleEditProduct }) => {
  const dispatch = useDispatch();
  const { filteredData, status, error } = useSelector(
    (state: RootState) => state.home
  );
  const { isAdmin } = useSelector(
    (state: RootState) => state.account
  );

  const handleDisableProduct = (selectedProduct: IProduct, isDisabled: boolean) => {
    dispatch(
      disabledProduct({ data: { ...selectedProduct, isDisabled } })
    );
  };

  const handleDeleteProduct = (selectedProduct: IProduct) => {
    dispatch(deleteProduct({ data: selectedProduct }));
  };

  console.log({ filteredData: JSON.stringify(filteredData) })
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <Header />
        <RenderBoundary
          status={status}
          // loading={status === ApiStatus.Loading}
          loading={true}
          errorMessage={<p>{error}</p>}
        >
          <TableBody>
            {filteredData.data?.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  opacity: row.isDisabled ? "0.4" : "1",
                }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.category}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.quantity}</TableCell>
                <TableCell align="right">{row.totalValue}</TableCell>
                <TableCell align="right">
                  <Stack
                    flexDirection="row"
                    spacing={2}
                    alignItems="flex-end"
                    justifyContent="flex-end"
                  >
                    <IconButton
                      sx={{ pointerEvents: (row.isDisabled || isAdmin) ? "none" : "", color: isAdmin ? 'grey' : "green" }}
                    >
                      <Edit onClick={() => handleEditProduct(row)} />
                    </IconButton>
                    <IconButton sx={{ pointerEvents: isAdmin ? "none" : "", color: isAdmin ? 'grey' : "purple" }}>
                      {row.isDisabled ? (
                        <VisibilityOff
                          onClick={() => handleDisableProduct(row, !row.isDisabled)}
                        />
                      ) : (
                        <Visibility onClick={() => handleDisableProduct(row, !row.isDisabled)} />
                      )}
                    </IconButton>
                    <IconButton
                      sx={{ pointerEvents: (row.isDisabled || isAdmin) ? "none" : "", color: isAdmin ? 'grey' : "red" }}
                    >
                      <Delete onClick={() => handleDeleteProduct(row)} />
                    </IconButton>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </RenderBoundary>
      </Table>
    </TableContainer>
  );
};

export default DashboardTable;
