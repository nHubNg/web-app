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
              <h2 className="section-title">
                A template built by{' '}
                <a
                  href="https://gettemplates.co"
                  target="_blank"
                  rel="noreferrer"
                >
                  GetTemplates.co
                </a>
              </h2>
              <p className="section-sub-title">
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. <br /> pharetra augue. Donec id elit non mi.
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
