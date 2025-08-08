'use client';

import { useState } from 'react';
import {
  Box, Typography, Button, Dialog, DialogTitle, DialogContent
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CategoryTable from './components/CategoryTable';
import CategoryForm from './components/CategoryForm';

export default function CategoryPage() {
  const [open, setOpen] = useState(false);
  const [reload, setReload] = useState(false);
  const [editingCategory, setEditingCategory] = useState<any | null>(null);

  const handleSuccess = () => {
    setOpen(false);
    setReload(prev => !prev); // Trigger table reload
    setEditingCategory(null); // Clear edit data
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
      <Typography variant="h4" gutterBottom>
        Category Management
      </Typography>

      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={() => {
          setEditingCategory(null); // Clear existing data for new entry
          setOpen(true);
        }}
      >
        Add Category
      </Button>
      </Box>

      <CategoryTable
        reload={reload}
        onEdit={(Category: any) => {
          setEditingCategory(Category); // Set data for editing
          setOpen(true);
        }}
      />

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
