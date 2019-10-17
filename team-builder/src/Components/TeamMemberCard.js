import React from "react";
const TeamMemberCard = props => {
    console.log("This is from card", props);
    return (
      <div className="member-list">
        {props.memberList.map((member, index) => {
          return (
            <div className="note" key={index}>
              <h2>{member.name}</h2>
              <p>{member.email}</p>
              <p>{member.role}</p>
            </div>
          );
        })}
      </div>
    );
  };
export default TeamMemberCard;