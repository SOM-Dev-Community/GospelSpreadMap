import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

// Sample data
const reports = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Person ${i + 1}`,
  status: i % 2 === 0 ? 'good' : 'pending',
  date: `2025-01-${20 - (i % 10)}`,
  email: `person${i + 1}@example.com`,
  phone: `123-456-789${i}`,
  country: `Country ${i + 1}`,
  city: `City ${i + 1}`,
  state: `State ${i + 1}`,
  address: `Address ${i + 1}`,
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 'bold',
}));

const ReportsTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const renderStatusIcon = (status) => {
    return status === 'good' ? (
      <CheckCircleIcon style={{ color: 'green' }} />
    ) : (
      <HourglassEmptyIcon style={{ color: 'orange' }} />
    );
  };

  return (
    <Paper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>S/N</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Contact Information</StyledTableCell>
              <StyledTableCell>Country</StyledTableCell>
              <StyledTableCell>City</StyledTableCell>
              <StyledTableCell>State</StyledTableCell>
              <StyledTableCell>Address</StyledTableCell>
              <StyledTableCell>Date</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reports
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((report) => (
                <TableRow key={report.id}>
                  <TableCell>{report.id}</TableCell>
                  <TableCell>{report.name}</TableCell>
                  <TableCell>
                    <div>{report.email}</div>
                    <div>{report.phone}</div>
                  </TableCell>
                  <TableCell>{report.country}</TableCell>
                  <TableCell>{report.city}</TableCell>
                  <TableCell>{report.state}</TableCell>
                  <TableCell>{report.address}</TableCell>
                  <TableCell>{report.date}</TableCell>
                  <TableCell>{renderStatusIcon(report.status)}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: 'flex', justifyContent: 'flex-start', padding: 2 }}>
        <TablePagination
          component="div"
          count={reports.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[10, 20, 30]}
        />
      </Box>
    </Paper>
  );
};

export default ReportsTable;
