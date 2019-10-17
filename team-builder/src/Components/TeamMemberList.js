import React, {useState} from "react";
import MemberForm from "./MemberForm";
import data from "../data";
import TeamMemberCard from "./TeamMemberCard";

const TeamMemberList = () => {
    const [members, setMembers] = useState(data);
    const addNewMember = member => {
        setMembers([...members, member])
      }
    return (
    <div className="App">
        <h1>Team Members</h1>
        <MemberForm addNewMember={addNewMember}/>
        <TeamMemberCard memberList={members}/>
    </div>
    );
}
export default TeamMemberList;
