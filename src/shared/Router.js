import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../pages/Detail";
import Home from "../pages/Home";

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        {/* <Route path="/" element={<Home feed={feed} setFeed={setFeed} />} /> */}
        <Route path="/" element={<Home />} />

        <Route
          path="/detail/:id"
          // element={<Detail feed={feed} setFeed={setFeed} />}
          element={<Detail />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
