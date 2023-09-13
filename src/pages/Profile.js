import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function Profile() {
  const parameters = useParams();
  //   we are using Params to fetch userId
  return (
    <div>
      <h1>Profile of {`${parameters.userId} ${parameters.projectId}`}</h1>
    </div>
  );
}

export default Profile;
