'use client';

import { useState } from 'react';
import {
  Box, Typography, Button, Dialog, DialogTitle, DialogContent,
  useTheme,
  Paper
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CategoryTable from './components/CategoryTable';
import CategoryForm from './components/CategoryForm';


export default function CategoryPage() {
  const [open, setOpen] = useState(false);
  const [reload, setReload] = useState(false);
  const [editingCategory, setEditingCategory] = useState<any | null>(null);
    const theme = useTheme();

  const handleSuccess = () => {
    setOpen(false);
    setReload(prev => !prev); // Trigger table reload
    setEditingCategory(null); // Clear edit data
  };

  return (
    <Box sx={{ padding: 0 }}>
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
            Category Management
          </Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => {
              setEditingCategory(null);
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
      <CategoryTable
        reload={reload}
        onEdit={(Category: any) => {
          setEditingCategory(Category); // Set data for editing
          setOpen(true);
        }}
      />
      </Paper>

      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
        <DialogTitle>{editingCategory ? 'Edit Category' : 'Add Category'}</DialogTitle>
        <DialogContent>
          <CategoryForm
            initialData={editingCategory}
            onSuccess={handleSuccess}
          />
        </DialogContent>
      </Dialog>
    </Box>
  );
}
