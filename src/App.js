import "./App.css";
import Routing from "./components/routes";
import Context from "./context";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ApolloProvider } from "@apollo/client";
import client from "./graphQL/config";

function App() {
  const num = 9; // local variable
  const [projectDetails, setProjectDetails] = useState("test");
  const [colors, setColors] = useState("red");
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Context.Provider
          value={{ projectDetails, setProjectDetails, colors, setColors }}
        >
          <div className="App">
            <Routing />
            {/* this is inline comment */}
          </div>
        </Context.Provider>
      </Provider>
    </ApolloProvider>
  );
}

export default App;
