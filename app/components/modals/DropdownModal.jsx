import React, { useState, useRef, useContext } from "react";
import {
  View,
  Text,
  Modal,
  Image,
  TouchableOpacity,
  Animated,
  TouchableWithoutFeedback,
  StyleSheet,
  ScrollView,
} from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";

import UTILS from "../../utils";
import SearchBar from "../inputs/SearchBar";
import Icons from "../icons";
// import AppText from "../wrappers/AppTextWrapper";

const DropDownModal = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const translateY = useRef(new Animated.Value(600)).current;

  const openModal = () => {
    setModalVisible(true);
  };

  const handleModal = () => {
    if (modalVisible === true) {
      Animated.timing(translateY, {
        toValue: 600,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        setModalVisible(false);
      });
    } else {
      Animated.spring(translateY, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
    }
  };

  const handleGesture = (event) => {
    if (
      event.nativeEvent.translationY > 50 ||
      event.nativeEvent.velocityY > 800
    ) {
      closeModal();
    }
  };

  const handleOptionSelection = (option) => {
    setSelectedOption(option);
    handleModal();
  };

  return (
    <>
      <View style={[styles.container]}>
        <TouchableOpacity
          style={[styles.box, UTILS.STYLES.commonStyle, { paddingLeft: 0.5 }]}
          onPress={openModal}
        >
          <View style={styles.boxContent}>
            <View style={styles.boxText}>
              {selectedOption?.url || props?.imgUrl && (
                <Image
                  style={styles.imgStyle}
                  source={{
                    uri: selectedOption?.imgUrl || props?.imgUrl,
                  }}
                />
              )}
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
            <Icons.CheveronIcon isListVisible={modalVisible} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Modal
          transparent
          visible={modalVisible}
          animationType="slide"
          onRequestClose={handleModal}
        >
          <TouchableWithoutFeedback onPress={handleModal}>
            <View style={styles.overlay} />
          </TouchableWithoutFeedback>
          <PanGestureHandler
            onGestureEvent={Animated.event(
              [{ nativeEvent: { translationY: translateY } }],
              { useNativeDriver: true }
            )}
            onHandlerStateChange={(event) => {
              if (event.nativeEvent.state === State.END) {
                handleGesture(event);
              }
            }}
          >
            <Animated.View
              style={[
                styles.modalContainer,
                { transform: [{ translateY: translateY }] },
              ]}
            >
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
                  props?.arrayData.map((option) => (
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
                      {option?.rightText && <Text>{option.rightText}</Text>}
                    </TouchableOpacity>
                  ))}
              </ScrollView>
            </Animated.View>
          </PanGestureHandler>
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
  contentContainer: {
    backgroundColor: "white",
    paddingHorizontal: 20,
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
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    backgroundColor: "white",
    minHeight: 300,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
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
});

export default DropDownModal;
