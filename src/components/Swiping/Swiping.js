import { useContext } from "react";
import { ProfileContext } from "../../contexts/ProfileProvider";
import SwipeCard from "./SwipeCard";
import "./swiping.css";
import useSwipe from "../../hooks/useSwipe";
import { ArrowBack } from "@mui/icons-material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Swiping = () => {
  const navigate = useNavigate();
  const profiles = useContext(ProfileContext);
  const [cardRef, profileIndex, swipeCard] = useSwipe(profiles.length);

  const handleAction = (action, profile) => {
    var moveOutWidth = document.body.clientWidth * 1.5;
    if (["shortlisted", "interested"].includes(action)) {
      swipeCard(
        moveOutWidth,
        -100,
        45,
        action === "shortlisted" ? "Shortlisted" : "Interested"
      );
    } else {
      swipeCard(-moveOutWidth, -100, -45, "Not Interested");
    }
  };

  const visibleProfiles = profiles.slice(profileIndex, 3 + profileIndex);
  return (
    <div className="match">
      <div className="match-container">
        <Button
          sx={{
            marginTop: 10,
            width: "fit-content",
            position: "relative",
            left: -10,
            display: "flex",
            alignItems: "center",
            textTransform: "capitalize",
            fontSize: 20,
            color: "#FFF",
          }}
          onClick={() => navigate(-1)}
        >
          <ArrowBack />{" "}
          <span style={{ marginLeft: 16 }}>Daily Recommendations</span>
        </Button>
        <div className="match-cards">
          {visibleProfiles.map((profile, index) => {
            return (
              <SwipeCard
                profile={profile}
                onAction={handleAction}
                ref={index === 0 ? cardRef : null}
                key={profile.id}
                className="match-card"
                style={{
                  zIndex: profiles.length - index,
                  transform:
                    "scale(" +
                    (20 - index) / 20 +
                    ") translateY(-" +
                    30 * index +
                    "px)",
                  opacity: (10 - index) / 10,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Swiping;
