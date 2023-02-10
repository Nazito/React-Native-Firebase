import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthPrivider";

export const useAuth = () => useContext(AuthContext);
