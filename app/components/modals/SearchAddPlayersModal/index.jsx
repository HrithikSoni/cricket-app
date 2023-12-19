import { StyleSheet, View } from "react-native";
import React, { useState } from "react";

import SearchAndAdd from "../../search/SearchAndAdd";
import SearchTeamModal from "./SearchTeamModal";
import AddNewPlayerModal from "./AddNewPlayerModal";

export default function SearchAddPlayerModal() {
  const [modal, setModal] = useState({
    searchPlayerModal: false,
    addPlayerModal: false,
  });
  return (
    <>
      <SearchAndAdd
        onSearch={() => toggleModal("searchPlayerModal")}
        onAdd={() => toggleModal("addPlayerModal")}
        addBtnTitle="New Player"
        searchPlaceholder="Search Player by Number"
      />
      <View style={{ height: 20 }} />

      <SearchTeamModal
        visible={modal.searchPlayerModal}
        onRequestClose={() => toggleModal("searchPlayerModal")}
      />
      <AddNewPlayerModal
        visible={modal.addPlayerModal}
        onRequestClose={() => toggleModal("addPlayerModal")}
        header={"Add New Player"}
      />
    </>
  );

  function toggleModal(v) {
    setModal({ ...modal, [v]: !modal[v] });
  }
}

const styles = StyleSheet.create({});
