import { forwardRef } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "../Button/Button";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";
import { StarBorder, Check, Close } from "@mui/icons-material";

const SwipeCard = forwardRef((props, ref) => {
  const { profile, onAction, ...rest } = props;

  return (
    <div ref={ref} {...rest}>
      <Card sx={{ borderRadius: 2, height: "100%" }} variant="outlined">
        <div
          style={{
            width: "100%",
            height: "70%",
            backgroundImage: `url('https://avatars.dicebear.com/v2/avataaars/${profile.name}.svg?options[mood][]=happy')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        ></div>
        <CardContent sx={{ paddingInline: 3 }}>
          <Typography variant="h5" color="text.primary" gutterBottom>
            {profile.name}
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: 14 }}
            color="text.secondary"
          >
            {profile.age}, {profile.height}, {profile.language}, {profile.caste}
            , {profile.qualification}, {profile.profession}, {profile.city},{" "}
            <span style={{ whiteSpace: "nowrap" }}>{profile.state}</span>,{" "}
            {profile.country}
          </Typography>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 8,
              borderTop: "1px solid #EEE",
            }}
          >
            <Button
              showBorder={false}
              onClick={() => onAction("shortlisted", profile)}
            >
              <StarBorder />
              <Typography
                sx={{ paddingLeft: 1, color: grey[900] }}
                variant="body2"
              >
                Shortlist
              </Typography>
            </Button>
            <CardActions
              sx={{
                marginLeft: "auto",
              }}
            >
              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", marginRight: 1 }}
              >
                Like Her?
              </Typography>
              <Button onClick={() => onAction("notInterested", profile)}>
                <Close />
              </Button>
              <Button onClick={() => onAction("interested", profile)} isPrimary>
                <Check />
              </Button>
            </CardActions>
          </div>
        </CardContent>
      </Card>
    </div>
  );
});

export default SwipeCard;
