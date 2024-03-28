// App.jsx
import React from "react";
import "./App.css";
import Sidebar from "./components/SidebarContainer/index.jsx";
import RecipiesFeed from "./components/RecipiesFeed/index.jsx";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <RecipiesFeed />
    </div>
  );
}

export default App;
