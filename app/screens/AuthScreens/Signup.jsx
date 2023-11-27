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
import INPUT_TYPE from "../../utils/constants/inputType";
import ComponentHandler from "../../components/ComponentHandler";
import Button from '../../components/Button'
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
    phoneNo: "",
  });

  const form = [
    {
      label: "First Name",
      key: signUpData.current.firstName,
      defaultValue: signUpData.current.firstName,
    },
    {
      label: "Last Name",
      key: signUpData.current.lastName,
      defaultValue: signUpData.current.lastName,
    },
    {
      label: "Email",
      key: signUpData.current.email,
      defaultValue: signUpData.current.email,
    },
    {
      label: "Gender",
      key: signUpData.current.gender,
      defaultValue: signUpData.current.gender,
      type: INPUT_TYPE.DROPDOWN,
      arrayData: [{label: "Male"}, {label: 'Female'}],
      title: 'Select Gender'
    },
    {
      label: "Date Of Birth",
      key: signUpData.current.dob,
      defaultValue: signUpData.current.dob,
      type: INPUT_TYPE.DATE_PICKER,
    },
    {
      label: "Country",
      key: signUpData.current.country,
      defaultValue: signUpData.current.country,
      type: INPUT_TYPE.DROPDOWN,
    },
    {
      label: "State",
      key: signUpData.current.state,
      defaultValue: signUpData.current.state,
      type: INPUT_TYPE.DROPDOWN,
    },
    {
      key: signUpData.current.countryCode,
      defaultValue: signUpData.current.countryCode,
      type: INPUT_TYPE.COUNTRY_PICKER_BOX,
    },
    {
      key: signUpData.current.phoneNo,
      defaultValue: signUpData.current.phoneNo,
      type: INPUT_TYPE.PHONE_NO_INPUT_BOX,
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
           <TouchableOpacity onPress={handleEditProfilePic}>
           <View style={styles.userDp}>
              <CameraIcon />
            </View>
           </TouchableOpacity>
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
              onChangeText={(e) => (item.key = e)}
            />
          ))}
          <View style={{marginTop: 20}}><Button onButtonPress={handleSignUpPress}/></View>
        </View>
      </ParentWrapperWithBG>
    </ScrollView>
  );
};

const handleEditProfilePic = () => {};

const handleSignUpPress = () => {};

export default Signup;

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
