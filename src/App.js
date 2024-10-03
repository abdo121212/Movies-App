import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Components/Home";
import { Login } from "./Components/Login";
import { SignUp } from "./Components/SignUp";
import { Account } from "./Components/Account";
import { MoviesDatelis } from "./Components/MoviesDatelis";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/moviedateils" element={<MoviesDatelis />}>
            <Route path=":id" element={<MoviesDatelis />} />
          </Route>
          <Route path="/account" element={<Account />} />
          <Route
            path="*"
            element={
              <>
                <div className="flex justify-center items-center h-screen text-red-6  00 text-7xl capitalize">
                  page not found
                </div>
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
