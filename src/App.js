import { Route, Routes } from "react-router-dom";
import MyForm from "./components/MyForm";
import { ApolloProvider } from "@apollo/client";
import { client } from "./apollocontainer";

function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <Routes>
          <Route path="/" element={<MyForm />} />
        </Routes>
      </ApolloProvider>
    </div>
  );
}

export default App;
