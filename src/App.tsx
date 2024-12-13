import "@/assets/scss/index.scss";

import { ClerkProvider } from "@clerk/clerk-react";
import { createTheme, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

import { BaseTemplate } from "./components/templates/MainLayout";

const theme = createTheme({
  cursorType: "pointer",
  primaryColor: "gray",
});

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const App = () => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <MantineProvider theme={theme}>
        <BaseTemplate />
        <Notifications />
      </MantineProvider>
    </ClerkProvider>
  );
};

export default App;
