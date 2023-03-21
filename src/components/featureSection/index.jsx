const FeatureSection = () => {
  return (
    <>
      <section
        id="cta"
        className="bg-fixed overlay"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/nhubnacademy/image/upload/q_auto:eco/v1678915471/nhubNigeria/internshipp_lf5myn.jpg)`,
        }}
      >
        <div className="container">
          <div className="section-content" data-aos="fade-up">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2 className="mb-2">nHub FOUNDATION</h2>
                <p>Visit nHub foundation by clicking the button below.</p>
                <a
                  className="btn btn-outline-primary btn-lg"
                  href="https://nhubfoundation.org/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textTransform: 'none' }}
                >
                  nHub FOUNDATION
                </a>

                <h2 className="mb-2 mt-5">Internship Program</h2>
                <p>
                  Students seeking to participate in the internship program of
                  nHub Foundation can click the button below to apply.
                </p>
                <a
                  className="btn btn-outline-primary btn-lg"
                  href="https://nhubinternship.onrender.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  APPLY FOR INTERNSHIP
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureSection;
