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

export default function OpeningHours(props) {
  const rows = [
    createData(
      "Hétfő",
      props.business.openingHours.mondayOpen,
      props.business.openingHours.mondayClose
    ),
    createData(
      "Kedd",
      props.business.openingHours.tuesdayOpen,
      props.business.openingHours.tuesdayClose
    ),
    createData(
      "Szerda",
      props.business.openingHours.wednesdayOpen,
      props.business.openingHours.wednesdayClose
    ),
    createData(
      "Csütörtök",
      props.business.openingHours.thursdayOpen,
      props.business.openingHours.thursdayClose
    ),
    createData(
      "Péntek",
      props.business.openingHours.fridayOpen,
      props.business.openingHours.fridayClose
    ),
    createData(
      "Szombat",
      props.business.openingHours.saturdayOpen,
      props.business.openingHours.saturdayClose
    ),
    createData(
      "Vasárnap",
      props.business.openingHours.sundayOpen,
      props.business.openingHours.sundayClose
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
