import Button from "@mui/material/Button";
import { grey } from "@mui/material/colors";

const ActionButton = ({ isPrimary, showBorder = true, onClick, children }) => {
  if (isPrimary) {
    return (
      <Button
        variant="contained"
        style={{ borderRadius: 50, textTransform: "capitalize" }}
        disableElevation
        onClick={onClick}
        size="small"
      >
        {children}
      </Button>
    );
  }
  return (
    <Button
      variant={showBorder ? "outlined" : "text"}
      style={{
        borderRadius: 50,
        borderColor: grey[200],
        color: grey[500],
        textTransform: "capitalize",
      }}
      onClick={onClick}
      size="small"
    >
      {children}
    </Button>
  );
};

export default ActionButton;
