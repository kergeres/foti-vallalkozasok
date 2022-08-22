import MapBox from "./map/MapBox";
import { Grid, Typography } from "@mui/material";
import variables from "../../../style/_variables.scss";
import OpeningHours from "./inGrid/openingHours";
import ContactInfo from "./inGrid/contactInfo";
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
          <Typography variant="h1">Kisalagi Abc</Typography>
          <Typography variant="h6">Élelmiszerbolt</Typography>
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
            src="https://hubbellcdn.com/ohwassets/HLI/beacon/resources/case_studies/img-academy/img-1.jpg"
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
                pb: 2,
                display: "inline",
                width: "100%",
              }}
              variant="subtitle1"
            >
              Nyitvatartás
            </Typography>
            <OpeningHours />
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

      <MapBox />
    </>
  );
};

export default BusinessProfile;
