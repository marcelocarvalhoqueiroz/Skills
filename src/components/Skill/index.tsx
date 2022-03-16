import React from "react";
import { Text } from "react-native";

interface SkillProps {
  skill: string
}

export function Skill({ skill }: SkillProps ){
  return(
    <Text>{skill}</Text>
  )
}