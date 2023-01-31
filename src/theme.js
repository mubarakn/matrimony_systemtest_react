import { createTheme } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
      light: orange[100],
      dark: orange[500],
      contrastText: "#FFF",
    },
  },
});

export default theme;
