import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import variables from "../../../../style/_variables.scss";

const createData = (name, open, close) => {
  return { name, open, close };
};
const times = [
  {
    mondayOpen: "8:00",
    mondayClose: "16:00",
    tuesdayOpen: "16:00",
    tuesdayClose: "16:00",
    wednesdayOpen: "16:00",
    wednesdayClose: "16:00",
    thursdayOpen: "16:00",
    thursdayClose: "16:00",
    fridayOpen: "8:00",
    fridayClose: "16:00",
    saturdayOpen: "8:00",
    saturdayClose: "16:00",
    sundayOpen: "8:00",
    sundayClose: "16:00",
  },
];
const rows = [
  createData("Hétfő", times[0].mondayOpen, times[0].mondayClose),
  createData("Kedd", times[0].fridayOpen, times[0].fridayClose),
  createData("Szerda", times[0].fridayOpen, times[0].fridayClose),
  createData("Csütörtök", times[0].fridayOpen, times[0].fridayClose),
  createData("Péntek", times[0].fridayOpen, times[0].fridayClose),
  createData("Szombat", times[0].fridayOpen, times[0].fridayClose),
  createData("Vasárnap", times[0].fridayOpen, times[0].fridayClose),
];

export default function OpeningHours() {
  return (
    <TableContainer>
      <Table
        sx={{
          [`& .${tableCellClasses.root}`]: {
            border: "none",
          },
        }}
      >
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell
                sx={{ p: "3px", m: 0, color: variables.mainGray }}
                component="th"
                scope="row"
              >
                {row.name}
              </TableCell>
              <TableCell sx={{ p: "0px", m: 0, width: "10px" }} align="right">
                {row.open}
              </TableCell>
              <TableCell sx={{ p: "2px", m: 0, width: "0px" }} align="right">
                -
              </TableCell>
              <TableCell sx={{ p: "0px", m: 0, width: "10px" }} align="right">
                {row.close}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
