'use client';

import { Box, Button, Typography } from "@mui/material";
import { useRouter } from 'next/navigation';
import LockOpenIcon from '@mui/icons-material/LockOpen';

export default function Home() {
  const router = useRouter();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push('/login');
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        height: '100dvh', // Full viewport height
        width: '100dvw',  // Full viewport width
        display: 'flex', // To center content
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url(/assets/b4b7cb3fafc661eae388ca0f48fed66d.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#fff',
      }}
    >
      <Box
        sx={{
          p: 4,
          marginLeft:70,
          maxWidth: 1000,
          width: '100%',
                    display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', // ✅ centers button & text horizontally
          justifyContent: 'center', // ✅ centers vertically
          textAlign: 'center',

        }}
      >
                  <Typography variant="h2" gutterBottom>
            Welcome To Varaha SDC
          </Typography>
        <Button
          variant="contained"
          type="submit"
          color="primary"
          // sx={{ mt: 2,
          //   width: '200px'
          //  }}
        startIcon={<LockOpenIcon sx={{ fontSize: 30 }} />}
        sx={{
          background: 'linear-gradient(to bottom, #2ecc71, #27ae60)',
          color: '#fff',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          borderRadius: '50px',
          padding: '12px 28px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
          border: '4px solid silver',
          textTransform: 'uppercase',
          '&:hover': {
            background: 'linear-gradient(to bottom, #27ae60, #2ecc71)',
          },
          '& .MuiButton-startIcon': {
            padding: '6px',
            marginRight: '12px',
            color: '#fff',
          },
        }}
        >
          Log In
        </Button>
      </Box>
    </Box>
  );
}
