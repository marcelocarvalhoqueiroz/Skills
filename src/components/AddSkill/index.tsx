import React, { useState} from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native"

interface AddSkillProps {
  addSkill: (skill: string) => void
}

export function AddSkill({addSkill} : AddSkillProps){
  const [ skill, setSkill ] = useState('')

  return(
    <View>
      <TextInput
      placeholder="Skill Name"
      onChangeText={setSkill}
      value={skill}
      >
      </TextInput>
      <TouchableOpacity
      onPress={() => addSkill(skill)}
      >
        <Text>Add Skill</Text>
      </TouchableOpacity>
    </View>
  )
}