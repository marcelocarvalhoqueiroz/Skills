import React, { useState } from "react";
import { FlatList, Alert } from "react-native";
import { StatusBar } from 'expo-status-bar';

import { Header } from "../../components/Header";

import { AppContainer } from "./styles";
import { AddSkill } from "../../components/AddSkill";
import { Skill } from "../../components/Skill";

interface Skill {
  id: string;
  skill: string;
}

export function Home(){
  const [ skillList, setSkillList] = useState<Skill[]>([])
  const [ skillId, setSkillId] = useState(1)

  function HandleAddSkill(skill: string){
    let equalSkill = false
    
    for(let i=0; i < skillList.length; i++){
      if(skillList[i].skill == skill){
        equalSkill = true
      }
    }
    if(equalSkill){
      Alert.alert(
        `Skill already inserted`,
        `Skill ${skill} exists on Skill List`,
          [
            {
              text: 'OK'
            }
          ]
      )
    }else{
      const dataSkill = {
        id: String(skillId),
        skill: skill
      }
      setSkillId(skillList.length + 1)
      setSkillList(oldState => [...oldState, dataSkill])
    }
  }

  return(
    <AppContainer>
      <StatusBar style="light"/>
      <Header />
      <AddSkill addSkill={HandleAddSkill}/>
      <FlatList
      data={skillList}
      keyExtractor={item => item.id}
      renderItem={ ( { item }) => <Skill skill={item.skill}/>}
      />
    </AppContainer>
  )
}