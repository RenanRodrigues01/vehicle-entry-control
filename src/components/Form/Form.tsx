import { Box, Button, FormControl, Grid, TextField } from "@mui/material";

export function Form() {
  return (
    <Box display={"flex"} justifyContent={"center"} marginTop={"5em"}>
      <FormControl sx={{ backgroundColor: "#fff", padding: "2em", borderRadius: "5px" }}>
        <Grid display={"flex"} flexDirection={"column"} gap={1} >
          <TextField variant="filled" placeholder="Motorista" />
          <TextField variant="filled" placeholder="Placa" />
          <TextField
            variant="filled"
            type="datetime-local"
            placeholder="Horario"
          />
          <TextField variant="filled" type="number" placeholder="Pacotes" />
          <Button variant="contained">ENVIAR</Button>
        </Grid>
      </FormControl>
    </Box>
  );
}
