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

interface Category {
  c_id: number;
  c_name: string;
  c_type: 'Free' | 'Paid';
}

interface CategoryTableProps {
  reload: boolean;
  onEdit: (category: Category) => void;
}

type Order = 'asc' | 'desc';

export default function CategoryTable({ reload, onEdit }: CategoryTableProps) {
  const [categorys, setCategorys] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  // Pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Sorting
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<keyof Category>('c_name');
  const { showSnackbar } = useSnackbar();

  // Search
  const [searchQuery, setSearchQuery] = useState('');
  const theme = useTheme();

  const fetchCategorys = async () => {
    setLoading(true);
    const url = '/api/category/getall';
    const req = null;
    const res = await securePost(url,req);
    setCategorys(res);
    setLoading(false);
  };

  useEffect(() => {
    fetchCategorys();
  }, [reload]);

  const handleDelete = async (id: number) => {
    const confirmed = window.confirm("Are you sure you want to delete this Category?");
    if (!confirmed) return;

    try {

          const url = '/api/category/delete';
    const req = { c_id: id };
    const res = await securePost(url,req);

      if ( res.success) {
        fetchCategorys();
        showSnackbar(res.message || 'Category deleted successfully', 'success');
      } else {
        showSnackbar(res.message || 'category deleted Failed', 'error');
      }
    } catch (err) {
      console.error(err);
      alert('Error deleting category');
    }
  };

  const handleSort = (property: keyof Category) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  // Apply filtering
  const filteredCategorys = categorys.filter(c =>
    c.c_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.c_type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Apply sorting
  const sortedData = filteredCategorys.slice().sort((a, b) => {
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
      <Box sx={{my:2, width: '100%', border: '1px solid #ccc', borderRadius: 2, }}>
        <TextField
        size="small"
          fullWidth
          placeholder="Search Category..."
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
      <Table   sx={{
    border: '1px solid #ccc',
    borderRadius: 2,
    overflow: 'hidden',
    boxShadow: 2,
  }}
  size="small"
>
        <TableHead>
          <TableRow       sx={{
        bgcolor: theme.palette.primary.main,
      }}>
            <TableCell>#</TableCell>
            {['c_name','c_type'].map((key) => (
              <TableCell key={key}>
                <TableSortLabel
                  active={orderBy === key}
                  direction={orderBy === key ? order : 'asc'}
                  onClick={() => handleSort(key as keyof Category)}
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
            <TableRow key={row.c_id}>
              <TableCell>{page * rowsPerPage + index + 1}</TableCell>
              <TableCell>{row.c_name}</TableCell>
              <TableCell>
                <Chip label={row.c_type} color={row.c_type === 'Paid' ? 'primary' : 'secondary'} />
              </TableCell>
              <TableCell>
                <IconButton onClick={() => onEdit(row)}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDelete(row.c_id)}>
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
