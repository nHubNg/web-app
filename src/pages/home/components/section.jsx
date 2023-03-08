import SectionCard from './sectionCard';

const Section = () => {
  return (
    <>
      {/* // <!-- Features Section--> */}
      <section id="features" className="bg-white">
        <div className="container">
          <div className="section-content">
            {/* <!-- Section Title --> */}
            <div className="title-wrap mb-5" data-aos="fade-up">
              <h2 className="section-title">NHUB NIGERIA</h2>
              <p className="section-sub-title">
                Highly driven by a desire to see Nigeria and Nigerians placed on
                the global spotlight of emerging technologies.
              </p>
            </div>
            {/* <!-- End of Section Title --> */}
            <div className="row">
              <SectionCard />
            </div>
            {/* <!-- End of Features Holder--> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;
