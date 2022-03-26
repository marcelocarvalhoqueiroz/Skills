import React from "react";
import { SkillText, SkillButton } from './styles'

interface SkillProps {
  skillId: number;
  skill: string;
  removeSkill: (id: number) => void;
}

export function Skill({ skillId, skill, removeSkill}: SkillProps ){

  return(
    <SkillButton
    onPress={() => removeSkill(skillId)}
    >
      <SkillText>{skill}</SkillText>
    </SkillButton>
  )
}