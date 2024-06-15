import { useForm } from "react-hook-form";
import { TextField, Button, Stack, Box } from "@mui/material";
import { DevTool } from "@hookform/devtools";

type FormValues = {
  nome: string;
  placa: string;
  horaChegada: string;
  QTDE: string;
};

export const Form = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm<FormValues>({
    defaultValues: {
      nome: "",
      placa: "",
      horaChegada: "",
      QTDE: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <Box display={"flex"} justifyContent={"center"} marginTop={"5em"}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Stack
          spacing={2}
          bgcolor={"#fff"}
          padding={"2em"}
          borderRadius={"5px"}
        >
          <TextField
            label="Motorista"
            type="text"
            {...register("nome", { required: "Motorista é necessario" })}
            error={!!errors.nome}
            helperText={errors.nome?.message}
          />
          <TextField
            label="Placa"
            type="text"
            {...register("placa", { required: "Placa é necessario" })}
            error={!!errors.placa}
            helperText={errors.placa?.message}
          />
          <TextField
            label="Horario de Chegada"
            type="time"
            {...register("horaChegada", { required: "Horario de chegada é necessario" })}
            error={!!errors.horaChegada}
            helperText={errors.horaChegada?.message}
          />
          <TextField
            label="Quantidade"
            type="text"
            {...register("QTDE", { required: "Quantidade é necessario" })}
            error={!!errors.QTDE}
            helperText={errors.QTDE?.message}
          />
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
        </Stack>
      </form>
      
    </Box>
  );
};
