import { useState } from "react";
import user from "../data/user";

function Card() {
  const [cardData, setCardData] = useState(null);

  return cardData == null ? (
    <>
      <input />
      <button
        type="button"
        onClick={() => {
          setCardData(user);
        }}
      >
        Va chercher
      </button>
    </>
  ) : (
    <figure>
      <img src={user.avatar_url} alt={user.login} />
      <figcaption>
        <h2>{user.login}</h2>
        <dl>
          <dt>followers</dt>
          <dd>{user.followers}</dd>
          <dt>repos</dt>
          <dd>{user.public_repos}</dd>
        </dl>
      </figcaption>
    </figure>
  );
}

export default Card;
