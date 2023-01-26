import IndividualSection from './individualSection';

const SectionCard = ({ heading, paragraph }) => {
  return (
    <div>
      <div className="row">
        {/* <!-- Features Holder--> */}
        <div className="col-md-10 offset-md-1 features-holder">
          <div className="row">
            {/* <!-- Features Item --> */}
            <div className="col-md-4 col-sm-12 text-center mt-4">
              <div
                className="shadow rounded feature-item p-4 mb-4"
                data-aos="fade-up"
              >
                <div className="my-4">
                  <i className="lnr lnr-cog fs-40"></i>
                </div>
                <IndividualSection
                  heading="Easy to Customize"
                  paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod."
                />
              </div>
              <div
                className="shadow rounded feature-item p-4 mb-4"
                data-aos="fade-up"
              >
                <div className="my-4">
                  <i className="lnr lnr-frame-contract fs-40"></i>
                </div>
                <IndividualSection
                  heading="Pixel Perfect"
                  paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod."
                />
              </div>
            </div>
            {/* <!-- End of Feature Item --> */}
            {/* <!-- Features Item --> */}
            <div className="col-md-4 col-sm-12 text-center">
              <div
                className="shadow rounded feature-item p-4 mb-4"
                data-aos="fade-up"
              >
                <div className="my-4">
                  <i className="lnr lnr-bubble fs-40"></i>
                </div>
                <IndividualSection
                  heading="Full Support"
                  paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod."
                />
              </div>

              <div
                className="shadow rounded feature-item p-4 mb-4"
                data-aos="fade-up"
              >
                <div className="my-4">
                  <i className="lnr lnr-magic-wand fs-40"></i>
                </div>
                <IndividualSection
                  heading="Clean Design"
                  paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod."
                />
              </div>
            </div>
            {/* <!-- End of Feature Item --> */}
            {/* <!-- Features Item --> */}
            <div className="col-md-4 col-sm-12 text-center mt-4">
              <div
                className="shadow rounded feature-item p-4 mb-4"
                data-aos="fade-up"
              >
                <div className="my-4">
                  <i className="lnr lnr-clock fs-40"></i>
                </div>
                <IndividualSection
                  heading="Ontime Project"
                  paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod."
                />
              </div>

              <div
                className="shadow rounded feature-item p-4 mb-4"
                data-aos="fade-up"
              >
                <div className="my-4">
                  <i className="lnr lnr-thumbs-up fs-40"></i>
                </div>
                <IndividualSection
                  heading="Built with SASS"
                  paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod."
                />
              </div>
            </div>
            {/* <!-- End of Feature Item --> */}
          </div>
        </div>
        {/* <!-- End of Features Holder--> */}
      </div>
    </div>
  );
};

export default SectionCard;
