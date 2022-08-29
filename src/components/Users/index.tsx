import { EnvelopeSimple, Star, Users } from "phosphor-react";
import { UserContainer } from "./styles";

type ProfilesProps = {
  dataProfiles: {
    avatar_url: string;
    name: string;
    login: string;
    bio: string;
    blog: string;
    username: string;
    email: string;
    location: string;
    following: number;
    followers: number;
    public_gists: number;
    html_url: string;
  };
};

export const UserProfile = ({ dataProfiles }: ProfilesProps) => {
  console.log(dataProfiles);

  return (
    <UserContainer>
      <img src={dataProfiles.avatar_url} alt="Imagem " />
      <article>
        <h2>{dataProfiles.name}</h2>
        <h4>{dataProfiles.login}</h4>
        <button>
          {" "}
          <a href={dataProfiles.html_url} target="_blank">Follow</a>
          
        </button>
        {dataProfiles.username && <h5>@{dataProfiles.username}</h5>}
        <h5>{dataProfiles.email}</h5>
        {/*   <h5>{dataProfiles.location}</h5> */}
        <div>
          <Users size={20} weight="thin" />
          <p>
            <b>{dataProfiles.following}</b>
            following
          </p>
          <p>
            <b>{dataProfiles.followers}</b>
            followers
          </p>

          <Star size={20} weight="thin" />
          <p>{dataProfiles.public_gists}</p>
        </div>
        {dataProfiles.email && (
          <>
            <EnvelopeSimple size={20} weight="thin" />
            <p>{dataProfiles.email}</p>
          </>
        )}
      </article>
    </UserContainer>
  );
};
