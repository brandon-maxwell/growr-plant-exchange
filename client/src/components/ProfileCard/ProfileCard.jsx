import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { teal } from "@material-ui/core/colors";
import Typography from "@material-ui/core/Typography";

const cardColor = teal[100];

const useStyles = makeStyles({
  root: {
    width: 300,
    margin: "10px",
    backgroundColor: cardColor,
  },
  media: {
    height: 250,
  },
  title: {
    fontSize: "2rem",
    fontFamily: "Oswald",
  },
  subtitle: {
    fontSize: "1.5rem",
  },
  userSince: {
    fontSize: "1rem",
  },
  pos: {
    marginBottom: 12,
  },
});

export default function ProfileCard( {profile} ) {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={7}>
      <CardActionArea>
        {/* Profile Photo */}
        <CardMedia
          className={classes.media}
          image={profile.image}
          title={profile.name}
        />

        <CardContent>
          {/* Profile Username */}
          {console.log(`profile `, profile)}
          <Typography className={classes.title}>{profile.name}</Typography>

          <Typography gutterBottom variant="caption" color="textSecondary">
            {profile.address}
            {/* update this to city and state only */}
            {/* or just use Neighborhood */}
          </Typography>

          <Typography gutterBottom className={classes.userSince}>
            user since {profile.userCreated}
            {/* update this to something human readable */}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        {/* Button click initiates either email or messaging */}
        <Button size="small" color="secondary">
          {profile.email}
        </Button>
      </CardActions>
    </Card>
  );
}
