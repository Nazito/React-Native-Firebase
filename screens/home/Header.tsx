import { useNavigation } from "@react-navigation/native";
import { FC } from "react";
import { Text, TouchableOpacity } from "react-native";
import { Avatar } from "../../components/ui/Avatar";
import { Container } from "../../components/ui/Container";
import { Entypo } from "@expo/vector-icons";
import { useProfile } from "../profile/useProfile";
import { Loader } from "../../components/Loader";

export const Header: FC = () => {
  const { isLoading, name } = useProfile();

  const { navigate } = useNavigation();
  return isLoading ? (
    <Loader />
  ) : (
    <Container style={{ flexDirection: "row", alignItems: "center" }}>
      <Avatar name={name} />
      <TouchableOpacity
        onPress={() => navigate("Profile")}
        style={{ flexDirection: "row", alignItems: "center", marginLeft: 10 }}
      >
        <Text style={{ fontSize: 16, fontWeight: "700" }}>{name}</Text>
        <Entypo
          name="chevron-small-right"
          size={28}
          style={{ color: "rgba(0,0,0, .5)" }}
        />
      </TouchableOpacity>
    </Container>
  );
};
