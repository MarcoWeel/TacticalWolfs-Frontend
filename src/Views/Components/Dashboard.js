import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DashboardEvents from "../Events/Components/DashboardEvents";
import DashboardPosts from "../Posts/Components/DashboardPosts";

function DashboardPage() {
  return (
    <div>
      <DashboardEvents />
      <DashboardPosts />
    </div>
  );
}
export default DashboardPage;
