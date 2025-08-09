'use client';

// import { Box, Button, Typography } from "@mui/material";
import { useRouter } from 'next/navigation';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Box, Button, Typography, useTheme } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ScienceIcon from "@mui/icons-material/Science";
import EmergencyIcon from "@mui/icons-material/Emergency";


export default function Home() {
  const router = useRouter();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push('/login');
  }

  // return (
  //   <Box
  //     component="form"
  //     onSubmit={handleSubmit}
  //     sx={{
  //       height: '100dvh', // Full viewport height
  //       width: '100dvw',  // Full viewport width
  //       display: 'flex', // To center content
  //       alignItems: 'center',
  //       justifyContent: 'center',
  //       backgroundImage: 'url(/assets/b4b7cb3fafc661eae388ca0f48fed66d.jpg)',
  //       backgroundSize: 'cover',
  //       backgroundPosition: 'center',
  //       backgroundRepeat: 'no-repeat',
  //       color: '#fff',
  //     }}
  //   >
  //     <Box
  //       sx={{
  //         p: 4,
  //         marginLeft:70,
  //         maxWidth: 1000,
  //         width: '100%',
  //                   display: 'flex',
  //         flexDirection: 'column',
  //         alignItems: 'center', // ✅ centers button & text horizontally
  //         justifyContent: 'center', // ✅ centers vertically
  //         textAlign: 'center',

  //       }}
  //     >
  //                 <Typography variant="h2" gutterBottom>
  //           Welcome To Varaha SDC
  //         </Typography>
  //       <Button
  //         variant="contained"
  //         type="submit"
  //         color="primary"
  //         // sx={{ mt: 2,
  //         //   width: '200px'
  //         //  }}
  //       startIcon={<LockOpenIcon sx={{ fontSize: 30 }} />}
  //       sx={{
  //         background: 'linear-gradient(to bottom, #2ecc71, #27ae60)',
  //         color: '#fff',
  //         fontSize: '1.2rem',
  //         fontWeight: 'bold',
  //         borderRadius: '50px',
  //         padding: '12px 28px',
  //         boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
  //         border: '4px solid silver',
  //         textTransform: 'uppercase',
  //         '&:hover': {
  //           background: 'linear-gradient(to bottom, #27ae60, #2ecc71)',
  //         },
  //         '& .MuiButton-startIcon': {
  //           padding: '6px',
  //           marginRight: '12px',
  //           color: '#fff',
  //         },
  //       }}
  //       >
  //         Log In
  //       </Button>
  //     </Box>
  //   </Box>
  // );
  const theme = useTheme();

  return (
    <Box

      sx={{
        minHeight: "100dvh",
        bgcolor: theme.palette.background.default,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
      }}
    >
      {/* Left Image */}
      <Box
        component="img"
        src="/assets/download.jpg"
        alt="Scientist working"
        sx={{
          width: '50dvh',
          objectFit: "cover",
          marginLeft:'10px'
        }}
      />
            <Box
        sx={{
          flex: 1,
          color: theme.palette.common.white,
          p: 5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          bgcolor: theme.palette.primary.main,
          width:'100%'
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          mb={3}
          sx={{ userSelect: "none" }}
        >
          Welcome To Varaha SDC
        </Typography>

        <Box display="flex" justifyContent="center" mb={4}>
          <Button
          onClick={handleSubmit}
            variant="contained"
            startIcon={<LockIcon />}
            sx={{
              borderRadius: 5,
              px: 4,
              py: 1.5,
              fontWeight: "bold",
              backgroundColor: theme.palette.success.main,
              boxShadow: `0 4px 8px 0 ${theme.palette.success.dark}`,
              "&:hover": {
                backgroundColor: theme.palette.success.dark,
              },
            }}
          >
            LOG IN
          </Button>
        </Box>

        {/* Icon Row */}
        <Box
          display="flex"
          justifyContent="space-around"
          sx={{ opacity: 0.8 }}
        >
          <MedicalServicesIcon fontSize="large" />
          <LocalPharmacyIcon fontSize="large" />
          <LocalShippingIcon fontSize="large" />
          <ScienceIcon fontSize="large" />
          <EmergencyIcon fontSize="large" />
        </Box>
      </Box>

    </Box>
    
  );
}
