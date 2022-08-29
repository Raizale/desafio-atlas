import axios from "axios";
import { MagnifyingGlass } from "phosphor-react";
import { createContext, FormEvent, useContext, useState } from "react";
import { BASE_URL } from "../../constants/url";
import { HomeContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { UserContextData } from "../../contexts/userContext";

export const Home = () => {
  const navigate = useNavigate();

  const { setDataProfiles } = useContext(UserContextData);

  const [username, setUsername] = useState("");
  const [emptyInput, setEmptyInput] = useState(false);
  const [invalidUser, setInvalidUser] = useState(false);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    axios
      .get(`${BASE_URL}/${username}`)
      .then((response) => {
        setUsername(response.data.login);
        setDataProfiles(response.data);
        navigate(`/profile/${username}`);
        setUsername("");
      })
      .catch((error) => {
        notFoundUser();
      });
  }

  const verifyInput = () => {
    if (username === "") {
      setInvalidUser(false);
      return setEmptyInput(true);
    }
  };

  const notFoundUser = () => {
    setUsername("");
    setInvalidUser(true);
  };

  return (
    <HomeContainer>
      <p>Buscar Repositório no github</p>
      <form onSubmit={handleSubmit}>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="digite o nome do usuário"
        />
        <button type="submit" onClick={verifyInput}>
          <MagnifyingGlass size={16} weight="thin" />
          Buscar
        </button>
      </form>
      {emptyInput && (
        <h4>
          Informe um nome de usuário válido do github
        </h4>
      )}
      {invalidUser && (
        <h4>
          Usuário não encontrado no github. Verifique se você digitou o nome
          corretamente
        </h4>
      )}
    </HomeContainer>
  );
};
