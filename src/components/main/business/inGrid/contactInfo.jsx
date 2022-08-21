import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import variables from "../../../../style/_variables.scss";

const createData = (icon, info) => {
  return { icon, info };
};
const infos = [
  {
    phone: "06205334023",
    mail: "kergeres@gmail.co",
    address: "2125 Ozd, ize u. 33",
  },
];
let rows = [];

for (let i = 0; i < Object.keys(infos[0]).length; i++) {
  let key = Object.keys(infos[0])[i];
  let value = Object.values(infos[0])[i];
  console.log(key);
  console.log(value);
  rows.push({ icon: key, info: value });
  console.log(rows);
}
console.log(rows);

export default function ContactInfo() {
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
          {rows.map((row, index) => {
            console.log(row);
            return (
              <TableRow key={index}>
                <TableCell sx={{ p: "0px", m: 0, width: "10px" }} align="right">
                  {row.icon}
                </TableCell>
                <TableCell sx={{ p: "0px", m: 0, width: "10px" }} align="right">
                  {row.info}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
