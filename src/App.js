import {
  HashRouter,
  Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout";
import Analysis from "./Pages/Analysis";
import Resume from "./Pages/Resume";

function App() {
  return (
    <BrowserRouter>
      {/* <Provider store={store}> */}
      <Routes>
        {/* <Route path="/registration" element={<Registration />} /> */}
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Resume />} />
          <Route path="/analysis" element={<Analysis />} />
        </Route>
      </Routes>
      {/* </Provider> */}
    </BrowserRouter>
  );
}

export default App;
