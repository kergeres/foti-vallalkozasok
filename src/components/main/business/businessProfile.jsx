import MapBox from "./map/MapBox";
import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import variables from "../../../style/_variables.scss";
import OpeningHours from "./inGrid/openingHours";
import ContactInfo from "./inGrid/contactInfo";
import IsItOpen from "../../helpers/IsItOpen";
import result from "../../api/firebaseApis";
import codeToValue from "../../helpers/codeToValue";
// const businessesRef = require("../../../data/zample.json");
// const business = businessesRef[0];

const BusinessProfile = () => {
  const chosenId = "-NBgFiDz5aKZ59oq9uBU";

  const [business, setBusiness] = useState([]);

  useEffect(() => {
    result.get(`/businesses/${chosenId}.json`).then((res) => {
      // setBusiness((old) => [...old, res.data[chosenId]]);
      setBusiness((old) => [...old, res.data]);
      console.log(res);
    });
  }, []);

  return (
    business.length > 0 && (
      <>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ marginBottom: "40px" }}
        >
          <Grid item>
            <Typography variant="h1">{business[0].companyName}</Typography>
            <Typography variant="h6">
              {codeToValue(business[0].companyTypeCode, "BUSINESSTYPE")}
            </Typography>
          </Grid>
        </Grid>
        {/* harmas felosztasu grid */}
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={4}
          sx={{ mb: 3 }}
        >
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              p: 1,
              alignItems: "center",
              m: 1,
              alignSelf: "stretch",
            }}
            item
            xs={3}
          >
            <img
              alt="kep"
              style={{ width: "100%" }}
              src={business[0].profileImage}
            />
          </Grid>
          <Grid
            sx={{
              borderRight: "1px solid #646564",
              mr: 1,
              alignSelf: "stretch",
            }}
            item
          />
          <Grid
            sx={{
              display: "flex",
              justifyContent: "start",
              p: 1,
              alignItems: "center",
              m: 1,
              alignSelf: "stretch",
              flexDirection: "column",
            }}
            item
            xs={3}
          >
            <>
              <Typography
                sx={{
                  pb: 0,
                  display: "inline",
                  width: "100%",
                }}
                variant="subtitle1"
              >
                Nyitvatart??s
              </Typography>
              <Typography
                sx={{
                  p: "0px",
                  mt: "-12px",
                  color: IsItOpen(business[0])
                    ? variables.muiSucces
                    : variables.muiError,
                }}
              >
                {IsItOpen(business[0]) ? "nyitva" : "z??rva"}
              </Typography>
              <OpeningHours business={business} />
            </>
          </Grid>
          <Grid
            sx={{
              borderLeft: "1px solid #646564",
              mr: 1,
              alignSelf: "stretch",
            }}
            item
          />
          <Grid
            sx={{
              display: "flex",
              justifyContent: "start",
              p: 1,
              alignItems: "center",
              m: 1,
              alignSelf: "stretch",
              flexDirection: "column",
            }}
            item
            xs={3}
          >
            <>
              <Typography
                sx={{
                  pb: 2,
                  display: "inline",
                  width: "100%",
                }}
                variant="subtitle1"
              >
                el??rhet??s??g
              </Typography>
              <ContactInfo business={business} />
            </>
          </Grid>
        </Grid>
        <MapBox business={business} />
      </>
    )
  );
};

export default BusinessProfile;
