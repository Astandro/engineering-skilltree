import React from "react";
import Skill from "./Skill"
import "./css/Skilltree.css";

export default function Skilltree() {
  return (
    <div className="talent-tree">
      <h2 className="start-helper active">Start here!</h2>
      {/* Starting point */}
      <Skill id={1} currentPoints={1} maxPoints={2} hasDependencies={false} skillName={"S.W.O.T"}/>

      {/* First line */}
      <Skill id={2} currentPoints={0} maxPoints={2} hasDependencies={false} skillName={"Knowledge Hunger"}/>
      <Skill id={3} currentPoints={0} maxPoints={2} hasDependencies={true} skillName={"N.W.O.W"}/>
      <Skill id={4} currentPoints={0} maxPoints={1} hasDependencies={true} skillName={"Clarifying"}/>
      <Skill id={5} currentPoints={0} maxPoints={1} hasDependencies={true} skillName={"Speak Up"}/>
      <Skill id={6} currentPoints={0} maxPoints={1} hasDependencies={true} skillName={"Unit Test Mastery"}/>
      <Skill id={7} currentPoints={0} maxPoints={1} hasDependencies={true} skillName={"Learn Squad Stack"}/>
      <Skill id={8} currentPoints={0} maxPoints={1} hasDependencies={true} skillName={"Stack Mastery"}/>
      
      {/* Second Line */}
      <Skill id={9} currentPoints={0} maxPoints={1} hasDependencies={true} skillName={"Understand Product Value"}/>
      <Skill id={10} currentPoints={0} maxPoints={1} hasDependencies={true} skillName={"Understand Squad Metrics"}/>
      <Skill id={11} currentPoints={0} maxPoints={1} hasDependencies={true} skillName={"Monitoring"}/>
      <Skill id={12} currentPoints={0} maxPoints={1} hasDependencies={true} skillName={"Collaborative"}/>
      <Skill id={13} currentPoints={0} maxPoints={1} hasDependencies={true} skillName={"Modular"}/>
      <Skill id={14} currentPoints={0} maxPoints={1} hasDependencies={true} skillName={"Deliver Solution"} addDependencyLine={true}/>
      <Skill id={15} currentPoints={0} maxPoints={1} hasDependencies={true} skillName={"Security Awareness"}/>

      {/* Third Line */}
      <Skill id={16} currentPoints={0} maxPoints={1} hasDependencies={true} skillName={"Know Impact"}/>
      <Skill id={17} currentPoints={0} maxPoints={1} hasDependencies={true} skillName={"Good Oncall"}/>
      <Skill id={18} currentPoints={0} maxPoints={1} hasDependencies={true} skillName={"Deployer"}/>
      <Skill id={19} currentPoints={0} maxPoints={1} hasDependencies={true} skillName={"Debugger"}/>
      <Skill id={20} currentPoints={0} maxPoints={1} hasDependencies={true} skillName={"Learn From Mistakes"}/>
      <Skill id={21} currentPoints={0} maxPoints={1} hasDependencies={true} skillName={"Open to Feedback"}/>
      <Skill id={22} currentPoints={0} maxPoints={1} hasDependencies={true} skillName={"Adaptable"}/>
      <Skill id={23} currentPoints={0} maxPoints={1} hasDependencies={true} skillName={"Adhere to Current Standards"}/>

      {/* Fourth Line */}
      <Skill id={24} currentPoints={0} maxPoints={1} hasDependencies={true} skillName={"Prioritize"}/>
      <Skill id={25} currentPoints={0} maxPoints={1} hasDependencies={true} skillName={"Post Mortem Mastery"}/>
      <Skill id={26} currentPoints={0} maxPoints={1} hasDependencies={true} skillName={"Effective Communication"}/>
      <Skill id={27} currentPoints={0} maxPoints={1} hasDependencies={true} skillName={"Continous Improvement Mindset"}/>
      <Skill id={28} currentPoints={0} maxPoints={1} hasDependencies={true} skillName={"Independent 1"}/>

      {/* Fifth Line */}
      <Skill id={29} currentPoints={0} maxPoints={1} hasDependencies={true} skillName={"Initiative"}/>
      <Skill id={30} currentPoints={0} maxPoints={1} hasDependencies={true} skillName={"Objective Minded"}/>
      <Skill id={31} currentPoints={0} maxPoints={1} hasDependencies={true} skillName={"Mentoring"}/>
      <Skill id={32} currentPoints={0} maxPoints={1} hasDependencies={true} skillName={"Knowledge Sharing"}/>
      <Skill id={33} currentPoints={0} maxPoints={1} hasDependencies={true} skillName={"Quality Code"}/>
      <Skill id={34} currentPoints={0} maxPoints={1} hasDependencies={true} skillName={"Tech Documenting"}/>

      {/* Sixth Line */}
      <Skill id={35} currentPoints={0} maxPoints={1} hasDependencies={true} skillName={"Good Judge"}/>
      <Skill id={36} currentPoints={0} maxPoints={1} hasDependencies={true} skillName={"Estimator"}/>
      <Skill id={37} currentPoints={0} maxPoints={1} hasDependencies={true} skillName={"Negotiator"}/>
      <Skill id={38} currentPoints={0} maxPoints={1} hasDependencies={true} skillName={"Identifier"}/>
      <Skill id={39} currentPoints={0} maxPoints={1} hasDependencies={true} skillName={"Iterator"}/>
      <Skill id={40} currentPoints={0} maxPoints={1} hasDependencies={true} skillName={"Independent 2"}/>
      <Skill id={41} currentPoints={0} maxPoints={1} hasDependencies={true} skillName={"Simpler is Better"}/>
      <Skill id={42} currentPoints={0} maxPoints={1} hasDependencies={true} skillName={"Solver"}/>
      <Skill id={43} currentPoints={0} maxPoints={1} hasDependencies={true} skillName={"Test Driven"}/>

      {/* Seventh Line */}
      <Skill id={44} currentPoints={0} maxPoints={1} hasDependencies={true} skillName={"Solution Finder"}/>
      <Skill id={45} currentPoints={0} maxPoints={1} hasDependencies={true} skillName={"Business Driven"}/>
      <Skill id={46} currentPoints={0} maxPoints={1} hasDependencies={true} skillName={"Good Arguer"}/>
      <Skill id={47} currentPoints={0} maxPoints={1} hasDependencies={true} skillName={"Team Leader"}/>
      <Skill id={48} currentPoints={0} maxPoints={1} hasDependencies={true} skillName={"Tribal Driver"}/>
      <Skill id={49} currentPoints={0} maxPoints={1} hasDependencies={true} skillName={"Tribal Star"}/>
      <Skill id={50} currentPoints={0} maxPoints={1} hasDependencies={true} skillName={"The Larger The Better"}/>
      <Skill id={51} currentPoints={0} maxPoints={1} hasDependencies={true} skillName={"Complex Solver"}/>

      {/* Final Line */}
      <Skill id={52} currentPoints={0} maxPoints={1} hasDependencies={true} skillName={"The Great Tech Sage"}/>
    </div>
  );
}
