import React from "react";
import Skill from "./Skill"
import "./css/Skilltree.css";

export default function Skilltree() {
  return (
    <div className="talent-tree">
      <h2 className="start-helper active">Start here!</h2>
      {/* Starting point */}
      <Skill id={1} currentPoints={1} maxPoints={2} hasDependencies={false}/>

      {/* First line */}
      <Skill id={2} currentPoints={0} maxPoints={2} hasDependencies={false}/>
      <Skill id={3} currentPoints={0} maxPoints={2} hasDependencies={true}/>
      <Skill id={4} currentPoints={0} maxPoints={1} hasDependencies={true}/>
      <Skill id={5} currentPoints={0} maxPoints={1} hasDependencies={true}/>
      <Skill id={6} currentPoints={0} maxPoints={1} hasDependencies={true}/>
      <Skill id={7} currentPoints={0} maxPoints={1} hasDependencies={true}/>
      <Skill id={8} currentPoints={0} maxPoints={1} hasDependencies={true}/>
      
      {/* Second Line */}
      <Skill id={9} currentPoints={0} maxPoints={1} hasDependencies={true}/>
      <Skill id={10} currentPoints={0} maxPoints={1} hasDependencies={true}/>
      <Skill id={11} currentPoints={0} maxPoints={1} hasDependencies={true}/>
      <Skill id={12} currentPoints={0} maxPoints={1} hasDependencies={true}/>
      <Skill id={13} currentPoints={0} maxPoints={1} hasDependencies={true}/>
      <Skill id={14} currentPoints={0} maxPoints={1} hasDependencies={true} addDependencyLine={true}/>
      <Skill id={15} currentPoints={0} maxPoints={1} hasDependencies={true}/>

      {/* Third Line */}
      <Skill id={16} currentPoints={0} maxPoints={1} hasDependencies={true}/>
      <Skill id={17} currentPoints={0} maxPoints={1} hasDependencies={true}/>
      <Skill id={18} currentPoints={0} maxPoints={1} hasDependencies={true}/>
      <Skill id={19} currentPoints={0} maxPoints={1} hasDependencies={true}/>
      <Skill id={20} currentPoints={0} maxPoints={1} hasDependencies={true}/>
      <Skill id={21} currentPoints={0} maxPoints={1} hasDependencies={true}/>
      <Skill id={22} currentPoints={0} maxPoints={1} hasDependencies={true}/>
      <Skill id={23} currentPoints={0} maxPoints={1} hasDependencies={true}/>

      {/* Fourth Line */}
      <Skill id={24} currentPoints={0} maxPoints={1} hasDependencies={true}/>
      <Skill id={25} currentPoints={0} maxPoints={1} hasDependencies={true}/>
      <Skill id={26} currentPoints={0} maxPoints={1} hasDependencies={true}/>
      <Skill id={27} currentPoints={0} maxPoints={1} hasDependencies={true}/>
      <Skill id={28} currentPoints={0} maxPoints={1} hasDependencies={true}/>
    </div>
  );
}
