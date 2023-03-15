import IndividualSection from './individualSection';

const SectionCard = () => {
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
                  <i className="lnr lnr-sun fs-40"></i>
                </div>
                <IndividualSection
                  heading="Sevo Coder"
                  paragraph="Sevo Coder is a program aimed at training kids in primary and secondary schools on Software Development, Digital skills and Entrepreneurship."
                />
              </div>
              <div
                className="shadow rounded feature-item p-4 mb-4"
                data-aos="fade-up"
              >
                <div className="my-4">
                  <i className="lnr lnr-hourglass fs-40"></i>
                </div>
                <IndividualSection
                  heading="Incubation And Entrepreneur ship"
                  paragraph="We train, and develop business concepts as well Startups to take their product development to the highest level."
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
                  <i className="lnr lnr-location fs-40"></i>
                </div>
                <IndividualSection
                  heading="Next Economy"
                  paragraph="An Intervention program which has seen over 1000 young Nigerians trained for free, gainfully employed."
                />
              </div>

              <div
                className="shadow rounded feature-item p-4 mb-4"
                data-aos="fade-up"
              >
                <div className="my-4">
                  <i className="lnr lnr-home fs-40"></i>
                </div>
                <IndividualSection
                  heading="Co-working Space"
                  paragraph="We offer free internet services, constant power supply and backup power supply to our clients so as to ensure a seamless and satisfactory experience."
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
                  <i className="lnr lnr-rocket fs-40"></i>
                </div>
                <IndividualSection
                  heading="Innovation and Start Up Support"
                  paragraph="Empowering start-ups with digital, technical and entrepreneurship skills that will enable them grow and sustain their businesses."
                />
              </div>

              <div
                className="shadow rounded feature-item p-4 mb-4"
                data-aos="fade-up"
              >
                <div className="my-4">
                  <i className="lnr lnr-diamond fs-40"></i>
                </div>
                <IndividualSection
                  heading="Private Mentorship and Training"
                  paragraph="We have various curriculum with matching professionals, aimed to equip our students with practical skills in the emerging technology"
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
