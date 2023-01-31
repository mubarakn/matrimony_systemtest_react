import { useContext } from "react";
import { ProfileContext } from "../../contexts/ProfileProvider";
import Chip from "@mui/material/Chip";
import { Button, Typography } from "@mui/material";
import RecommendationCard from "./RecommendationCard";
import { lightBlue } from "@mui/material/colors";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { useNavigate } from "react-router-dom";

const Matches = () => {
  const navigate = useNavigate();
  const profiles = useContext(ProfileContext);
  return (
    <div
      style={{
        height: "100%",
        background: `linear-gradient(180deg, ${lightBlue[400]}, ${lightBlue[700]})`,
        display: "flex",

        paddingBlock: 24,
      }}
    >
      <div
        style={{
          marginInline: "auto",
          width: "100%",
          maxWidth: "90vw",
          display: "flex",
          flexDirection: "column",
          padding: 16,
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h5" color={"#FFF"}>
            My Matches
          </Typography>

          <div style={{ marginLeft: "auto" }}>
            <Button
              sx={{ color: "#FFF", fontWeight: "bold" }}
              onClick={() => navigate("/swiping")}
            >
              Match Game
            </Button>
          </div>
        </div>
        <Typography color={"#FFF"} mt={2}>
          {profiles.length} Profiles pending with me{" "}
          <Chip
            variant="outlined"
            label="5 NEW"
            size="small"
            style={{
              fontSize: 10,
              padding: 0,
              color: "#FFF",
              borderColor: "#FFF",
            }}
          />
        </Typography>
        <div style={{ marginTop: 24, height: 470 }}>
          <AutoSizer>
            {({ width, height }) => {
              let itemWidth = Math.min(300, width);
              return (
                <List
                  className="profile-list"
                  width={width}
                  height={height}
                  itemCount={profiles.length}
                  itemSize={itemWidth}
                  layout="horizontal"
                  itemData={profiles}
                >
                  {RecommendationCard}
                </List>
              );
            }}
          </AutoSizer>
        </div>
      </div>
    </div>
  );
};

export default Matches;
