import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home/Home";
import CollectionDetails from "./pages/CollectionDetails/CollectionDetails";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* HOME PAGE */}

        <Route
          path="/"
          element={<Home />}
        />

        {/* COLLECTION DETAILS PAGE */}

        <Route
          path="/collection/:id"
          element={<CollectionDetails />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;