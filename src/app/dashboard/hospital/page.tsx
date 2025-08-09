// 'use client';

// import { useState } from 'react';
// import {
//   Box, Typography, Button, Dialog, DialogTitle, DialogContent
// } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import HospitalTable from './components/HospitalTable';
// import HospitalForm from './components/HospitalForm';

// export default function HospitalPage() {
//   const [open, setOpen] = useState(false);
//   const [reload, setReload] = useState(false);
//   const [editingHospital, setEditingHospital] = useState<any | null>(null);

//   const handleSuccess = () => {
//     setOpen(false);
//     setReload(prev => !prev); // Trigger table reload
//     setEditingHospital(null); // Clear edit data
//   };

//   return (
//     <Box sx={{ padding: 2 }}>
//       <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>

//         <Button
//           variant="contained"
//           startIcon={<AddIcon />}
//           onClick={() => {
//             setEditingHospital(null); // Clear existing data for new entry
//             setOpen(true);
//           }}
//         >
//           Add Hospital
//         </Button>
//       </Box>

//       <HospitalTable
//         reload={reload}
//         onEdit={(hospital: any) => {
//           setEditingHospital(hospital); // Set data for editing
//           setOpen(true);
//         }}
//       />

//       <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
//         <DialogTitle>{editingHospital ? 'Edit Hospital' : 'Add Hospital'}</DialogTitle>
//         <DialogContent>
//           <HospitalForm
//             initialData={editingHospital}
//             onSuccess={handleSuccess}
//           />
//         </DialogContent>
//       </Dialog>
//     </Box>
//   );
// }
'use client';

import { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Paper,
  useTheme,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import HospitalTable from './components/HospitalTable';
import HospitalForm from './components/HospitalForm';

export default function HospitalPage() {
  const [open, setOpen] = useState(false);
  const [reload, setReload] = useState(false);
  const [editingHospital, setEditingHospital] = useState<any | null>(null);

  const theme = useTheme();

  const handleSuccess = () => {
    setOpen(false);
    setReload((prev) => !prev); // Trigger table reload
    setEditingHospital(null); // Clear edit data
  };

  return (
    <Box sx={{ p: 0 }}>
      {/* Page Header */}
      <Paper
        elevation={1}
        sx={{
          p: 2,
          borderRadius: 2,
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography
            variant="h5"
            sx={{ fontWeight: 500, color: theme.palette.text.primary }}
          >
            Hospital Management
          </Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => {
              setEditingHospital(null);
              setOpen(true);
            }}
            sx={{
              borderRadius: 2,
              textTransform: 'none',
              fontWeight: 500,
            }}
          >
            Add Hospital
          </Button>
        </Box>
        <HospitalTable
          reload={reload}
          onEdit={(hospital: any) => {
            setEditingHospital(hospital);
            setOpen(true);
          }}
        />
      </Paper>

      {/* Form Dialog */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="sm"
        PaperProps={{
          sx: { borderRadius: 2, p: 1 },
        }}
      >
        <DialogTitle
          sx={{
            fontWeight: 600,
            pb: 1,
            color: theme.palette.primary.main,
          }}
        >
          {editingHospital ? 'Edit Hospital' : 'Add Hospital'}
        </DialogTitle>
        <DialogContent sx={{ pt: 1 }}>
          <HospitalForm initialData={editingHospital} onSuccess={handleSuccess} />
        </DialogContent>
      </Dialog>
    </Box>
  );
}

