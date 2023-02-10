import { FC } from "react";
import styled from "styled-components/native";

const PostItem = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`;
const PostImg = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 12px;
  margin-right: 12px;
`;

export const PostPreview: FC<{ imageUrl: string }> = ({ imageUrl }) => {
  return (
    <PostItem>
      <PostImg
        source={{
          uri: imageUrl,
        }}
      />
    </PostItem>
  );
};
