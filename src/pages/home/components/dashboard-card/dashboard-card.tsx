import { Card, Stack, Typography } from 'uikit';
import useStyles from './dashboard-card.styles';
import { ComponentType } from 'react';
import { IDashboardCardProps } from './dashboard-card';

const DashboardCard: ComponentType<IDashboardCardProps> = ({ icon: Icon, title, value }) => {
  const classes = useStyles();

  return (
    <Card className={classes.container}>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={2}
      >
        <Icon />
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          spacing={1}
        >
          <Typography>
            {title}
          </Typography>
          <Typography variant="h4">
            {value}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  )
}

export default DashboardCard
