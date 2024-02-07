import React from 'react'
import DashboardCard from "./dashboard-card"
import { Stack } from "uikit"
import { RootState } from 'redux/store'
import { useSelector } from 'react-redux'
import { RenderBoundary } from 'components'
import { ApiStatus } from 'constant'
import { ShoppingCart, Paid, RemoveShoppingCart, Category } from '@mui/icons-material';

const CardContainer = () => {
  const { filteredData, status, error } = useSelector((state: RootState) => state.home);

  const { totalProducts, numberOfCategories, outOfStockProducts, totalStoreValue } = filteredData

  return (
    <RenderBoundary status={status} loading={status === ApiStatus.Loading} errorMessage={<p>{error}</p>}>
      <Stack direction="row" spacing={2}>
        <DashboardCard icon={ShoppingCart} title="Total product" value={totalProducts} />
        <DashboardCard icon={Paid} title="Total store value" value={totalStoreValue} />
        <DashboardCard icon={RemoveShoppingCart} title="Out of stocks" value={outOfStockProducts} />
        <DashboardCard icon={Category} title="No of Category" value={numberOfCategories} />
      </Stack>
    </RenderBoundary>
  )
}

export default CardContainer
