import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

import { pages, propTypes } from "./common";
import { Typography } from "@mui/joy";
import { Button, Divider } from "@mui/material";
import { Link } from "react-router-dom";

export default function Sidebar({ state, setState }: propTypes) {
  const toggleDrawer = (open: boolean) => () => {
    setState(open);
  };
  return (
    <div>
      <React.Fragment>
        <SwipeableDrawer
          anchor="left"
          open={state}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <Box sx={{ width: 220 }}>
            <Typography
              noWrap
              sx={{
                display: { xs: "flex" },
                justifyContent: "center",
                alignItems: "center",
                flexGrow: 1,
                fontSize: "2rem",
                fontFamily: "monospace",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Divider />
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", sm: "none" },
                flexDirection: "column",
              }}
            >
              {pages.map((page) => (
                <Link
                  key={page}
                  onClick={() => setState(false)}
                  to={page.toLowerCase()}
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button sx={{ my: 2, color: "#000", display: "block" }}>
                    {page}
                  </Button>
                </Link>
              ))}
            </Box>
          </Box>
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
