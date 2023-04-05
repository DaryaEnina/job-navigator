import { HashRouter, Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout";
import Questionnaire from "./Pages/Questionnaire";

function App() {
  return (
    <HashRouter>
      {/* <Provider store={store}> */}
      <Routes>
        {/* <Route path="/registration" element={<Registration />} /> */}
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Questionnaire />} />
        </Route>
      </Routes>
      {/* </Provider> */}
    </HashRouter>
  );
}

export default App;
