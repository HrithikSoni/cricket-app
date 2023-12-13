import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import api from "../../services/store/appApi";
import UTILS from "../../utils";
import AppText from "../text/AppText";
import AddNewPersonModal from "./AddNewPersonModal";
import PersonSelectionModal from "./PersonSelectionModal";

export default function AddSelectInput(props) {
  const [selectedValue, setSelectedValue] = useState({
    id: "",
    firstName: "",
    lastName: "",
  });
  const [modal, setModal] = useState({
    getListModal: false,
    addListModal: false,
  });

  const { data: list } = api.useGetUmpireQuery();
  console.log(list?.length, "list");

  function onListPress() {
    toggleModal("getListModal");
  }

  function handleOnSelect(option) {
    setSelectedValue({
      firstName: option.firstName,
      lastName: option.lastName,
    });
    props.onBottomSheetSelect(option);
    toggleModal("getListModal");
  }

  return (
    <>
      <TouchableOpacity
        style={[UTILS.STYLES.commonStyle, styles.inputContainer]}
        onPress={onListPress}
      >
        <View style={styles.nameContainer}>
          <AppText style={styles.label}>
            {selectedValue.firstName || props.label}
          </AppText>
          {selectedValue.lastName && (
            <AppText style={styles.label}>{selectedValue.lastName}</AppText>
          )}
        </View>
        <SelectorBtn />
      </TouchableOpacity>
      <PersonSelectionModal
        visible={modal.getListModal}
        onRequestClose={() => toggleModal("getListModal")}
        data={list}
        {...props}
        onPersonSelect={handleOnSelect}
      />
    </>
  );
  function SelectorBtn() {
    return (
      <>
        <TouchableOpacity
          style={styles.selectorBtn}
          onPress={() => toggleModal("addListModal")}
        >
          <AppText style={{ color: UTILS.COLORS.themeColor }}>Add</AppText>
        </TouchableOpacity>
        <AddNewPersonModal
          visible={modal.addListModal}
          onRequestClose={() => toggleModal("addListModal")}
          {...props}
        />
      </>
    );
  }

  function toggleModal(v) {
    setModal({ ...modal, [v]: !modal[v] });
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    color: UTILS.COLORS.themeColor,
    fontSize: 16,
  },
  selectorBtn: {
    height: 35,
    width: 74,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: UTILS.COLORS.border1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: UTILS.COLORS.background1,
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
