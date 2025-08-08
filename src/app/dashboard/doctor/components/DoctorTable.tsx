import { useEffect, useState } from 'react';
import {
  Table, TableHead, TableRow, TableCell,
  TableBody, Chip, IconButton, CircularProgress,
  Box, TableSortLabel, TablePagination, TextField, InputAdornment,
  useTheme
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

import { securePost } from '@/app/service/secureClient';
import { useSnackbar } from '../../component/SnackbarProvider';

interface Doctor {
  d_id: number;
  d_name: string;
  isActive: number;
}

interface DoctorTableProps {
  reload: boolean;
  onEdit: (doctor: Doctor) => void;
}

type Order = 'asc' | 'desc';

export default function DoctorTable({ reload, onEdit }: DoctorTableProps) {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);

  // Pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const { showSnackbar } = useSnackbar();

  // Sorting
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<keyof Doctor>('d_name');

  // Search
  const [searchQuery, setSearchQuery] = useState('');
  const theme = useTheme();

  const fetchDoctors = async () => {
    setLoading(true);
    debugger;
    const url = '/api/doctor/getall';
    const req = null;
    const res = await securePost(url, req);
    console.log(res);
    setDoctors(res);
    setLoading(false);
  };

  useEffect(() => {
    fetchDoctors();
  }, [reload]);

  const handleDelete = async (id: number) => {
    const confirmed = window.confirm("Are you sure you want to delete this Doctor?");
    if (!confirmed) return;

    try {

      const url = '/api/doctor/delete';
      const req = { d_id: id };
      const res = await securePost(url, req);

      if ( res.success) {
        fetchDoctors();
        showSnackbar(res.message || 'Doctor deleted successfully', 'success');
      } else {
        showSnackbar(res.message || 'Doctor deleted Failed', 'error');
      }
    } catch (err) {
      console.error(err);
      alert('Error deleting Doctor');
    }
  };

  const handleSort = (property: keyof Doctor) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  // Apply filtering
  const filteredDoctors = doctors.filter(d =>
    d.d_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    d.isActive
  );

  // Apply sorting
  const sortedData = filteredDoctors.slice().sort((a, b) => {
    const aValue = a[orderBy];
    const bValue = b[orderBy];
    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return order === 'asc'
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }
    return 0;
  });

  // Apply pagination
  const paginatedData = sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      {/* Search Input */}
      <Box sx={{ my: 2, width: '100%', border: '1px solid #ccc', borderRadius: 2, }}>
        <TextField
          size="small"
          fullWidth
          placeholder="Search Doctor..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setPage(0); // Reset to first page on search
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* Table */}
      <Table sx={{
        border: '1px solid #ccc',
        borderRadius: 2,
        overflow: 'hidden',
        boxShadow: 2,
      }}
        size="small"
      >
        <TableHead>
          <TableRow sx={{
            bgcolor: theme.palette.primary.main,
          }}>
            <TableCell>#</TableCell>
            {['d_name', 'isActive'].map((key) => (
              <TableCell key={key}>
                <TableSortLabel
                  active={orderBy === key}
                  direction={orderBy === key ? order : 'asc'}
                  onClick={() => handleSort(key as keyof Doctor)}
                >
                  {key.replace('h_', '').replace('_', ' ').toUpperCase()}
                </TableSortLabel>
              </TableCell>
            ))}
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedData.map((row, index) => (
            <TableRow key={row.d_id}>
              <TableCell>{page * rowsPerPage + index + 1}</TableCell>
              <TableCell>{row.d_name}</TableCell>
              <TableCell>
                {row.isActive == 1 ? (
                  <CheckBoxIcon color="success" />
                ) : (
                  <CheckBoxOutlineBlankIcon color="disabled" />
                )}
              </TableCell>

              <TableCell>
                <IconButton onClick={() => onEdit(row)}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDelete(row.d_id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
          {paginatedData.length === 0 && (
            <TableRow>
              <TableCell colSpan={7} align="center">
                No records found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* Pagination */}
      <TablePagination
        component="div"
        count={sortedData.length}
        page={page}
        onPageChange={(_, newPage) => setPage(newPage)}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={(e) => {
          setRowsPerPage(parseInt(e.target.value, 10));
          setPage(0);
        }}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Box>
  );
}
