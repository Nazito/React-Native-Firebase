import { FC } from "react";
import { FlatList, Text, View } from "react-native";
import { Layout } from "../../components/layout/Layout";
import { services } from "./data";
import { ServiceItem } from "./item/ServiceItem";

export const Services: FC = () => {
  return (
    <Layout>
      <FlatList
        columnWrapperStyle={{
          minWidth: "100%",
        }}
        numColumns={4}
        data={services}
        renderItem={({ item }) => {
          return <ServiceItem service={item} />;
        }}
      />
    </Layout>
  );
};
