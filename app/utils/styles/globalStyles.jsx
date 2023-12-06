import colors from "../styles/colors";

const commonStyle = {
  height: 55,
  backgroundColor: colors.gray1,
  paddingHorizontal: 20,
  fontSize: 17,
  borderRadius: 20,
  borderWidth: 0,
  marginTop: 10,
  width: "100%",
};

export const commonTextStyle = {
  fontSize: 17,
  lineHeight: 24,
  fontWeight: "700",
};

export const commonTextStyleNormal = {
  fontSize: 17,
  lineHeight: 24,
};

const center = {
  alignItems: "center",
  justifyContent: "center",
};

const rowCenter = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
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

const border = {
  borderWidth: 1,
  borderColor: colors.border1,
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
  border,
};

export default STYLES;
