import { useState } from 'react';
import type { SubmitEvent } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
function Contacto() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const textFieldSx = {
    '& .MuiInputLabel-root': {
      color: 'hsl(var(--bc) / 0.7)',
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: 'hsl(var(--p))',
    },
    '& .MuiOutlinedInput-root': {
      '& input, & textarea': {
        color: 'hsl(var(--bc))',
      },
      '& fieldset': {
        borderColor: 'hsl(var(--bc) / 0.25)',
      },
      '&:hover fieldset': {
        borderColor: 'hsl(var(--bc) / 0.45)',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'hsl(var(--p))',
      },
    },
    '& .MuiFormHelperText-root': {
      color: 'hsl(var(--bc) / 0.7)',
    },
  };

  const sendEmail = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !message) {
      return;
    }

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div id="contact">
      <div className="mx-auto flex w-full max-w-5xl flex-col px-5 py-10 text-left md:px-10">
        <div className="w-full">
          <h1 className="text-3xl font-bold md:text-4xl">Contáctame</h1>
          <p className="mt-3 text-base md:text-lg">¿Tienes un proyecto esperando en mente? ¡Colaboremos y hagámoslo realidad!</p>
          <Box
            component="form"
            onSubmit={sendEmail}
            noValidate
            autoComplete="off"
            className="mt-6 flex w-full flex-col gap-4"
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <TextField
                required
                fullWidth
                id="outlined-required"
                label="Tu Nombre"
                placeholder="¿Cuál es tu nombre?"
                sx={textFieldSx}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <TextField
                required
                fullWidth
                id="outlined-required"
                label="Correo / Teléfono"
                placeholder="¿Cómo puedo contactarte?"
                sx={textFieldSx}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <TextField
              required
              fullWidth
              id="outlined-multiline-static"
              label="Mensaje"
              placeholder="Envíame cualquier consulta o pregunta"
              multiline
              rows={10}
              sx={textFieldSx}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <Button className="self-start" type="submit" variant="contained" endIcon={<SendIcon />}>
              Enviar
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contacto;