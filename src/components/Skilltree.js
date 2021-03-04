import React from "react";
import Skill from "./Skill"
import "./css/Skilltree.css";

export default function Skilltree() {
  return (
    <div className="talent-tree">
      <h2 className="start-helper active">Start here!</h2>
      <Skill id={1} currentPoints={1} maxPoints={2} hasDependencies={false}/>
      <Skill id={2} currentPoints={0} maxPoints={2} hasDependencies={true}/>
      <Skill id={3} currentPoints={0} maxPoints={2} hasDependencies={true}/>
      <Skill id={4} currentPoints={0} maxPoints={1} hasDependencies={true}/>
      <Skill id={5} currentPoints={0} maxPoints={1} hasDependencies={true}/>
      <Skill id={6} currentPoints={0} maxPoints={1} hasDependencies={true}/>
      <Skill id={7} currentPoints={0} maxPoints={1} hasDependencies={true}/>
      <Skill id={8} currentPoints={0} maxPoints={1} hasDependencies={true}/>
    </div>
  );
}
