import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Modal from "react-native-modal";

import UTILS from "../../utils";
import Icons from "../others/Icons";
import SearchBar from "../inputs/SearchBar";

// import AppText from "../wrappers/AppTextWrapper";

const DropDownModal = (props) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleOptionSelection = (option) => {
    setSelectedOption(option);
    setModalVisible(false);
    // handleModal();
    props?.onDropdownSelect(option);
  };

  return (
    <>
      <View style={[styles.container]}>
        <TouchableOpacity
          style={[styles.box, UTILS.STYLES.commonStyle, { paddingLeft: 0.5 }]}
          onPress={toggleModal}
        >
          <View style={styles.boxContent}>
            <View style={styles.boxText}>
              {selectedOption?.url ||
                (props?.flag && (
                  <Text style={[styles.flagStyle]}>
                    {selectedOption?.flag || props?.flag}
                  </Text>
                ))}
              <Text
                style={[
                  styles.text,
                  {
                    color: selectedOption
                      ? UTILS.COLORS.black
                      : UTILS.COLORS.gray2,
                  },
                ]}
              >
                {selectedOption
                  ? selectedOption?.label
                  : props?.label || "Select Option"}
              </Text>
            </View>
            <Icons.CheveronIcon isListVisible={isModalVisible} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Modal
          onBackdropPress={() => setModalVisible(false)}
          onBackButtonPress={() => setModalVisible(false)}
          isVisible={isModalVisible}
          swipeDirection="down"
          onSwipeComplete={toggleModal}
          animationIn="bounceInUp"
          animationOut="bounceOutDown"
          animationInTiming={900}
          animationOutTiming={500}
          backdropTransitionInTiming={1000}
          backdropTransitionOutTiming={500}
          style={styles.modal}
        >
          <View style={[styles.modalContent]}>
            <ScrollView>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Text style={{ fontSize: 20, marginVertical: 5 }}>
                  {props?.title}
                </Text>
                {props?.searchBarLabel && (
                  <SearchBar label={props?.searchBarLabel} />
                )}
              </View>
              {props?.arrayData &&
                props?.arrayData.map((option) => {
                  return (
                    <TouchableOpacity
                      key={option.label}
                      style={styles.optionItem}
                      onPress={() => handleOptionSelection(option)}
                    >
                      <View style={styles.optionContent}>
                        {option?.flag && (
                          <Text style={[styles.flagStyle]}>{option.flag}</Text>
                        )}
                        <Text style={[styles.text]}>{option.label}</Text>
                      </View>
                      {option?.rightText && <Text>{option.rightText}</Text>}
                    </TouchableOpacity>
                  );
                })}
            </ScrollView>
          </View>
        </Modal>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    paddingVertical: 15,
  },
  boxContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  boxText: {
    flexDirection: "row",
    alignItems: "center",
  },
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: UTILS.COLORS.backGround,
    paddingTop: 12,
    paddingHorizontal: 12,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    minHeight: 400,
    paddingBottom: 20,
  },
  optionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  optionContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  flagStyle: {
    marginLeft: 20,
  },
  text: {
    fontSize: 17,
    marginLeft: 15,
  },
});

export default DropDownModal;
