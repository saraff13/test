import { Dimensions } from "react-native";

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

export const responsiveWidth = p => {
    return w*p/100;
};

export const responsiveHeight = p => {
    return h*p/100;
};