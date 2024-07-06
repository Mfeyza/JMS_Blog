import { Stack } from "@mui/material";

import AppRouter from "./router/AppRouter";

function App() {
  return (
    <Stack minHeight={"100vh"} width={"100%"} className="stack">
     
      <AppRouter/>

    </Stack>
  );
}

export default App;
