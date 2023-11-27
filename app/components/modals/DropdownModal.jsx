import React, { useState, useRef, useContext } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import Modal from "react-native-modal";

import UTILS from "../../utils";
import SearchBar from "../inputs/SearchBar";
import Icons from "../icons";
import { AppContext } from "../../context/AppContext";
// import AppText from "../wrappers/AppTextWrapper";

const DropDownModal = (props) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const {setUserData} = useContext(AppContext);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleOptionSelection = (option) => {
    setSelectedOption(option);
    setUserData({selectedOption: option})
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
                (props?.imgUrl && (
                  <Image
                    style={styles.imgStyle}
                    source={{
                      uri: selectedOption?.imgUrl || props?.imgUrl,
                    }}
                  />
                ))}
              <Text
                style={[
                  styles.text,
                  {
                    color: selectedOption
                      ? UTILS.STYLES.colors.black
                      : UTILS.STYLES.colors.gray2,
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
       <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Text style={{ fontSize: 20, marginVertical: 5 }}>
                  {props?.title}
                </Text>
                {props?.searchBarLabel && (
                  <SearchBar label={props?.searchBarLabel} />
                )}
              </View>
              <ScrollView>
                {props?.arrayData &&
                  props?.arrayData.map((option) => {
                    return (
                      <TouchableOpacity
                        key={option.label}
                        style={styles.optionItem}
                        onPress={() => handleOptionSelection(option)}
                      >
                        <View style={styles.optionContent}>
                          {option?.imgUrl && (
                            <Image
                              style={styles.imgStyle}
                              source={{
                                uri: option.imgUrl,
                              }}
                            />
                          )}
                          <Text style={[styles.text]}>{option.label}</Text>
                        </View>
                        {option?.value && <Text>{option.value}</Text>}
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
    marginVertical: 7,
    width: 370,
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
    backgroundColor: UTILS.STYLES.colors.backGround,
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
  imgStyle: {
    height: 33,
    width: 33,
    borderRadius: 20,
    marginLeft: 10,
  },
  text: {
    fontSize: 17,
    marginLeft: 15,
  },
});

export default DropDownModal;
