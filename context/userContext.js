import React from 'react';

export const userStoreContext = React.createContext();

const UserStoreProvider = ({children}) => {
  const [profile, setProfile] = React.useState(null);
  const userStore = {
    profile: profile,
    updateProfile: profile => setProfile(profile),
  };
  return (
    <userStoreContext.Provider value={userStore}>
      {children}
    </userStoreContext.Provider>
  );
};
export default UserStoreProvider;
