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
import AUTH_ENDPOINTS from "../../services/api/authEndpoints";
import { save, userDetail } from "../../services/permanentStorage";
import { useDispatch } from "react-redux";
import { updateAuth } from "../../services/store/reducers/authReducer";

const Signup = ({ navigation }) => {
  const signUpData = useRef({
    firstName: "",
    contact: "",
    otp: "",
    countryId: "12",
    dob: "",
    email: "",
    gender: "",
    lastName: "",
    profilePic: "string",
    stateId: "12",
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
      defaultValue: signUpData.current.countryId,
      type: UTILS.INPUT_TYPE.DROPDOWN,
    },
    {
      label: "State",
      key: "stateId",
      defaultValue: signUpData.current.stateId,
      type: UTILS.INPUT_TYPE.DROPDOWN,
    },
    {
      key: "contact",
      defaultValue: signUpData.current.phoneNo,
      type: UTILS.INPUT_TYPE.REGISTER_CONTACT_INPUT,
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
              onChangeText={(e) => (signUpData.current[item.key] = e)}
              onDropdownSelect={(e) => (signUpData.current[item.key] = e.value)}
              onDateSelect={(e) => (signUpData.current[item.key] = e)}
              onOtpInput={(e) => (signUpData.current.otp = e)}
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

export default Signup;

const handleEditProfilePic = () => {};

function useSignUp(body) {
const dispatch = useDispatch();

  const { request } = useApi({
    onSuccess: (e) => {
      save(userDetail, e.data);
      dispatch(updateAuth(e));
    },
    onFail: (e) => console.log(e, "fail"),
  });

  async function handleSignUp() {
    // console.log(body, "iiiiii");

    const requestConfig = {
      endpoint: AUTH_ENDPOINTS.REGISTER_USER,
      body: { ...body, role: "PLAYER" },
    };
    await request(requestConfig);
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
    backgroundColor: UTILS.COLORS.gray1,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: -90,
    marginRight: 20,
  },
});
