import React from "react";
import DashboardEvents from "../Events/Components/DashboardEvents";
import DashboardPosts from "../Posts/Components/DashboardPosts";
import DashboardLoadouts from "../Loudout/Components/DashboardLoadouts";

function DashboardPage() {
  return (
    <div>
      <DashboardEvents />
      <DashboardPosts />
      <DashboardLoadouts />
    </div>
  );
}
export default DashboardPage;
