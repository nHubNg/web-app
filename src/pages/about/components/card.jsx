const Card = ({image, heading, description, twitter, instagram, linkedIn}) => {
  return (
    <>
      <img
        className="staff"
        src={image}
        alt="Generic placeholder"
        width="240"
        height="240"
      />
      <h5 className="mt-4">{heading}</h5>
      <p>{description}</p>
      <nav className="nav nav-mastfoot justify-content-center">
        <a className="nav-link" href={twitter}>
          <i className="fab fa-twitter"></i>
        </a>
        <a className="nav-link" href={instagram}>
          <i className="fab fa-instagram"></i>
        </a>
        <a className="nav-link" href={linkedIn}>
          <i className="fab fa-linkedin"></i>
        </a>
      </nav>
    </>
  );
};

export default Card;
