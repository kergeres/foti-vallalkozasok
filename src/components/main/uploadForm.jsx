import React from "react";
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import result from "../api/firebaseApis";

result.get("/marks.json").then((res) => console.log(res));

const UploadForm = () => {
  const [formTo, setFormTo] = useState({});
  const save = (e) => {
    e.preventDefault();
    result.post("/businesses.json", formTo);
  };
  return (
    <div>
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Contact Us
            </Typography>
            <form onSubmit={save}>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    label="name"
                    placeholder="Type your name here"
                    variant="outlined"
                    fullWidth
                    value={formTo.name}
                    onChange={(e) =>
                      setFormTo((formTo) => ({
                        ...formTo,
                        ...{ name: e.target.value },
                      }))
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Message"
                    placeholder="Type your message here"
                    variant="outlined"
                    fullWidth
                    value={formTo.message}
                    onChange={(e) =>
                      setFormTo((formTo) => ({
                        ...formTo,
                        ...{ message: e.target.value },
                      }))
                    }
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
