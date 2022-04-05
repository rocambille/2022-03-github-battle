function Card() {
  return (
    <figure>
      <img src="https://picsum.photos/300/300" alt="toto" />
      <figcaption>
        <h2>toto</h2>
        <dl>
          <dt>followers</dt>
          <dd>10000</dd>
          <dt>repos</dt>
          <dd>450</dd>
        </dl>
      </figcaption>
    </figure>
  );
}

export default Card;
