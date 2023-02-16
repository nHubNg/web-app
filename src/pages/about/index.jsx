import Footer from '../../components/footer';
import Header from '../../components/header';
import Card from './components/card';
import checkmark from '../../img/icons/animat-checkmark.gif';
import customize from '../../img/icons/animat-customize.gif';
import responsive from '../../img/icons/animat-responsive.gif';
import FeatureSection from '../../components/featureSection';
import AOS from 'aos';
import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header name="About Our Organization" />
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

            <div className="row text-center">
              <div className="col-md-4 col-sm-6" data-aos="fade-up">
                <Card
                  image={checkmark}
                  heading="Simple and Clean"
                  description="Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit."
                />
              </div>
              {/* <!-- /.col-md-4 col-sm-6  --> */}
              <div
                className="col-md-4 col-sm-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <Card
                  image={customize}
                  heading="Easy to Customize"
                  description="Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Vestibulum id ligula porta felis."
                />
              </div>
              {/* <!-- /.col-md-4 col-sm-6  --> */}
              <div
                className="col-md-4 col-sm-6"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <Card
                  image={responsive}
                  heading="Fully Responsive"
                  description="Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper."
                />
              </div>
              {/* <!-- /.col-md-4 col-sm-6  --> */}
            </div>
            {/* <!-- /.row --> */}
          </div>
        </div>
      </section>

      <section id="skills" className="bg-white">
        <div className="container">
          <div className="section-content pt-0">
            <div className="row">
              <div className="col-md-6" data-aos="fade-right">
                {/* <!-- Skill Item --> */}
                <div className="skill-item">
                  <div className="d-flex justify-content-between">
                    <p>HTML5</p>
                    <p className="text-muted">90%</p>
                  </div>
                  <div className="progress" data-percent="90%">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: 0 }}
                    ></div>
                  </div>
                </div>
                {/* <!-- End Skill Item --> */}
                {/* <!-- Skill Item --> */}
                <div className="skill-item">
                  <div className="d-flex justify-content-between">
                    <p>CSS3</p>
                    <p className="text-muted">85%</p>
                  </div>
                  <div className="progress" data-percent="85%">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: 0 }}
                    ></div>
                  </div>
                </div>
                {/* <!-- End Skill Item --> */}
                {/* <!-- Skill Item --> */}
                <div className="skill-item">
                  <div className="d-flex justify-content-between">
                    <p>JQUERY</p>
                    <p className="text-muted">73%</p>
                  </div>
                  <div className="progress" data-percent="73%">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="73"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: 0 }}
                    ></div>
                  </div>
                </div>
                {/* <!-- End Skill Item --> */}
              </div>
              <div className="col-md-6" data-aos="fade-left">
                {/* <!-- Skill Item --> */}
                <div className="skill-item">
                  <div className="d-flex justify-content-between">
                    <p>Adobe Photoshop</p>
                    <p className="text-muted">80%</p>
                  </div>
                  <div className="progress" data-percent="80%">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: 0 }}
                    ></div>
                  </div>
                </div>
                {/* <!-- End Skill Item --> */}
                {/* <!-- Skill Item --> */}
                <div className="skill-item">
                  <div className="d-flex justify-content-between">
                    <p>Adobe Illustrator</p>
                    <p className="text-muted">60%</p>
                  </div>
                  <div className="progress" data-percent="60%">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="60"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: 0 }}
                    ></div>
                  </div>
                </div>
                {/* <!-- End Skill Item --> */}
                {/* <!-- Skill Item --> */}
                <div className="skill-item">
                  <div className="d-flex justify-content-between">
                    <p>Wordpress</p>
                    <p className="text-muted">55%</p>
                  </div>
                  <div className="progress" data-percent="55%">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="55"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: 0 }}
                    ></div>
                  </div>
                </div>
                {/* <!-- End Skill Item --> */}
              </div>
            </div>
          </div>
        </div>

        <div className="about-staff">
          <h3>MEET OUR STAFF</h3>
        </div>

        <div className="about-img"></div>
      </section>
      <FeatureSection />
      <Footer />
    </>
  );
};
export default About;
