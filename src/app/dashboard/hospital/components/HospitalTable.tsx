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
import { securePost } from '@/app/service/secureClient';
import { useSnackbar } from '../../component/SnackbarProvider';

interface Hospital {
  h_id: number;
  name: string;
  h_short: string;
  h_type: 'Private' | 'Government';
  h_contact: string;
  h_address: string;
}

interface HospitalTableProps {
  reload: boolean;
  onEdit: (hospital: Hospital) => void;
}

type Order = 'asc' | 'desc';

export default function HospitalTable({ reload, onEdit }: HospitalTableProps) {
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [loading, setLoading] = useState(true);

  // Pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Sorting
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<keyof Hospital>('name');

  // Search
  const [searchQuery, setSearchQuery] = useState('');
  const theme = useTheme();

  const fetchHospitals = async () => {
    setLoading(true);
    const url = '/api/hospital/getall';
    const req = null;
    const res = await securePost(url, req);
    setHospitals(res);
    setLoading(false);
  };
  const { showSnackbar } = useSnackbar();

  useEffect(() => {
    fetchHospitals();
  }, [reload]);

  const handleDelete = async (id: number) => {
    const confirmed = window.confirm("Are you sure you want to delete this hospital?");
    if (!confirmed) return;

    try {
      const url = '/api/hospital/delete';
      const req = { h_id: id };
      const res = await securePost(url, req);

      if ( res.success) {
        fetchHospitals();
        showSnackbar(res.message || 'hospital deleted successfully', 'success');
      } else {
        showSnackbar(res.message || 'Hospital deleted Failed', 'error');
      }
    } catch (err) {
      console.error(err);
      alert('Error deleting hospital');
    }
  };

  const handleSort = (property: keyof Hospital) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  // Apply filtering
  const filteredHospitals = hospitals.filter(h =>
    h.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    h.h_short.toLowerCase().includes(searchQuery.toLowerCase()) ||
    h.h_contact.toLowerCase().includes(searchQuery.toLowerCase()) ||
    h.h_address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Apply sorting
  const sortedData = filteredHospitals.slice().sort((a, b) => {
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
          placeholder="Search hospital..."
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
        boxShadow: 1,
      }}
      size="small"
      >
        <TableHead>
          <TableRow sx={{
            bgcolor: theme.palette.primary.main,
          }}>
            <TableCell>#</TableCell>
            {['name', 'h_short', 'h_type', 'h_contact', 'h_address'].map((key) => (
              <TableCell key={key}>
                <TableSortLabel
                  active={orderBy === key}
                  direction={orderBy === key ? order : 'asc'}
                  onClick={() => handleSort(key as keyof Hospital)}
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
            <TableRow key={row.h_id}>
              <TableCell>{page * rowsPerPage + index + 1}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.h_short}</TableCell>
              <TableCell>
                <Chip label={row.h_type} color={row.h_type === 'Private' ? 'primary' : 'secondary'} />
              </TableCell>
              <TableCell>{row.h_contact}</TableCell>
              <TableCell>{row.h_address}</TableCell>
              <TableCell>
                <IconButton onClick={() => onEdit(row)}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDelete(row.h_id)}>
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
