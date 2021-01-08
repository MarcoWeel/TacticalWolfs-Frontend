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
        <li>
          <a href="/loadout/create">Create Loadout </a>
        </li>
        <li>
          <a href="/loadout">My Loadout </a>
        </li>
        <li>
          <a href="https://84.86.167.197:8082/auth/admin/master/console/#/realms/TacticalWolves/users">
            UserManagement
          </a>
        </li>
      </ul>
    </div>
  );
}
export default AdminPage;
