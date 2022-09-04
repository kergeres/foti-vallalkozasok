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

export default function OpeningHours(props) {
  const rows = [
    createData(
      "Hétfő",
      props.business[0].openingHours.mondayOpen,
      props.business[0].openingHours.mondayClose
    ),
    createData(
      "Kedd",
      props.business[0].openingHours.tuesdayOpen,
      props.business[0].openingHours.tuesdayClose
    ),
    createData(
      "Szerda",
      props.business[0].openingHours.wednesdayOpen,
      props.business[0].openingHours.wednesdayClose
    ),
    createData(
      "Csütörtök",
      props.business[0].openingHours.thursdayOpen,
      props.business[0].openingHours.thursdayClose
    ),
    createData(
      "Péntek",
      props.business[0].openingHours.fridayOpen,
      props.business[0].openingHours.fridayClose
    ),
    createData(
      "Szombat",
      props.business[0].openingHours.saturdayOpen,
      props.business[0].openingHours.saturdayClose
    ),
    createData(
      "Vasárnap",
      props.business[0].openingHours.sundayOpen,
      props.business[0].openingHours.sundayClose
    ),
  ];
  return (
    <TableContainer>
      <Table
        sx={{
          [`& .${tableCellClasses.root}`]: {
            // border: "none",
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
              <TableCell
                sx={{
                  p: "0px",
                  m: 0,
                  width: "20px",
                  // border: "1px solid black",
                }}
                // align="right"
              >
                {row.open === ""
                  ? ""
                  : row.open == null
                  ? ""
                  : row.open === "zárva"
                  ? ""
                  : row.close === ""
                  ? ""
                  : row.close == null
                  ? ""
                  : row.close === "zárva"
                  ? ""
                  : row.open}
              </TableCell>
              <TableCell sx={{ p: "2px", m: 0, width: "0px" }} align="right">
                {row.open === ""
                  ? ""
                  : row.open == null
                  ? ""
                  : row.open === "zárva"
                  ? ""
                  : row.close === ""
                  ? ""
                  : row.close == null
                  ? ""
                  : row.close === "zárva"
                  ? ""
                  : "-"}
              </TableCell>
              <TableCell
                sx={{
                  p: "0px",
                  m: 0,
                  width: "20px",
                  // border: "1px solid black",
                }}
                align="right"
              >
                {row.open === ""
                  ? "zárva"
                  : row.open == null
                  ? "zárva"
                  : row.open === "zárva"
                  ? "zárva"
                  : row.close === ""
                  ? "zárva"
                  : row.close == null
                  ? "zárva"
                  : row.close === "zárva"
                  ? "zárva"
                  : row.close}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
