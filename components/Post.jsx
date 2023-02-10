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

const PostTitle = styled.Text`
  font-size: 18px;
  font-weight: 700;
`;

const PostDetails = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const PostDescr = styled.Text`
  font-size: 12px;
  margin-top: 2px;
`;
const PostDate = styled.Text`
  font-size: 12px;
  margin-top: 7px;
  color: rgba(0, 0, 0, 0.4);
`;

export const Post = ({ title, descr, imageUrl, createdAt }) => {
  const truncateTitle = (str) => {
    if (str?.length >= 50) {
      return str.substring(0, 50) + "...";
    }

    return str;
  };
  return (
    <PostItem>
      <PostImg
        source={{
          uri: imageUrl,
        }}
      />
      <PostDetails>
        <PostTitle>{truncateTitle(title)}</PostTitle>
        <PostDescr>{descr}</PostDescr>
        <PostDate>{new Date(createdAt).toLocaleDateString()}</PostDate>
      </PostDetails>
    </PostItem>
  );
};
