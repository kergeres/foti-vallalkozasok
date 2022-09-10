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

const ContactInfo = (props) => {
  let rows = [];

  for (let i = 0; i < Object.keys(props.business[0].contact).length; i++) {
    let key = Object.keys(props.business[0].contact)[i];
    let transferedIcon =
      key === "phone" ? (
        <PhoneIcon sx={{ color: "#383e42" }} />
      ) : key === "email" ? (
        <MailIcon sx={{ color: "#383e42" }} />
      ) : key === "address" ? (
        <HomeIcon sx={{ color: "#383e42" }} />
      ) : key === "website" ? (
        <LanguageIcon sx={{ color: "#383e42" }} />
      ) : key === "facebook" ? (
        <FacebookIcon sx={{ color: "#4267B2" }} hr />
      ) : key === "instagram" ? (
        <InstagramIcon sx={{ color: "#FCAF45" }} />
      ) : (
        ""
      );
    let sortNumber =
      key === "phone"
        ? 1
        : key === "email"
        ? 2
        : key === "address"
        ? 0
        : key === "website"
        ? 3
        : key === "facebook"
        ? 4
        : key === "instagram"
        ? 5
        : "";
    let value = Object.values(props.business[0].contact)[i];
    rows.push({ key, icon: transferedIcon, info: value, sortNumber });
  }
  rows.sort((a, b) => a.sortNumber - b.sortNumber);
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
            let preTag =
              row.key === "mail"
                ? "mailto:"
                : row.key === "phone"
                ? "tel:"
                : row.key === "address"
                ? "https://www.google.com/maps/dir/?api=1&"
                : "";
            return (
              row.info && (
                <TableRow key={index}>
                  <TableCell
                    sx={{ p: "0px", m: 0, width: "10px" }}
                    align="right"
                  >
                    <Link href={`${preTag}${row.info}`}>{row.icon} </Link>
                  </TableCell>
                  <TableCell
                    sx={{ p: "0px", m: 0, width: "10px" }}
                    align="right"
                  >
                    <Link
                      sx={{ color: "#383e42", textDecorationColor: "#383e42" }}
                      href={`${preTag}${row.info}`}
                    >
                      {row.key === "facebook"
                        ? ""
                        : row.key === "instagram"
                        ? ""
                        : row.info.replace(/^https?\:\/\/www\./i, "")}
                    </Link>
                  </TableCell>
                </TableRow>
              )
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ContactInfo;
