import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DashboardEvents from "../Events/Components/DashboardEvents";
import DashboardPosts from "../Posts/Components/DashboardPosts";
import DashboardLoadouts from "../Loudout/Components/DashboardLoadouts";

function DashboardPage() {
  return (
    <div className="container">
      <div className="row">
        <DashboardEvents className="col-4" />
        <DashboardPosts className="col-4" />
        <DashboardLoadouts className="col-4" />
      </div>
    </div>
  );
}
export default DashboardPage;
