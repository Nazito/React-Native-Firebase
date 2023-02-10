import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import axios from "axios";
import { Loader } from "../../components/Loader";

const PostImg = styled.Image`
  width: 100%;
  height: 250px;
  border-radius: 10px;
`;

export const FullArticle = ({ route, navigation }) => {
  const [loading, setLoading] = useState(true);
  const [article, setArticle] = useState();
  const { id, title } = route.params;

  const fetchArticle = () => {
    navigation.setOptions({ title });
    setLoading(true);
    axios
      .get(`https://630374ca0de3cd918b361042.mockapi.io/articles/${id}`)
      .then(({ data }) => {
        setArticle(data);
      })
      .catch((err) => {
        Alert.alert("Error", "article not found");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(fetchArticle, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <View style={{ padding: 15 }}>
      <PostImg
        source={{
          uri: article.imageUrl,
        }}
      />
      <Text style={{ marginTop: 15 }}>{article.text}</Text>
    </View>
  );
};
