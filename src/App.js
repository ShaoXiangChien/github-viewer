import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RepoList from "./pages/RepoList";
import RepoView from "./pages/RepoView";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/github-viewer/" exact element={<MainPage />} />
          <Route
            path="github-viewer/users/:userName"
            exact
            element={<RepoList />}
          />
          <Route
            path="github-viewer/users/:userName/repos/:repoName"
            exact
            element={<RepoView />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
