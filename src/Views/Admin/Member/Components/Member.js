import React, { useState } from "react";

function MemberPage() {
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
      </ul>
    </div>
  );
}

export default MemberPage;
