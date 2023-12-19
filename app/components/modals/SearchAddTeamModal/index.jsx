import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import SearchAndAdd from "../../search/SearchAndAdd";
import AddNewTeamModal from "./AddNewTeamModal";

export default function SearchAddTeamModal() {
  const [modal, setModal] = useState({
    addTeamModal: false,
  });
  return (
    <>
      <SearchAndAdd
        onSearch={() => {}}
        onAdd={() => toggleModal("addTeamModal")}
        addBtnTitle="Add Team"
        searchPlaceholder="Search Team"
      />
      <View style={{ height: 20 }} />
      <AddNewTeamModal
        visible={modal.addTeamModal}
        onRequestClose={() => toggleModal("addTeamModal")}
      />
    </>
  );

  function toggleModal(v) {
    setModal({ ...modal, [v]: !modal[v] });
  }
}

const styles = StyleSheet.create({});
