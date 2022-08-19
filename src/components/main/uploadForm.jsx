import React from "react";
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

  result.get("/businesses.json").then((res) => {
    console.log(res);
    // setData((oldArray) => [...oldArray, fetced]);
  });

  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [formTo, setFormTo] = useState({
    id: v4(),
    companyName: "-",
    contact: {
      phone: "-",
      email: "-",
      address: "-",
    },
    openingHours: {
      monday: {
        open: "-",
        close: "-",
      },
      tuesday: {
        open: "-",
        close: "-",
      },
      wednesday: {
        open: "-",
        close: "-",
      },
      thursday: {
        open: "-",
        close: "-",
      },
      friday: {
        open: "-",
        close: "-",
      },
      saturday: {
        open: "-",
        close: "-",
      },
      sunday: {
        open: "-",
        close: "-",
      },
    },
    profileImage: "-",
    pricesImage: "-",
  });
  const save = () => {
    console.log("kint vok");
    result.post("/businesses.json", formTo);
  };

  const uploadFile = (e) => {
    e.preventDefault();
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setImageUrls((prev) => [...prev, url]);
          setFormTo((formTo) => ({
            ...formTo,
            ...{ profileImage: url },
          }));
        });
      })
      .finally(() => save());
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
                    onChange={(e) =>
                      setFormTo((formTo) => ({
                        ...formTo,
                        ...{ companyName: e.target.value },
                      }))
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="phone"
                    name="phone"
                    variant="outlined"
                    fullWidth
                    value={formTo.contact.phone || ""}
                    onChange={(e) =>
                      setFormTo((formTo) => ({
                        ...formTo,
                        ...{
                          contact: { phone: e.target.value },
                        },
                      }))
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="email"
                    name="email"
                    variant="outlined"
                    fullWidth
                    onChange={(e) =>
                      setFormTo((formTo) => ({
                        ...formTo,
                        ...{ contact: { email: e.target.value } },
                      }))
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} sx={{ p: 3 }}>
                  <TextField
                    label="address"
                    name="address"
                    variant="outlined"
                    fullWidth
                    onChange={(e) =>
                      setFormTo((formTo) => ({
                        ...formTo,
                        ...{ contact: { address: e.target.value } },
                      }))
                    }
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
                    onChange={(e) =>
                      setFormTo((formTo) => ({
                        ...formTo,
                        ...{
                          openingHours: {
                            ...formTo,
                            ...{
                              monday: {
                                ...formTo,
                                ...{ open: e.target.value },
                              },
                            },
                          },
                        },
                      }))
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="monday close"
                    name="mondayClose"
                    variant="outlined"
                    fullWidth
                    onChange={(e) =>
                      setFormTo((formTo) => ({
                        ...formTo,
                        ...{
                          openingHours: {
                            ...formTo,
                            ...{
                              monday: {
                                ...formTo,
                                ...{ close: e.target.value },
                              },
                            },
                          },
                        },
                      }))
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="tuseday open"
                    name="tusedayOpen"
                    variant="outlined"
                    fullWidth
                    onChange={(e) =>
                      setFormTo((formTo) => ({
                        ...formTo,
                        ...{
                          openingHours: {
                            ...formTo,
                            ...{
                              tuseday: {
                                ...formTo,
                                ...{ open: e.target.value },
                              },
                            },
                          },
                        },
                      }))
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="tuseday close"
                    name="tusedayClose"
                    variant="outlined"
                    fullWidth
                    onChange={(e) =>
                      setFormTo((formTo) => ({
                        ...formTo,
                        ...{
                          openingHours: {
                            ...formTo,
                            ...{
                              tuseday: {
                                ...formTo,
                                ...{ close: e.target.value },
                              },
                            },
                          },
                        },
                      }))
                    }
                  />
                </Grid>
                {/* <Grid item xs={12} sm={6}>
                  <TextField
                    label="wednesday open"
                    name="wednesdayOpen"
                    variant="outlined"
                    fullWidth
                    onChange={(e) =>
                      setFormTo((formTo) => ({
                        ...formTo,
                        ...{
                          openingHours: { wednesday: { open: e.target.value } },
                        },
                      }))
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="wednesday close"
                    name="wednesdayClose"
                    variant="outlined"
                    fullWidth
                    onChange={(e) =>
                      setFormTo((formTo) => ({
                        ...formTo,
                        ...{
                          openingHours: {
                            wednesday: { close: e.target.value },
                          },
                        },
                      }))
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="thursday open"
                    name="thursdayOpen"
                    variant="outlined"
                    fullWidth
                    onChange={(e) =>
                      setFormTo((formTo) => ({
                        ...formTo,
                        ...{
                          openingHours: { thursday: { open: e.target.value } },
                        },
                      }))
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="thursdayClose"
                    name="thursday"
                    variant="outlined"
                    fullWidth
                    onChange={(e) =>
                      setFormTo((formTo) => ({
                        ...formTo,
                        ...{
                          openingHours: { thursday: { close: e.target.value } },
                        },
                      }))
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="friday open"
                    name="fridayOpen"
                    variant="outlined"
                    fullWidth
                    onChange={(e) =>
                      setFormTo((formTo) => ({
                        ...formTo,
                        ...{
                          openingHours: { friday: { open: e.target.value } },
                        },
                      }))
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="friday close"
                    name="fridayClose"
                    variant="outlined"
                    fullWidth
                    onChange={(e) =>
                      setFormTo((formTo) => ({
                        ...formTo,
                        ...{
                          openingHours: { friday: { close: e.target.value } },
                        },
                      }))
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="saturday open"
                    name="saturdayOpen"
                    variant="outlined"
                    fullWidth
                    onChange={(e) =>
                      setFormTo((formTo) => ({
                        ...formTo,
                        ...{
                          openingHours: { saturday: { open: e.target.value } },
                        },
                      }))
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="saturday close"
                    name="saturdayClose"
                    variant="outlined"
                    fullWidth
                    onChange={(e) =>
                      setFormTo((formTo) => ({
                        ...formTo,
                        ...{
                          openingHours: { saturday: { close: e.target.value } },
                        },
                      }))
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="sunday open"
                    name="sundayOpen"
                    variant="outlined"
                    fullWidth
                    onChange={(e) =>
                      setFormTo((formTo) => ({
                        ...formTo,
                        ...{
                          openingHours: { sunday: { open: e.target.value } },
                        },
                      }))
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="sunday close"
                    name="sundayClose"
                    variant="outlined"
                    fullWidth
                    onChange={(e) =>
                      setFormTo((formTo) => ({
                        ...formTo,
                        ...{
                          openingHours: { sunday: { close: e.target.value } },
                        },
                      }))
                    }
                  />
                </Grid> */}
                {/* <Grid item xs={12} sm={6}>
                  <TextField
                    label="profile Image"
                    name="profileImage"
                    variant="outlined"
                    fullWidth
                    value={formTo.profileImage}
                    onChange={(e) =>
                      setFormTo((formTo) => ({
                        ...formTo,
                        ...{ profileImage: e.target.value },
                      }))
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="sunday close"
                    name="sundayClose"
                    variant="outlined"
                    fullWidth
                    value={formTo.pricesImage}
                    onChange={(e) =>
                      setFormTo((formTo) => ({
                        ...formTo,
                        ...{ pricesImage: e.target.value },
                      }))
                    }
                  />
                </Grid> */}
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
