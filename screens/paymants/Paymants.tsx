import { FC } from "react";
import { Text } from "react-native";
import { Layout } from "../../components/layout/Layout";
import { Container } from "../../components/ui/Container";
import { Contacts } from "./contacts/Contacts";
import { Other } from "./other/Other";

export const Paymants: FC = () => {
  return (
    <Layout>
      <Contacts />
      <Other />
    </Layout>
  );
};
