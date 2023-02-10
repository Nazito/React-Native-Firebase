import {
  Alert,
  FlatList,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";
import { Loader } from "../../components/Loader";
import { Post } from "../../components/Post";

export const Articles = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState();
  const fetchArticles = () => {
    setLoading(true);
    axios
      .get("https://630374ca0de3cd918b361042.mockapi.io/articles")
      .then(({ data }) => {
        setArticles(data);
      })
      .catch((err) => {
        Alert.alert("Error", "articles not found");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(fetchArticles, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <FlatList
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={fetchArticles} />
      }
      data={articles}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("FullArticle", {
              id: item.id,
              title: item.title,
            })
          }
        >
          <Post
            createdAt={item?.createdAt}
            imageUrl={item?.imageUrl}
            title={item?.title}
            descr={item?.text}
          />
        </TouchableOpacity>
      )}
    />
  );
};
