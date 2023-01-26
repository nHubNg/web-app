const Card = (props) => {
  return (
    <>
      <img
        className="rounded-circle"
        src={props.image}
        alt="Generic placeholder"
        width="140"
        height="140"
      />
      <h5 className="mb-4">{props.heading}</h5>
      <p>{props.description}</p>
      <p>
        <a className="btn btn-link" href="/" role="button">
          View details
        </a>
      </p>
    </>
  );
};

export default Card;
