import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import SearchAndAdd from "../search/SearchAndAdd";
import AddNewTeamModal from "./AddNewTeamModal";
import RetiredHurtModal from "./ScoringScreenModals/RetiredHurtModal";
import PenaltyRunsModal from "./ScoringScreenModals/PenaltyRunsModal";
import FallOfWicketModal from "./ScoringScreenModals/FallOfWicketModal";
import CreateModal from "./ScoringScreenModals/CreateModal";
import CreateAccountModal from "./ScoringScreenModals/CreateAccountModal";

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
      <CreateAccountModal
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
