import { useContext } from "react";

import { Repositories } from "../../components/Repositories";
import { UserProfile } from "../../components/Users";

import { UserContextData } from "../../contexts/userContext";
import { ProfileContainer } from "./styles";

type ProfileProps = {
  dataProfiles: {};
};

export const Profile = () => {
  const { dataProfiles }: ProfileProps = useContext(UserContextData);

  return (
    <ProfileContainer>
      <UserProfile dataProfiles={dataProfiles} />
      <Repositories dataProfiles={dataProfiles}/>
    </ProfileContainer>
  );
};
