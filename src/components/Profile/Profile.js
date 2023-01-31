import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProfileContext } from "../../contexts/ProfileProvider";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowBack from "@mui/icons-material/ArrowBack";

const Profile = () => {
  const params = useParams();
  const navigate = useNavigate();
  const profiles = useContext(ProfileContext);

  const profile = profiles.find((p) => p.id === Number(params.id));

  if (!profile) {
    return "Profile not found.";
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "linear-gradient(to bottom right, #4caf50, #00bcd4)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      <Card
        sx={{
          marginInline: "auto",
          marginBlock: 0,
          width: "min(400px, 100%)",
          height: "70vh",
        }}
        variant="outlined"
      >
        <div style={{ position: "relative" }}>
          <img
            src={`https://avatars.dicebear.com/v2/avataaars/${profile.name}.svg?options[mood][]=happy`}
          />
          <Button
            style={{
              position: "absolute",
              top: 16,
              left: 16,
            }}
            onClick={() => navigate(-1)}
          >
            <ArrowBack /> Back
          </Button>
        </div>
        <CardContent
          style={{
            position: "relative",
            top: -36,
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            backgroundColor: "#FFF",
            borderTop: "1px solid #EEE",
          }}
        >
          <Typography sx={{ fontSize: 16 }} color="text.primary" gutterBottom>
            {profile.name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ borderBottom: "1px solid #EEE", paddingBottom: 2 }}
          >
            {profile.age}, {profile.height}, {profile.language}, {profile.caste}
            , {profile.qualification}, {profile.profession}, {profile.city},{" "}
            <span style={{ whiteSpace: "nowrap" }}>{profile.state}</span>,{" "}
            {profile.country}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
