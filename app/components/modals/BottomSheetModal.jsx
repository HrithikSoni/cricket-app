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
import SearchBar from "../inputs/SearchBar";
import UTILS from "../../utils";

const BottomSheetModal = (props) => {
  const [isModalVisible, setModalVisible] = useState(false);

  console.log(props, 'lllllllll');

  const toggleModal = () => {
    setModalVisible(!isModalVisible)
  };

  const handleOptionSelection = (option) => {
    props?.onOptionSelect(option);
    setModalVisible(false);
    // handleModal();
  };

  return (
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
  );
};

export default BottomSheetModal;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
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
