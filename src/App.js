import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import HomePage from "./pages/Home/HomePage";
import ListUsersPage from "./pages/ListUsers/ListUsersPage";
import ProfilePage from "./pages/Profile/ProfilePage";
import { CustomLayout } from "./components/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme/index";
const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/signin" component={LoginPage} />
          <Route exact path="/signup" component={RegisterPage} />
          <CustomLayout>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/list" component={ListUsersPage} />
          </CustomLayout>
        </Switch>
      </Router>
    </ChakraProvider>
  );
};

export default App;
