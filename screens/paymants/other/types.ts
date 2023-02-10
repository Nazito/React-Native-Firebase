import { IFooterItems } from "./../../../components/layout/footer/types";
export interface IOtherItem extends Pick<IFooterItems, "iconName"> {
  title: string;
}
