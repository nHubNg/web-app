const Card = ({
  image,
  heading,
  description,
  twitter,
  instagram,
  linkedIn,
}) => {
  return (
    <>
      <div className="profile" style={{height: '370px', width: '250px', padding: ''}}>
        <div
          style={{
            width: '100%',
            height: '60%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // background: 'red'
          }}
        >
          <img
            className="staff"
            src={image}
            alt="Generic placeholder"
            width="100%"
            height="100%"
          />
        </div>
        <div className="profile-text" style={{width: '100%',
      height: '40%'}}>
          <h5 className="mt-4">{heading}</h5>
          <p>{description}</p>
          <nav className="nav nav-mastfoot justify-content-center">
            <a
              className="nav-link"
              href={twitter}
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="nav-link"
              href={instagram}
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              className="nav-link"
              href={linkedIn}
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Card;
