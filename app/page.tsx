
'use client'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useGetAllUsers } from './hooks/useGetAllUsers';
import Link from 'next/link';

export default function Home() {
  const tableData = useGetAllUsers();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell>User</TableCell>
            <TableCell align="right">Commits</TableCell>
            <TableCell align="right">Joined</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(tableData.length !== 0) && tableData.map((row) => (

            <TableRow
              key={row.userName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <Link href={`/${row.id}`}> 
                <TableCell component="th" scope="row">
                  {row.userName}
                </TableCell>
              </Link>
              <TableCell align="right">{row.commits}</TableCell>
              <TableCell align="right">{row.joined}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </main>
  );
}
