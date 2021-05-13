import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import CodeRoundedIcon from "@material-ui/icons/CodeRounded";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import styled from "styled-components";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://www.linkedin.com/in/abdulsamad-olawale-usman-b38134146/"
      >
        abdulsamad-usman
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CodeRoundedIcon className={classes.icon} />
          <Typography variant="h5" color="inherit" noWrap>
            AU
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Hi!, I'm Abdul
              <Wave>
                <img
                  alt="👋"
                  draggable="false"
                  src="https://twemoji.maxcdn.com/2/72x72/1f44b.png"
                  style={{
                    height: "1em",
                    width: "1em",
                    margin: "0px 0.05em 0px 0.1em",
                    verticalAlign: "-0.1em",
                  }}
                />
              </Wave>
            </Typography>

            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              A Passionate and highly-skilled Software Engineer/ReactJS
              Developer with 3+ years of experience developing web applications.
              Check out some of my projects below.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    <a
                      style={{ color: "white", textDecoration: "none" }}
                      href="#projects"
                    >
                      View My Projects
                    </a>
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    <a
                      href="https://www.linkedin.com/in/abdulsamad-olawale-usman-b38134146/"
                      style={{ color: "#3f51b5", textDecoration: "none" }}
                      // target="_blank"
                      // rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    <a
                      href="https://github.com/walesoft28"
                      style={{ color: "#3f51b5", textDecoration: "none" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </a>
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container id="projects" className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="images/linkedin-clone-image.png"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    LinkedIn Clone
                  </Typography>
                  <Typography>
                    A fully responsive clone of the official LinkedIn website
                    built with React, Redux, Styled Components and Firebase.
                    Sign in with google and make a post
                  </Typography>
                </CardContent>
                <CardActions>
                  {/* <Button size="large" color="primary">
                    View It Live
                  </Button> */}
                  <Button variant="outlined" color="primary">
                    <a
                      style={{ color: "#3f51b5", textDecoration: "none" }}
                      href="https://linkedin-clone-f11bd.web.app/"
                    >
                      View It Live
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="images/disney-plus-image.png"
                  title="disney"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Disney+ Clone
                  </Typography>
                  <Typography>
                    A clone of the official Disney+ website built with React,
                    Redux toolkit, Styled Components and Firebase.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="outlined" color="primary">
                    <a
                      style={{ color: "#3f51b5", textDecoration: "none" }}
                      href="https://disney-plus-8a623.web.app/"
                    >
                      View It Live
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="images/covid-19-tracker-image.png"
                  title="covid"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Covid-19 Tracker
                  </Typography>
                  <Typography>
                    A visual application that tracks the various live updates
                    and statistics of covid-19 in real time. It shows Live
                    Cases, Recoveries, Deaths (clickable tabs)
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="outlined" color="primary">
                    <a
                      style={{ color: "#3f51b5", textDecoration: "none" }}
                      href="https://covid-19-tracker-90d1b.web.app/"
                    >
                      View It Live
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>

      <footer className={classes.footer}>
        <Typography variant="h4" align="center" gutterBottom>
          Get in Touch
        </Typography>
        <Typography variant="h6" align="center" gutterBottom>
          <a
            style={{ cursor: "pointer" }}
            href="https://www.linkedin.com/in/abdulsamad-olawale-usman-b38134146/"
          >
            <LinkedInIcon
              color="primary"
              fontSize="large"
              className={classes.icon}
            />
          </a>
          <a style={{ cursor: "pointer" }} href="https://github.com/walesoft28">
            <GitHubIcon
              color="primary"
              fontSize="large"
              className={classes.icon}
            />
          </a>
          <ContactImg>
            <img src="images/contact-me.svg" alt="" />
          </ContactImg>
        </Typography>
      </footer>

      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          {/* Footer */}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          {/* Something here to give the footer a purpose! */}
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

const Wave = styled.span`
  display: inline-block;
  animation-duration: 1.8s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  animation-name: wave;
`;

const ContactImg = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 350px;
    height: 350px;
    object-fit: contain;
  }
`;
