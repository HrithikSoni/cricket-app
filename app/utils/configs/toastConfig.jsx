import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

import { TouchableOpacity } from "react-native";
import colors from "../styles/colors";

const width = 300;
const customStyles = {};
export const toastConfig = {
  success: (props) => {
    return (
      <View style={styles.messageCard}>
        {/* <Icons.CheckSuccessful /> */}
        <Text style={styles.sText1}>{props.text1}</Text>
        <Text style={styles.sText2}>{props.text2}</Text>
      </View>
    );
  },

  alert: ({ props }) => {
    return (
      <View style={[styles.alertMessageCard]}>
        <Text style={styles.alertHeading}>
          Are you sure you want to delete this record?
        </Text>
        <Text style={styles.alertMessage}>
          This will delete this post permanently. You can not undo this action.
        </Text>
        <View
          style={[
            // customStyles.flex_row_between,
            styles.btnContainer,
          ]}
        >
          <TouchableOpacity
            style={styles.alertBtnCancel}
            onPress={props.onCancel}
          >
            <Text> Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.alertBtnDelete}
            onPress={props.onConfirm}
          >
            <Text style={{ color: "white" }}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  },

  backAlert: ({ props }) => {
    return (
      <View style={[styles.alertMessageCard]}>
        <Text style={styles.alertHeading}>Are you sure?</Text>
        <Text style={styles.alertMessage}>
          Changes that you have made are not saved yet.
        </Text>
        <View
          style={[
            // customStyles.flex_row_between,
            styles.btnContainer,
          ]}
        >
          <TouchableOpacity
            style={styles.alertBtnCancel}
            onPress={props.onConfirm}
          >
            <Text>Go Back</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.alertBtnDelete}
            onPress={props.onCancel}
          >
            <Text style={{ color: "white" }}>Stay</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  },

  error: (props) => {
    return (
      <View style={[styles.messageCard, { borderLeftColor: colors.cancelRed }]}>
        {/* <Icons.Failed /> */}
        <Text style={styles.sText1}>{props.text1}</Text>
        <Text style={styles.sText2}>{props.text2}</Text>
      </View>
    );
  },

  loading: () => (
    <View style={styles.loader}>
      <Text>Loading...</Text>
      <ActivityIndicator size={"large"} />
    </View>
  ),
};

const styles = StyleSheet.create({
  alertBtnCancel: {
    width: 100,
    height: 30,

    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderRadius: 5,
    color: "white",
    borderWidth: 1,
    borderColor: "black",
  },
  alertBtnDelete: {
    width: 100,
    height: 30,
    backgroundColor: colors.red,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderRadius: 5,
    color: "white",
  },
  loader: {
    height: 500,
    width,
    backgroundColor: colors.translucent,
    justifyContent: "center",
    alignItems: "center",
  },
  text1: {
    fontSize: 17,
  },
  text2: {
    fontSize: 15,
  },
  alertHeading: {
    marginVertical: 10,
    fontSize: 18,
    fontWeight: "800",
  },
  alertMessage: { color: colors.gray2 },
  sText1: {
    marginVertical: 10,
    fontSize: 20,
    fontWeight: "600",
  },
  sText2: {
    fontSize: 14,
    fontWeight: "400",
    color: colors.gray2,
  },
  messageCard: {
    width: width - 100,
    height: 200,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    borderLeftColor: colors.green1,
    borderLeftWidth: 5,
    // ...customStyles.elevation,
  },

  alertMessageCard: {
    paddingHorizontal: 20,
    width: width - 50,
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    borderLeftColor: colors.red,
    borderLeftWidth: 5,
    // ...customStyles.elevation,
  },
  btnContainer: {
    marginVertical: 20,
    flex: 1,
    paddingHorizontal: 10,
  },
});
