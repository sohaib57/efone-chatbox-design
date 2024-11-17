import "./App.css";
import "./views/ChatBox";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ChatBox from "./views/ChatBox";

const theme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ChatBox />
    </ThemeProvider>
  );
}

export default App;
