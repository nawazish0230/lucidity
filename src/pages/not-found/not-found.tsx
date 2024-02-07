import { Box, Button, Stack, Typography } from "uikit"
import useStyles from "./not-found.styles";
import { useNavigate } from "react-router-dom";

const btnContainer =  { marginTop: 2, cursor: 'pointer' }

const NotFound = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/")
  }

  return (
    <Box className={classes.container}>
      <Stack>
        <Typography variant="h4">
          Not Found
        </Typography>
        <Button sx={btnContainer} variant="contained" onClick={handleBack}>Back to Home</Button>
      </Stack>
    </Box>
  )
}

export default NotFound
