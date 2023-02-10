import { FC } from "react";
import { TypeRootStackParamList } from "../../../navigation/types";
import { Container } from "../../ui/Container";
import { menu } from "./menu";
import { NavItem } from "./NavItem";

interface IFooter {
  navigate: (screenName: keyof TypeRootStackParamList) => void;
  currentRoute?: string;
}

export const Footer: FC<IFooter> = ({ navigate, currentRoute }) => {
  return (
    <Container style={{ flexDirection: "row", padding: 10 }}>
      {menu.map((item) => (
        <NavItem
          key={item.title}
          item={item}
          navigate={navigate}
          currentRoute={currentRoute}
        />
      ))}
    </Container>
  );
};
