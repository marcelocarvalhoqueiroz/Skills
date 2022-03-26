import React, { useState } from "react";
import { FlatList, Alert } from "react-native";
import { StatusBar } from 'expo-status-bar';

import { Header } from "../../components/Header";

import { AppContainer } from "./styles";
import { AddSkill } from "../../components/AddSkill";
import { Skill } from "../../components/Skill";

interface Skill {
  id: number;
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
        id: skillId,
        skill: skill
      }
      setSkillId(skillList.length + 1)
      setSkillList(oldState => [...oldState, dataSkill])
    }
  }

  function handleRemoveSkill(id: number){
    Alert.alert(
      `Remove item`,
      `Are you sure?`
    ),
      [
        {
          text: 'No',
          style: 'cancel'
        },
        {
          text: 'Yes',
          style: 'destructive',
          onPress: () =>{
            setSkillList(oldState => oldState.filter(
              skill => skill.id !== id
            ))
          }
        }
      ]
  }
  return(
    <AppContainer>
      <StatusBar style="light"/>
      <Header />
      <AddSkill addSkill={HandleAddSkill}/>
      <FlatList
      data={skillList}
      renderItem={ ( { item }) => <Skill skillId={item.id} skill={item.skill} removeSkill={handleRemoveSkill}/>}
      />
    </AppContainer>
  )
}