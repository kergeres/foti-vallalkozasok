import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Link from "@mui/material/Link";

import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import HomeIcon from "@mui/icons-material/Home";
import LanguageIcon from "@mui/icons-material/Language";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const infos = [
  {
    phone: "+36205334023",
    mail: "kergeres@gmail.co",
    address: "2125 Ozd, ize u. 33",
    website: "telex.hu",
    facebook: "",
    instagram: "",
  },
];
let rows = [];

for (let i = 0; i < Object.keys(infos[0]).length; i++) {
  let key = Object.keys(infos[0])[i];
  let transferedIcon =
    key === "phone" ? (
      <PhoneIcon />
    ) : key === "mail" ? (
      <MailIcon />
    ) : key === "address" ? (
      <HomeIcon />
    ) : key === "website" ? (
      <LanguageIcon />
    ) : key === "facebook" ? (
      <FacebookIcon sx={{ color: "blue" }} hr />
    ) : key === "instagram" ? (
      <InstagramIcon />
    ) : (
      ""
    );
  let value = Object.values(infos[0])[i];
  rows.push({ key, icon: transferedIcon, info: value });
}
const ContactInfo = () => {
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
            console.log(row.icon);
            let preTag =
              row.key === "mail"
                ? "mailto:"
                : row.key === "phone"
                ? "tel:"
                : row.key === "address"
                ? "https://www.google.com/maps/dir/?api=1&"
                : "";

            console.log(`${preTag}${row.info}`);
            return (
              <TableRow key={index}>
                <TableCell sx={{ p: "0px", m: 0, width: "10px" }} align="right">
                  <Link href={`${preTag}${row.info}`}>{row.icon} </Link>
                </TableCell>
                <TableCell sx={{ p: "0px", m: 0, width: "10px" }} align="right">
                  {<Link href={`${preTag}${row.info}`}>{row.info}</Link>}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ContactInfo;
