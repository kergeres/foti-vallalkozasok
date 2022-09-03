import MapBox from "./map/MapBox";
import { Grid, Typography } from "@mui/material";
import variables from "../../../style/_variables.scss";
import OpeningHours from "./inGrid/openingHours";
import ContactInfo from "./inGrid/contactInfo";
import IsItOpen from "../../helpers/IsItOpen";
const businessesRef = require("../../../data/zample.json");
const business = businessesRef[0];
const BusinessProfile = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ marginBottom: "40px" }}
      >
        <Grid item>
          <Typography variant="h1">{business.companyName}</Typography>
          <Typography variant="h6">{business.companyType}</Typography>
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
            src={business.profileImage}
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
              Nyitvatartás
            </Typography>
            <Typography
              sx={{
                p: "0px",
                mt: "-12px",
                color: IsItOpen(business)
                  ? variables.muiSucces
                  : variables.muiError,
              }}
            >
              {IsItOpen(business) ? "nyitva" : "zárva"}
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
              elérhetőség
            </Typography>
            <ContactInfo />
          </>
        </Grid>
      </Grid>
      <MapBox business={business} />
    </>
  );
};

export default BusinessProfile;
