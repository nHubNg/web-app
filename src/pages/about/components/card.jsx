const Card = ({image, heading, description, twitter, instagram, linkedIn}) => {
  return (
    <>
      <div className="profile">
      <div style={{width: '100%', height: '30%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img
        className="staff"
        src={image}
        alt="Generic placeholder"
        width='100%'
        height='100%'
       
      />
      </div>
      <div className="profile-text">
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
      </div>
      </div>
    </>
  );
};

export default Card;
