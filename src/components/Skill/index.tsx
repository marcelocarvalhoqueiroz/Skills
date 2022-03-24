import React from "react";
import { TouchableOpacity } from "react-native";

import { SkillText, SkillButton } from './styles'

interface SkillProps {
  skill: string
}

export function Skill({ skill }: SkillProps ){
  return(
    <SkillButton>
      <SkillText>{skill}</SkillText>
    </SkillButton>
  )
}