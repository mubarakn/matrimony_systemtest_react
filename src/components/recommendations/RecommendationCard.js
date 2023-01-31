import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../Button/Button";

const GAP = 10;

const RecommendationCard = ({ data, index, style }) => {
  const navigate = useNavigate();
  const profile = data[index];

  const onClick = () => {
    navigate(`/profile/${profile.id}`);
  };

  const onNo = () => {
    toast(`You Pressed No for ${profile.name}`);
  };

  let itemStyle = { ...style, borderRadius: 24, width: style.width - GAP };
  if (index > 0) {
    itemStyle.left += GAP;
  }

  return (
    <Card style={itemStyle} variant="outlined">
      <CardActionArea
        onClick={() => typeof onClick === "function" && onClick(profile)}
      >
        <img
          src={`https://avatars.dicebear.com/v2/avataaars/${profile.name}.svg?options[mood][]=happy`}
        />
        <CardContent>
          <Typography sx={{ fontSize: 16 }} color="text.primary" gutterBottom>
            {profile.name}
          </Typography>
          <Typography variant="body2" sx={{ mb: 1.5 }} color="text.secondary">
            {profile.age}, {profile.height}, {profile.language}, {profile.caste}
            , {profile.qualification}, {profile.profession}, {profile.city},{" "}
            <span style={{ whiteSpace: "nowrap" }}>{profile.state}</span>,{" "}
            {profile.country}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ padding: 16 }}>
        <Button
          onClick={() => typeof onClick === "function" && onClick(profile)}
          isPrimary
        >
          Yes
        </Button>
        <Button onClick={() => typeof onNo === "function" && onNo(profile)}>
          No
        </Button>
      </CardActions>
    </Card>
  );
};

export default RecommendationCard;
