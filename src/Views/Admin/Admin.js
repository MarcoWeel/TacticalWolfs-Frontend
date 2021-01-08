import React, { useState } from "react";

function AdminPage() {
  return (
    <div>
      <ul>
        <li>
          <a href="/posts/create">Create post </a>
        </li>
        <li>
          <a href="/event/create">Create event </a>
        </li>
        <li>
          <a href="/event/location/create">Add location </a>
        </li>
        <a href="/">Create Loadout </a>
        <li>
          <a href="/">My Loadout </a>
        </li>
      </ul>
    </div>
  );
}
export default AdminPage;
