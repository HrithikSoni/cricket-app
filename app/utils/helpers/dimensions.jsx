import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const mainHorizontalPadding = 10;

const componentWidth = width - mainHorizontalPadding * 2;

const DIMENSIONS = { height, width, mainHorizontalPadding, componentWidth };

export default DIMENSIONS;
