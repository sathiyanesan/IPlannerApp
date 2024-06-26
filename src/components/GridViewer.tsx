// import * as React from 'react';
// import PropTypes from 'prop-types';
// import { useState, useEffect } from "react";
// import Paper from '@mui/material/Paper';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import { TableSortLabel } from '@mui/material';
// import Box from "@mui/material/Box";
// import { visuallyHidden } from "@mui/utils";



// const GridViewer = () => {

//     const [tableData, setTableData] = useState([]);
//     const { Items }:any = tableData;

//     const [page, setPage] = React.useState(0);
//     const [rowsPerPage, setRowsPerPage] = React.useState(5);

//     const [order, setOrder] = React.useState("desc");
//     const [orderBy, setOrderBy] = React.useState("timestamp");

//     const getData = async () => {
//         try {
//             const result = await fetch(`${import.meta.env.VITE_BASE_URL}/devices/filter/date/example_device_001/2024-05-01T12:00:00/2024-05-16T12:00:00`, {
//                 method: 'GET',
//                 headers: {
//                     'authorization': 'Msts*1275'
//                 }
//             })
//             const jsonData = await result.json()
//             setTableData(jsonData)

//         } catch (err) {
//             console.log(err);
//         }

//     }

//     useEffect(() => {
//         getData()
//     }, [])

//     let rows:any = [];

//     if (Items) {
//         Items?.map((item:any) => {
//             let deviceType = item.metadata.device_type;
//             let deviceId = item.device_id
//             let waterLevelUnit = item.data.water_level.unit
//             let waterLevelValue = item.data.water_level.value
//             let batteryPower = item.data.battery_power.value
//             let pumpStatus = item.data.pump_status
//             let timestamp = new Date(item.timestamp).toLocaleString("en-GB", { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' })
//             let id = item.id

//             rows.push({ id, deviceType, deviceId, waterLevelUnit, waterLevelValue, batteryPower, pumpStatus, timestamp });
//         })
//     }



//     const handleChangePage = (event, newPage) => {
//         setPage(newPage);
//     };

//     const handleChangeRowsPerPage = (event) => {
//         setRowsPerPage(+event.target.value);
//         setPage(0);
//     };

//     const handleRequestSort = (event, property) => {
//         const isAsc = orderBy === property && order === "asc";
//         setOrder(isAsc ? "desc" : "asc");
//         setOrderBy(property);
//     };


//     function descendingComparator(a, b, orderBy) {
//         if (b[orderBy] < a[orderBy]) {
//             return -1;
//         }
//         if (b[orderBy] > a[orderBy]) {
//             return 1;
//         }
//         return 0;
//     }

//     function getComparator(order, orderBy) {
//         return order === "desc"
//             ? (a, b) => descendingComparator(a, b, orderBy)
//             : (a, b) => -descendingComparator(a, b, orderBy);
//     }

//     function stableSort(array, comparator) {
//         const stabilizedThis = array.map((el, index) => [el, index]);
//         stabilizedThis.sort((a, b) => {
//             const order = comparator(a[0], b[0]);
//             if (order !== 0) {
//                 return order;
//             }
//             return a[1] - b[1];
//         });
//         return stabilizedThis.map((el) => el[0]);
//     }

//     const visibleRows = React.useMemo(
//         () => (
//             stableSort(rows, getComparator(order, orderBy)).slice(
//                 page * rowsPerPage,
//                 page * rowsPerPage + rowsPerPage
//             )
//         ),
//         [rows, order, orderBy, page, rowsPerPage]
//     );

//     const columns = [
//         { id: 'deviceType', label: 'Device\u00a0Type', minWidth: 100, align: 'center', },
//         { id: 'deviceId', label: 'Device\u00a0Id', minWidth: 100, align: 'center', },
//         {
//             id: 'waterLevelUnit',
//             label: 'Water\u00a0Level\u00a0Unit',
//             minWidth: 100,
//             align: 'center',
//             format: (value) => value.toLocaleString('en-GB'),
//         },
//         {
//             id: 'waterLevelValue',
//             label: 'Water\u00a0Level\u00a0Value',
//             minWidth: 100,
//             align: 'center',
//             format: (value) => value.toLocaleString('en-GB'),
//         },
//         {
//             id: 'batteryPower',
//             label: 'Battery\u00a0(%)',
//             minWidth: 100,
//             align: 'center',
//             format: (value) => value.toLocaleString('en-GB'),
//         }, {
//             id: 'pumpStatus',
//             label: 'Pump\u00a0Status',
//             minWidth: 100,
//             align: 'center',

//         }, {
//             id: 'timestamp',
//             label: 'Time',
//             minWidth: 100,
//             align: 'center',
//             format: (value) => value.toLocaleString('en-GB'),
//         }
//     ];



//     function EnhancedTableHead(props) {
//         const { order, orderBy, onRequestSort } = props;
//         const createSortHandler = (property) => (event) => {
//             onRequestSort(event, property);
//         };

//         return (
//             <TableHead>
//                 <TableRow>
//                     {columns.map((column) => (
//                         <TableCell
//                             key={column.id}
//                             align={column.align}
//                             style={{ minWidth: column.minWidth }}
//                             sortDirection={orderBy === column.id ? order : false}
//                         >
//                             <TableSortLabel
//                                 active={orderBy === column.id}
//                                 direction={orderBy === column.id ? order : 'asc'}
//                                 onClick={createSortHandler(column.id)}
//                             >
//                                 {column.label}
//                                 {orderBy === column.id ? (
//                                     <Box component="span" sx={visuallyHidden}>
//                                         {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
//                                     </Box>
//                                 ) : null}
//                             </TableSortLabel>
//                         </TableCell>
//                     ))}
//                 </TableRow>
//             </TableHead>
//         );
//     }

//     EnhancedTableHead.propTypes = {
//         onRequestSort: PropTypes.func.isRequired,
//         order: PropTypes.oneOf(['asc', 'desc']).isRequired,
//         orderBy: PropTypes.string.isRequired,
//     };



//     return (<>
//         <Paper sx={{ width: '100%', overflow: 'hidden' }}>
//             <TableContainer sx={{ maxHeight: 440 }}>
//                 <Table stickyHeader aria-label="sticky table">
//                     <EnhancedTableHead
//                         order={order}
//                         orderBy={orderBy}
//                         onRequestSort={handleRequestSort}
//                     />

//                     <TableBody>
//                         {visibleRows
//                             .map((row) => {
//                                 return (
//                                     <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
//                                         {columns.map((column) => {
//                                             const value = row[column.id];
//                                             return (
//                                                 <TableCell key={column.id} align={column.align}>
//                                                     {column.format && typeof value === 'number'
//                                                         ? column.format(value)
//                                                         : value}
//                                                 </TableCell>
//                                             );
//                                         })}
//                                     </TableRow>
//                                 );
//                             })}
//                     </TableBody>
//                 </Table>
//             </TableContainer>
//             <TablePagination
//                 rowsPerPageOptions={[5, 10, 25, 100]}
//                 component="div"
//                 count={rows.length}
//                 rowsPerPage={rowsPerPage}
//                 page={page}
//                 onPageChange={handleChangePage}
//                 onRowsPerPageChange={handleChangeRowsPerPage}
//             />
//         </Paper >
//     </>)
// }

// export default GridViewer;