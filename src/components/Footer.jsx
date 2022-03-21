import React from "react";
import { Box, Grid, IconButton, Typography, Paper } from "@mui/material";
import MainTheme from "../Themes/MainTheme";
import {
  rightMembers,
  leftMembers,
  LINKEDIN_ICON,
  GITHUB_ICON
} from "../constants/TeamN3M";
import { N3M } from "../constants/urls";

const Footer = () => (
  <Typography
    component='footer'
    sx={{
      display: "flex",
      width: "100%",
      backgroundColor: "#e3f2fd",
      marginTop: MainTheme.spacing(30),
      borderTop: 1
    }}
  >
    <Grid container spacing={5} justifyContent='space-around'>
      {leftMembers.map((member) => (
        <Grid item key={member.name}>
          <Grid container justifyContent='center' mb={2} mt={2}>
            <Paper
              sx={{
                borderRadius: MainTheme.spacing(5),
                width: MainTheme.spacing(10),
                height: MainTheme.spacing(10),
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                boxShadow: "0 3px 6px 2px #746D69"
              }}
            >
              <Box
                component='img'
                src={member.img}
                sx={{
                  height: MainTheme.spacing(10),
                  my: 4,
                  borderRadius: MainTheme.spacing(5)
                }}
              />
            </Paper>
          </Grid>
          <Typography textAlign='center' fontSize={15}>
            {member.name}
          </Typography>
          <Grid container justifyContent='center' mb={2} mt={2}>
            <IconButton
              style={{ marginRight: MainTheme.spacing(2) }}
              rel='noopener noreferrer'
              target='_blank'
              href={member.github}
            >
              <Box
                component='img'
                src={GITHUB_ICON}
                sx={{
                  height: "30px",
                  width: "30px"
                }}
              />
            </IconButton>
            <IconButton
              style={{ marginRight: MainTheme.spacing(2) }}
              rel='noopener noreferrer'
              target='_blank'
              href={member.linkedin}
            >
              <Box
                component='img'
                src={LINKEDIN_ICON}
                sx={{
                  height: "30px",
                  width: "30px"
                }}
              />
            </IconButton>
          </Grid>
        </Grid>
      ))}
    </Grid>
    <Box
      component='img'
      src={N3M}
      sx={{
        height: MainTheme.spacing(15),
        mt: 8
      }}
    />
    <Grid container spacing={5} justifyContent='space-around'>
      {rightMembers.map((member) => (
        <Grid item key={member.name}>
          <Grid container justifyContent='center' mb={2} mt={2}>
            <Paper
              sx={{
                borderRadius: MainTheme.spacing(5),
                width: MainTheme.spacing(10),
                height: MainTheme.spacing(10),
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                boxShadow: "0 3px 6px 2px #746D69"
              }}
            >
              <Box
                component='img'
                src={member.img}
                sx={{
                  height: MainTheme.spacing(10),
                  my: 4,
                  borderRadius: MainTheme.spacing(5)
                }}
              />
            </Paper>
          </Grid>
          <Typography textAlign='center' fontSize={15}>
            {member.name}
          </Typography>
          <Grid container justifyContent='center' mb={2} mt={2}>
            <IconButton
              style={{ marginRight: MainTheme.spacing(2) }}
              rel='noopener noreferrer'
              target='_blank'
              href={member.github}
            >
              <Box
                component='img'
                src={GITHUB_ICON}
                sx={{
                  height: "30px",
                  width: "30px"
                }}
              />
            </IconButton>
            <IconButton
              style={{ marginRight: MainTheme.spacing(2) }}
              rel='noopener noreferrer'
              target='_blank'
              href={member.linkedin}
            >
              <Box
                component='img'
                src={LINKEDIN_ICON}
                sx={{
                  height: "30px",
                  width: "30px"
                }}
              />
            </IconButton>
          </Grid>
        </Grid>
      ))}
    </Grid>
  </Typography>
);

export default Footer;
