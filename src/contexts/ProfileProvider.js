import { createContext } from "react";
import profiles from "../store";

export const ProfileContext = createContext([]);

const ProfileProvider = ({ children }) => {
  return (
    <ProfileContext.Provider value={profiles}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
