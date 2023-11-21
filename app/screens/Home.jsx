import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ParentWrapper from "../components/wrappers/ParentWrapper";
import MatchCard from "../components/cards/MatchCard";

export default function Home() {
  return (
    <ParentWrapper>
      <Text>Home</Text>
      <MatchCard />
    </ParentWrapper>
  );
}

const styles = StyleSheet.create({});
