import { TypeRootStackParamList } from "../../../navigation/types";
import { AntDesign } from "@expo/vector-icons";

export interface IFooterItems {
  iconName: keyof typeof AntDesign.glyphMap;
  title: keyof TypeRootStackParamList;
}
