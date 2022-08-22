import React, { useRef } from "react";
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import result from "../api/firebaseApis";
import Divider from "@mui/material/Divider";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { v4 } from "uuid";

import { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";

// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyDLiYLWmvMk16ECzi40jLW8ZeLj35xQ83k",
  authDomain: "fova-7f8dd.firebaseapp.com",
  projectId: "fova-7f8dd",
  storageBucket: "fova-7f8dd.appspot.com",
  messagingSenderId: "1011348723488",
  appId: "1:1011348723488:web:0ee8ef5813baee54abe945",
  measurementId: "G-LKHSC1XKHY",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const UploadForm = () => {
  const [data, setData] = useState([]);

  // result.get("/businesses.json").then((res) => {
  //   console.log(res);
  //   // setData((oldArray) => [...oldArray, fetced]);
  // });

  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const companyNameRef = useRef();
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const addressRef = useRef(null);
  const mondayOpenRef = useRef(null);
  const mondayCloseRef = useRef(null);
  const tuesdayOpenRef = useRef(null);
  const tuesdayCloseRef = useRef(null);
  const wednesdayOpenRef = useRef(null);
  const wednesdayCloseRef = useRef(null);
  const thursdayOpenRef = useRef(null);
  const thursdayCloseRef = useRef(null);
  const fridayOpenRef = useRef(null);
  const fridayCloseRef = useRef(null);
  const saturdayOpenRef = useRef(null);
  const saturdayCloseRef = useRef(null);
  const sundayOpenRef = useRef(null);
  const sundayCloseRef = useRef(null);
  const save = () => {
    let tomb = {
      companyName: companyNameRef.current.value,
      contact: {
        phone: phoneRef.current.value,
        email: emailRef.current.value,
        address: addressRef.current.value,
      },
      openingHours: {
        mondayOpen: mondayOpenRef.current.value,
        mondayClose: mondayCloseRef.current.value,
        tuesdayOpen: tuesdayOpenRef.current.value,
        tuesdayClose: tuesdayCloseRef.current.value,
        wednesdayOpen: wednesdayOpenRef.current.value,
        wednesdayClose: wednesdayCloseRef.current.value,
        thursdayOpen: thursdayOpenRef.current.value,
        thursdayClose: thursdayCloseRef.current.value,
        fridayOpen: fridayOpenRef.current.value,
        fridayClose: fridayCloseRef.current.value,
        saturdayOpen: saturdayOpenRef.current.value,
        saturdayClose: saturdayCloseRef.current.value,
        sundayOpen: sundayOpenRef.current.value,
        sundayClose: sundayCloseRef.current.value,
      },
      profileImage: "",
      pricesImage: "",
    };
    console.log(tomb);
    // result.post("/businesses.json", tomb);
  };

  const uploadFile = (e) => {
    e.preventDefault();
    save();
    // if (imageUpload == null) return;
    // const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    // uploadBytes(imageRef, imageUpload)
    //   .then((snapshot) => {
    //     getDownloadURL(snapshot.ref).then((url) => {
    //       setImageUrls((prev) => [...prev, url]);
    //       setFormTo((formTo) => ({
    //         ...formTo,
    //         ...{ profileImage: url },
    //       }));
    //     });
    //   })
    //   .finally(() => save());
  };

  return (
    <div>
      <Grid>
        <Card style={{ maxWidth: 450, margin: "50px auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              SZöveg ide
            </Typography>
            <form onSubmit={uploadFile}>
              <Grid container spacing={1} sx={{ p: 3 }}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    label="name"
                    name="companyName"
                    variant="outlined"
                    fullWidth
                    inputRef={companyNameRef}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="phone"
                    name="phone"
                    variant="outlined"
                    fullWidth
                    inputRef={phoneRef}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="email"
                    name="email"
                    variant="outlined"
                    fullWidth
                    inputRef={emailRef}
                  />
                </Grid>
                <Grid item xs={12} sm={6} sx={{ p: 3 }}>
                  <TextField
                    label="address"
                    name="address"
                    variant="outlined"
                    fullWidth
                    inputRef={addressRef}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="monday open"
                    name="mondayOpen"
                    variant="outlined"
                    fullWidth
                    inputRef={mondayOpenRef}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="monday close"
                    name="mondayClose"
                    variant="outlined"
                    fullWidth
                    inputRef={mondayCloseRef}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="tuseday open"
                    name="tusedayOpen"
                    variant="outlined"
                    fullWidth
                    inputRef={tuesdayOpenRef}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="tuseday close"
                    name="tusedayClose"
                    variant="outlined"
                    fullWidth
                    inputRef={tuesdayCloseRef}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="wednesday open"
                    name="wednesdayOpen"
                    variant="outlined"
                    fullWidth
                    inputRef={wednesdayOpenRef}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="wednesday close"
                    name="wednesdayClose"
                    variant="outlined"
                    fullWidth
                    inputRef={wednesdayCloseRef}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="thursday open"
                    name="thursdayOpen"
                    variant="outlined"
                    fullWidth
                    inputRef={thursdayOpenRef}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="thursdayClose"
                    name="thursday"
                    variant="outlined"
                    fullWidth
                    inputRef={thursdayCloseRef}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="friday open"
                    name="fridayOpen"
                    variant="outlined"
                    fullWidth
                    inputRef={fridayOpenRef}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="friday close"
                    name="fridayClose"
                    variant="outlined"
                    fullWidth
                    inputRef={fridayCloseRef}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="saturday open"
                    name="saturdayOpen"
                    variant="outlined"
                    fullWidth
                    inputRef={saturdayOpenRef}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="saturday close"
                    name="saturdayClose"
                    variant="outlined"
                    fullWidth
                    inputRef={saturdayCloseRef}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="sunday open"
                    name="sundayOpen"
                    variant="outlined"
                    fullWidth
                    inputRef={sundayOpenRef}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="sunday close"
                    name="sundayClose"
                    variant="outlined"
                    fullWidth
                    inputRef={sundayCloseRef}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="profile Image"
                    name="profileImage"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="sunday close"
                    name="sundayClose"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <input
                    type="file"
                    onChange={(event) => {
                      setImageUpload(event.target.files[0]);
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={(e) => console.log(e)}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default UploadForm;
