import FeatureSection from '../../components/featureSection';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Works from './components/works';
import frontend from '../../img/hub/frontendd.jpg';
import backend from '../../img/hub/backend.jpg';
import ui from '../../img/hub/ui.jpg';
import data from '../../img/hub/data.jpg';
import science from '../../img/hub/scienc.jpg';
import mobile from '../../img/hub/mobile.jpg';
import embedded from '../../img/hub/embedded.jpg';
import vr from '../../img/blog-2.jpg';
import networking from '../../img/hub/networking.jpg';
import marketing from '../../img/hub/marketing.jpg';
import cyber from '../../img/hub/cyber.jpg';
import bg from '../../img/hub/cover.jpg';

const OurCourses = () => {
  return (
    <>
      <Header name="Our Courses" bg={bg} />

      <section id="blog" className="bg-grey">
        <div className="container">
          <div className="section-content">
            <div className="title-wrap mb-5" data-aos="fade-up">
              <h2 className="section-title">
                nHUB <b>offers</b>
              </h2>
              <p className="section-sub-title">
                Here's a list of courses offered in nHub Nigeria
              </p>
            </div>
            <div className="row">
              {/* <!-- Blog --> */}
              <div className="col-md-12 blog-holder">
                <div className="row">
                  <Works
                    title="FRONTEND DEVELOPMENT"
                    image={frontend}
                    name="WEB DEVELOPMENT"
                    description="A complete guide to frontend web application
development technologies and their
practical usage."
                  />
                  <Works
                    title="BACKEND DEVELOPMENT"
                    image={backend}
                    name="WEB DEVELOPMENT"
                    description="Learn how to develop the persistent layer of
any application using popular backends
technologies."
                  />
                  <Works
                    title="UI/UX"
                    image={ui}
                    name="PRODUCT DESIGN"
                    description="An in-depth course on graphics, User
Interface and Experience design and product design."
                  />
                  <Works
                    title="MOBILE APP DEVELOPMENT"
                    image={mobile}
                    name="FLUTTER"
                    description="Learn how to develop mobile applications for both android and iOS devices using flutter."
                  />
                  <Works
                    title="EMBEDDED SYSTEMS (ARDUINO)"
                    image={embedded}
                    name="IOT"
                    description="Learn a system of interrelated computing
devices, mechanical and digital machines,
objects, animals or people that are provided."
                  />
                  <Works
                    title="DATA ANALYSIS"
                    image={data}
                    name="DATA"
                    description="Learn how to inspect, clean, transform, and
model data for useful information
extrapolation"
                  />
                  <Works
                    title="DATA SCIENCE"
                    image={science}
                    name="DATA"
                    description="Learn data management, visualization,
analysis."
                  />
                  <Works
                    title="VR/AR"
                    image={vr}
                    name="VIRTUAL REALITY"
                    description="A guide on 3D development with blender,
with an introduction to unity engine."
                  />
                  <Works
                    title="NETWORKING FUNDAMENTALS
& WIRELESS NETWORKING"
                    image={networking}
                    name="NETWORKING"
                    description="Connecting two or more computers with
purpose to share data or technical
support."
                  />
                  <Works
                    title="CYBER SECURITY"
                    image={cyber}
                    name="INTERNET SECURITY"
                    description="Learn the computer security or information
technology security."
                  />
                  <Works
                    title="DIGITAL MARKETING"
                    image={marketing}
                    name="MARKETING"
                    description="Together with our large partners like
Facebook and Google, we have trained
over 5,000 people."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeatureSection />
      <Footer />
    </>
  );
};

export default OurCourses;
