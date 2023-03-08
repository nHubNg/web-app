import bg from '../../img/hub/internshipp.JPG';

const FeatureSection = () => {
  return (
    <>
      <section
        id="cta"
        className="bg-fixed overlay"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="container">
          <div className="section-content" data-aos="fade-up">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2 className="mb-2">Internship Program</h2>
                <p>
                  Students seeking to participate in the internship program of
                  NHUB Foundation can click the button bellow to apply.
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
