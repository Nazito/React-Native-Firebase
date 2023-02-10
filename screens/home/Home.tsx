import { useNavigation } from "@react-navigation/native";
import { FC } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Button } from "../../components/ui/Button";
import { Container } from "../../components/ui/Container";
import { useAuth } from "../../hooks/useAuth";
import { ArticlesHorizontal } from "../articles/ArticlesHorizontal";
import { Accounts } from "./accounts/Accounts";
import { ApplyNewProducts } from "./apply-new-products/ApplyNewProducts";
import { Header } from "./Header";

export const Home: FC = () => {
  const { logout } = useAuth();
  return (
    <SafeAreaView style={{ paddingTop: 40, paddingBottom: 40 }}>
      <ScrollView>
        <Header />
        <ArticlesHorizontal />
        <Container>
          <Accounts />
          <ApplyNewProducts />
          <Button onPress={logout} title="Logout" />
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};
