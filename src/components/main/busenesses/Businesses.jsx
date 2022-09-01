import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import variables from "../../../style/_variables.scss";
import { Link } from "@mui/material";
import dayjs from "dayjs";
import IsItOpen from "../../helpers/IsItOpen";

var customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);

const businessesRef = require("../../../data/zample.json");
const businesses = [];
businessesRef.map((business) => {
  let infoObj = {
    isOpen: IsItOpen(business),
    name: business.companyName,
    address: business.contact.address,
  };

  businesses.push(infoObj);
});

const Businesses = () => {
  return (
    <TableContainer>
      <Table
        sx={{
          maxWidth: "600px",
          margin: " 50px auto",
          borderCollapse: "separate",
          borderSpacing: "0px 4px",
        }}
      >
        <TableBody>
          {businesses.map((row, index) => {
            return (
              <TableRow
                sx={{
                  m: 3,
                  "&:hover": {
                    color: "red",
                    opacity: 0.7,
                    cursor: "pointer",
                  },
                }}
                key={index}
              >
                <TableCell
                  sx={{
                    p: "10px",
                    m: 0,
                    textAlign: "start",
                  }}
                  align="right"
                >
                  {row.name}
                </TableCell>
                <TableCell
                  sx={{
                    p: "0px",
                    m: 0,

                    textDecoration: "none",
                  }}
                  align="right"
                >
                  <Link
                    sx={{
                      textDecoration: "none",
                      color: variables.lightGray,
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                    href={`${row.address}`}
                  >
                    {row.address}
                  </Link>
                </TableCell>
                <TableCell
                  severity="warning"
                  sx={{
                    p: "0px",
                    m: 0,
                    color: row.isOpen
                      ? variables.muiSucces
                      : variables.muiError,
                  }}
                  align="right"
                >
                  {row.isOpen ? "nyitva" : "zárva"}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Businesses;
