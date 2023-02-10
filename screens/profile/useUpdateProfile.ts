import { useAuth } from "./../../hooks/useAuth";
import { useEffect, useMemo, useState } from "react";
import {
  collection,
  doc,
  limit,
  onSnapshot,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../firebase";
import { Alert } from "react-native";

export interface IProfile {
  _id: string;
  displayName: string;
  docId: string;
}

export const useUpdateProfile = (name: string, docId: string) => {
  const { user } = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const updateProfile = async () => {
    setIsLoading(true);

    if (!user) return;
    try {
      const docRef = doc(db, "users", docId);

      await updateDoc(docRef, { displayName: name });

      setIsSuccess(true);

      setTimeout(() => {
        setIsLoading(false);
        setIsSuccess(false);
      }, 3000);
    } catch (e: any) {
      Alert.alert("Error update profile", e.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, updateProfile, isSuccess };
};
