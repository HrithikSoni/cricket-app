import { TouchableOpacity , StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";


import { commonStyle } from "../../utils/styles/globalStyles";
import UTILS from "../../utils";


const PhoneNoInputBox = (props) => {
  return (
    <View style={[commonStyle, styles.container, {justifyContent: props?.isVerify ? 'space-between' : 'flex-start' }]}>
      <View style={[styles.codeContainer]}>
        <View>
          <Text style={styles.text}>{props?.code || "+91"}</Text>
        </View>
        <View style={styles.line} />
      </View>
      <View style={[styles.inputContainer, {marginLeft: props?.isVerify ? -130 : 10}]}>
        <TextInput
          keyboardType="phone-pad"
          key="Mobile No"
          placeholder="Mobile No"
          defaultValue={props?.defaultValue}
          onChangeText={props?.onChangeText}
          style={[styles.text]}
        />
      </View>
      {props?.isVerify && (
        <View>
          <TouchableOpacity onPress={props?.handleOnVerify}>
            <Text style={[styles.verifyText]}>Verify</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default PhoneNoInputBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  codeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
  },
  text: {
    fontSize: 17,
  },
  line: {
    borderLeftColor: UTILS.STYLES.colors.gray2,
    borderLeftWidth: 1,
    height: "50%",
    marginHorizontal: 10,
  },
  verifyText: {
    fontSize: 17,
    fontWeight: "500",
    color: UTILS.STYLES.colors.themeColor,
  },
});
