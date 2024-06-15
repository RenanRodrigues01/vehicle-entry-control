import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

export function Head() {
  return (
    <Grid
    bgcolor={"#FF7247"}
    p={3}
    >
      <Typography 
        variant={"h6"} 
        display={"flex"} 
        justifyContent={"center"}
        color={"white"}
        fontWeight={"bold"}>
        Entrada de veiculos FM
      </Typography>
    </Grid>
  )
}