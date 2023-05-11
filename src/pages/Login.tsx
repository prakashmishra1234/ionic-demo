import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import { LoginValidator, loginFormValues } from "../utils/helper";
import React from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC<{}> = () => {
  const navigate = useNavigate();
  const onClickLogin = (values: loginFormValues) => {
    if (values.email && values.password) {
      localStorage.setItem("IONIC_DEMO", JSON.stringify({ isLoggedIn: true }));
    }
    navigate("/home");
  };
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: "1rem",
          width: { sm: "35%" },
          margin: "0.8rem",
        }}
      >
        <Formik
          initialValues={LoginValidator.initials}
          validationSchema={LoginValidator.validation}
          onSubmit={(values: loginFormValues) => {
            onClickLogin(values);
          }}
        >
          {(props) => (
            <form onSubmit={props.handleSubmit} className="formSignup">
              <Typography
                sx={{
                  display: "flex",
                  marginBottom: "1rem",
                  justifyContent: "center",
                  fontSize: { xs: "1rem", md: "2rem" },
                  fontWeight: "bold",
                }}
              >
                Welcome Back
              </Typography>
              <TextField
                fullWidth
                size="small"
                sx={{ mb: 2 }}
                error={props.touched.email && props.errors.email ? true : false}
                id="outlined-error-helper-text"
                label="Email"
                type="email"
                value={props.values.email}
                helperText={
                  props.touched.email && props.errors.email
                    ? `${props.errors.email}`
                    : ""
                }
                onChange={(event) => {
                  props.setFieldValue("email", event.target.value);
                }}
              />
              <TextField
                fullWidth
                size="small"
                sx={{ mb: 2 }}
                error={
                  props.touched.password && props.errors.password ? true : false
                }
                id="outlined-error-helper-text"
                label="Password"
                type="password"
                value={props.values.password}
                helperText={
                  props.touched.password && props.errors.password
                    ? `${props.errors.password}`
                    : ""
                }
                onChange={(event) => {
                  props.setFieldValue("password", event.target.value);
                }}
              />
              <Button variant="outlined" fullWidth type="submit">
                Login
              </Button>
            </form>
          )}
        </Formik>
      </Paper>
    </Box>
  );
};

export default Login;
