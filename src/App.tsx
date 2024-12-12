import "@/assets/scss/index.scss";

import { createTheme, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

import { BaseTemplate } from "./components/templates/MainLayout";

const theme = createTheme({
  cursorType: "pointer",
  primaryColor: "gray",
});

const App = () => {
  return (
    <MantineProvider theme={theme}>
      <BaseTemplate />
      <Notifications />
    </MantineProvider>
  );
};

export default App;
