import colors from "../styles/colors";

const commonStyle = {
  height: 55,
  backgroundColor: colors.gray1,
  paddingHorizontal: 15,
  fontSize: 17,
  borderRadius: 20,
  borderWidth: 0,
  marginTop: 15,
};

export const commonTextStyle = {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: "700"
}

export const commonTextStyleNormal = {
  fontSize: 17,
  lineHeight: 24
}

const center ={
  alignItems: "center",
  justifyContent: "center",
}

const rowCenter = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "ceter",
};

const rowSpaceBtw = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
};

const squareBtn = {
  height: 60,
  width: 60,
  borderRadius: 16,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: colors.themeColor,
};

const elevation = {
  shadowColor: "#000",
  shadowOffset: { width: 1, height: 3 },
  shadowOpacity: 0.1,
  shadowRadius: 2,
  elevation: 2,
  alignSelf: "stretch",
};

const STYLES = {
  commonStyle,
  commonTextStyle,
  commonTextStyleNormal,
  center,
  rowCenter,
  rowSpaceBtw,
  squareBtn,
  elevation,
};

export default STYLES;
