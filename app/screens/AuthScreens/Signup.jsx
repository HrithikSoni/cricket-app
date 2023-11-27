import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef } from "react";

import UTILS from "../../utils";
import { CameraIcon } from "../../components/icons";

import ComponentHandler from "../../components/ComponentHandler";
import Button from "../../components/Button";
import ParentWrapperWithBG from "../../components/wrappers/ParentWrapperWithBG";

const Signup = ({ navigation }) => {
  const signUpData = useRef({
    firstName: "",
    lastName: "",
    email: "",
    gender: null,
    dob: null,
    country: null,
    state: null,
    countryCode: null,
    contact: "",
  });

  const { handleSignUp } = useSignUp(signUpData.current);

  const form = [
    {
      label: "First Name",
      key: "firstName",
      defaultValue: signUpData.current.firstName,
    },
    {
      label: "Last Name",
      key: "lastName",
      defaultValue: signUpData.current.lastName,
    },
    {
      label: "Email",
      key: "email",
      defaultValue: signUpData.current.email,
    },
    {
      label: "Gender",
      key: "gender",
      defaultValue: signUpData.current.gender,
      type: UTILS.INPUT_TYPE.DROPDOWN,
      arrayData: [
        { label: "Male", value: "MALE" },
        { label: "Female", value: "FEMALE" },
        { label: "Other", value: "OTHER" },
      ],
      title: "Select Gender",
    },
    {
      label: "Date Of Birth",
      key: "dob",
      defaultValue: signUpData.current.dob,
      type: UTILS.INPUT_TYPE.DATE_PICKER,
    },
    {
      label: "Country",
      key: "countryId",
      defaultValue: signUpData.current.country,
      type: UTILS.INPUT_TYPE.DROPDOWN,
    },
    {
      label: "State",
      key: "stateId",
      defaultValue: signUpData.current.state,
      type: UTILS.INPUT_TYPE.DROPDOWN,
    },
    {
      key: signUpData.current.countryCode,
      defaultValue: signUpData.current.countryCode,
      type: UTILS.INPUT_TYPE.COUNTRY_PICKER_BOX,
    },
    {
      key: "contact",
      defaultValue: signUpData.current.phoneNo,
      type: UTILS.INPUT_TYPE.PHONE_NO_INPUT_BOX,
      isVerify: true,
    },
  ];

  return (
    <ScrollView>
      <ParentWrapperWithBG
        title={"Create account"}
        discp={"Please Enter Your details and create your account"}
        navigation={navigation}
      >
        <View style={[styles.container]}>
          <View style={[styles.profilePicCon]}>
            <View style={styles.userDp}>
              <CameraIcon />
            </View>
            <TouchableOpacity onPress={handleEditProfilePic}>
              <Text style={{ marginLeft: 30, fontSize: 17, fontWeight: "500" }}>
                Set profile picture
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.formContainer]}></View>
          {form.map((item, index) => (
            <ComponentHandler
              key={index}
              type={item?.type}
              {...item}
              onChangeText={(e) => (signUpData.current[item.key] = e)}
              onDropdownSelect={(e) => (signUpData.current[item.key] = e.value)}
              onDateSelect={(e) => (signUpData.current[item.key] = e)}
            />
          ))}
          <View style={{ marginTop: 20 }}>
            <Button onButtonPress={handleSignUp} />
          </View>
        </View>
      </ParentWrapperWithBG>
    </ScrollView>
  );
};

const handleEditProfilePic = () => {};

export default Signup;

function useSignUp(body) {
  async function handleSignUp() {
    console.log(body);
  }

  return {
    handleSignUp,
  };
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  profilePicCon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  formContainer: {
    marginTop: 10,
  },
  userDp: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: UTILS.STYLES.colors.gray1,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: -90,
    marginRight: 20,
  },
});
