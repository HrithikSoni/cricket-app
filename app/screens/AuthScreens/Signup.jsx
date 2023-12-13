import React, { useRef } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";

import Button from "../../components/button/Button";
import ComponentHandler from "../../components/inputs/ComponentHandler";
import { CameraIcon } from "../../components/others/Icons";
import AppText from "../../components/text/AppText";
import ParentWrapperWithBG from "../../components/wrappers/ParentWrapperWithBG";
import permanentStorage from "../../services/store/permanentStorage";
// import { updateAuth } from "../../services/store/reducers/authReducer";
import UTILS from "../../utils";

const Signup = ({ navigation }) => {
  const signUpData = useRef({
    profilePic: "string",
  });

  const { handleSignUp } = useSignUp(signUpData.current);

  return (
    <ScrollView>
      <ParentWrapperWithBG
        title={"Create account"}
        description={"Please Enter Your details and create your account"}
        navigation={navigation}
      >
        <View style={styles.container}>
          <View style={styles.profilePicCon}>
            <TouchableOpacity onPress={handleEditProfilePic}>
              <View style={styles.userDp}>
                <CameraIcon />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleEditProfilePic}>
              <AppText style={styles.text}>Set profile picture</AppText>
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
              onLocationSelect={(e) => (
                (signUpData.current.countryId = e.countryId),
                (signUpData.current.stateId = e.stateId)
              )}
              onDateTimeSelect={(e) => {
                signUpData.current[item.key] = e;
              }}
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
      permanentStorage.saveDetails(permanentStorage.userDetail, e);
      dispatch(updateAuth(e));
    },
    onFail: (e) => {},
  });

  async function handleSignUp() {
    const requestConfig = {
      endpoint: AUTH_ENDPOINTS.REGISTER_USER,
      body,
    };
    await request(requestConfig);
    console.log(body, "oooooooooo");
  }

  return {
    handleSignUp,
  };
}

const form = [
  {
    label: "First Name",
    key: "firstName",
  },
  {
    label: "Last Name",
    key: "lastName",
  },
  {
    label: "Email",
    key: "email",
  },
  {
    label: "Gender",
    key: "gender",
    type: UTILS.INPUT_TYPE.DROPDOWN,
    data: [
      { label: "Male", value: "MALE" },
      { label: "Female", value: "FEMALE" },
      { label: "Other", value: "OTHER" },
    ],
    header: "Select Gender",
  },
  {
    label: "Date Of Birth",
    key: "dob",
    type: UTILS.INPUT_TYPE.DATE_PICKER,
    mode: "date",
  },
  {
    label: "Role",
    key: "role",
    type: UTILS.INPUT_TYPE.DROPDOWN,
    data: [
      { label: "Player", value: "PLAYER" },
      { label: "Admin", value: "ADMIN" },
      { label: "User", value: "USER" },
      { label: "Umpire", value: "UMPIRE" },
      { label: "Referee", value: "REFEREE" },
    ],
    header: "Select A Role",
  },
  {
    type: UTILS.INPUT_TYPE.LOCATION_PICKER,
  },
  {
    key: "contact",
    type: UTILS.INPUT_TYPE.REGISTER_CONTACT_INPUT,
    isVerify: true,
  },
];

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  profilePicCon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
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
    marginRight: 20,
  },
  text: { fontSize: 17, fontWeight: "500" },
});
