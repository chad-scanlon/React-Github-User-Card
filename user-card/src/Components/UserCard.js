import React from "react";

const UserCard = (props) => {
  return (
    <>
      <div key={props.users.id} className="user-container">
        <div className="user">
          <h3>{props.users.name}</h3>
          <p>
            {props.users.bio}, located in {props.users.location}
          </p>
          <img src={props.users.avatar_url} alt={props.users.name} />
        </div>
      </div>
      <div className="follower-header">
        <h2>Followers</h2>
      </div>
      {props.followers.map((follower) => (
        <div key={follower.id} className="follower-container">
          <div className="follower">
            <h3>{follower.login}</h3>
            <img src={follower.avatar_url} alt={follower.login} />
          </div>
        </div>
      ))}
    </>
  );
};

export default UserCard;
