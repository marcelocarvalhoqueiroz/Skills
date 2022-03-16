import React, { useState } from "react";
import { FlatList } from "react-native";
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

  function HandleAddSkill(skill: string){
    const dataSkill = {
      id: String(new Date().getTime()),
      skill: skill
    }
    setSkillList(oldState => [...oldState, dataSkill])
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