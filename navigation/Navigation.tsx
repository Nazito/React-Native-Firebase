import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";

import { FC, useEffect, useState } from "react";

import { useAuth } from "../hooks/useAuth";
import { Auth } from "../screens/auth/Auth";
import { Articles } from "../screens/articles/Articles";
import { FullArticle } from "../screens/articles/FullArticle";
import { Home } from "../screens/home/Home";
import { Services } from "../screens/services/Services";
import { Support } from "../screens/support/Support";
import { More } from "../screens/more/More";
import { Profile } from "../screens/profile/Profile";
import { Footer } from "../components/layout/footer/Footer";
import { Paymants } from "../screens/paymants/Paymants";
import { AlertBox } from "react-native-alertbox";

const Stack = createNativeStackNavigator();

export const Navigation: FC = () => {
  const { user } = useAuth();

  const ref = useNavigationContainerRef();

  const [name, setName] = useState<string | undefined>(undefined);

  useEffect(() => {
    const timeout = setTimeout(() => setName(ref?.getCurrentRoute()?.name), 0);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const listener = ref.addListener("state", () =>
      setName(ref?.getCurrentRoute()?.name)
    );
    return () => {
      ref.removeListener("state", listener);
    };
  }, []);

  return (
    <>
      <NavigationContainer ref={ref}>
        <Stack.Navigator>
          {user ? (
            <>
              <Stack.Screen
                name="Home"
                component={Home}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="Articles"
                component={Articles}
                options={{ title: "Articles" }}
              />
              <Stack.Screen
                name="FullArticle"
                component={FullArticle}
                options={{ title: "Article" }}
              />
              <Stack.Screen
                name="Services"
                component={Services}
                // options={{ title: "Services" }}
              />
              <Stack.Screen
                name="Support"
                component={Support}
                // options={{ title: "Support" }}
              />
              <Stack.Screen
                name="More"
                component={More}
                // options={{ title: "More" }}
              />
              <Stack.Screen
                name="Profile"
                component={Profile}
                // options={{ title: "Profile" }}
              />
              <Stack.Screen
                name="Paymants"
                component={Paymants}
                // options={{ title: "Profile" }}
              />
            </>
          ) : (
            <Stack.Screen
              name="Auth"
              component={Auth}
              options={{
                headerShown: false,
              }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
      {user && name && <Footer navigate={ref.navigate} currentRoute={name} />}
      <AlertBox />
    </>
  );
};
