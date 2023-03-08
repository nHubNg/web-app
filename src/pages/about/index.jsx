import Footer from '../../components/footer';
import Header from '../../components/header';
import Card from './components/card';
import cover from '../../img/hub/cover.jpg';
// import checkmark from '../../img/icons/animat-checkmark.gif';
// import customize from '../../img/icons/animat-customize.gif';
// import responsive from '../../img/icons/animat-responsive.gif';
import FeatureSection from '../../components/featureSection';
import AOS from 'aos';
import { useEffect } from 'react';
import bg from '../../img/hub/courses.JPG';

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header name="About Our Organization" bg={bg} />
      <section id="who-we-are" className="bg-white">
        <div className="container">
          <div className="section-content">
            <div className="title-wrap" data-aos="fade-up">
              <h2 className="section-title">
                NHUB NIGERIA STARTUP INNOVATION COMMUNITY
              </h2>
              <p className="section-sub-title">
                nHub plays a leadership role in nurturing dialogue,
                disseminating knowledge, and re-wiring the ecosystem through
                different community-based efforts that are geared towards
                building a generation of new entrepreneurs, software developers,
                and an army of skilled and employable young people matching
                industry needs in priority sectors. We believe technology is a
                catalyst for growth and that client satisfaction is driven by
                the best and timely services. We are focused on empowering
                entrepreneurs on their journey to build great ideas out of
                little or nothing, we work with Start-ups at every stage of
                maturity to provide the tools, resources, knowledge and
                expertise they need to succeed. We help Start-ups scale their
                businesses, bring innovative services to the market and reach
                new customers through our connections. Our work spans from
                conceiving ideas, trainings, incubation, collaboration and
                creation of services.
              </p>
            </div>

            <section id="skills" className="bg-white">
              <div className="about-staff">
                <h3>MEET OUR STAFF</h3>
                <p className="section-sub-title">
                  With our diverse collection of technology tracks, we have an
                  amazing teams of developers mentors and instructors to match
                  each
                </p>
              </div>
            </section>
            <div className="row text-center">
              <div className="col-md-4 col-sm-6 mt-4" data-aos="fade-up">
                <Card
                  image={cover}
                  heading="Osofia"
                  description="CEO"
                  twitter=""
                  instagram=""
                  linkedIn=""
                />
              </div>
              {/* <!-- /.col-md-4 col-sm-6  --> */}
              <div
                className="col-md-4 col-sm-6 mt-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <Card
                  image={cover}
                  heading="TuPac"
                  description="Administrator"
                  twitter=""
                  instagram=""
                  linkedIn=""
                />
              </div>
              {/* <!-- /.col-md-4 col-sm-6 mt-4  --> */}
              <div
                className="col-md-4 col-sm-6 mt-4"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <Card
                  image={cover}
                  heading="Sodiqi"
                  description="Manager"
                  twitter=""
                  instagram=""
                  linkedIn=""
                />
              </div>
              <div
                className="col-md-4 col-sm-6 mt-4"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <Card
                  image={cover}
                  heading="Sodiqi"
                  description="Manager"
                  twitter=""
                  instagram=""
                  linkedIn=""
                />
              </div>
              <div
                className="col-md-4 col-sm-6 mt-4"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <Card
                  image={cover}
                  heading="Sodiqi"
                  description="Manager"
                  twitter=""
                  instagram=""
                  linkedIn=""
                />
              </div>
              <div
                className="col-md-4 col-sm-6 mt-4"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <Card
                  image={cover}
                  heading="Sodiqi"
                  description="Manager"
                  twitter=""
                  instagram=""
                  linkedIn=""
                />
              </div>
              {/* <!-- /.col-md-4 col-sm-6  --> */}
            </div>
            {/* <!-- /.row --> */}
          </div>
        </div>
      </section>

      <FeatureSection />
      <Footer />
    </>
  );
};
export default About;
