import React, { useState} from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native"

import { InputBox , InputContainer, InputButton, ButtonText} from './styles'

interface AddSkillProps {
  addSkill: (skill: string) => void
}

export function AddSkill({addSkill} : AddSkillProps){
  const [ skill, setSkill ] = useState('')

  function inputSkill(skill: string){
    addSkill(skill)
    setSkill('')
  }
  return(
    <InputContainer>
      <InputBox
      placeholder="Skill Name"
      onChangeText={setSkill}
      value={skill}
      >
      </InputBox>
      <InputButton
      onPress={() => inputSkill(skill)}
      >
        <ButtonText>ADD</ButtonText>
      </InputButton>
    </InputContainer>
  )
}