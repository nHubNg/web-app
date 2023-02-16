import FeatureSection from '../../components/featureSection';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Works from './components/works';
import blogImage1 from '../../img/blog-1.jpg';
import blogImage2 from '../../img/blog-2.jpg';
import blogImage3 from '../../img/blog-3.jpg';
import blogImage4 from '../../img/blog-4.jpg';
// import Team from "./components/team";

const OurCourses = () => {
  return (
    <>
      <Header name="Our Courses" />

      <section id="blog" className="bg-grey">
        <div className="container">
          <div className="section-content">
            <div className="title-wrap mb-5" data-aos="fade-up">
              <h2 className="section-title">
                NHUB <b>offers</b>
              </h2>
              <p className="section-sub-title">
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et.
              </p>
            </div>
            <div className="row">
              {/* <!-- Blog --> */}
              <div className="col-md-12 blog-holder">
                <div className="row">
                  <Works
                    title="FRONTEND DEVELOPMENT"
                    image={blogImage1}
                    name="WEB DEVELOPMENT"
                    description="A complete guide to frontend web application
development technologies and their
practical usage."
                  />
                  <Works
                    title="BACKEND DEVELOPMENT"
                    image={blogImage2}
                    name="WEB DEVELOPMENT"
                    description="Learn how to develop the persistent layer of
any application using popular backends
technologies."
                  />
                  <Works
                    title="UI/UX"
                    image={blogImage3}
                    name="PRODUCT DESIGN"
                    description="An in-depth course on graphics, User
Interface and Experience design and product design."
                  />
                  <Works
                    title="EMBEDDED SYSTEMS (ARDUINO)"
                    image={blogImage2}
                    name="IOT"
                    description="Learn a system of interrelated computing
devices, mechanical and digital machines,
objects, animals or people that are provided.."
                  />
                  <Works
                    title="DATA ANALYSIS"
                    image={blogImage3}
                    name="DATA SCIENCE"
                    description="Learn data management, visualization,
analysis. And learn how to inspect, clean, transform, and
model data for useful information
extrapolation"
                  />
                  <Works
                    title="VR/AR"
                    image={blogImage3}
                    name="VIRTUAL REALITY"
                    description="A guide on 3D development with blender,
with an introduction to unity engine."
                  />
                  <Works
                    title="NETWORKING FUNDAMENTALS
& WIRELESS NETWORKING"
                    image={blogImage3}
                    name="NETWORKING"
                    description="Connecting two or more computers with
purpose to share data or technical
support."
                  />
                  <Works
                    title="CYBER SECURITY"
                    image={blogImage3}
                    name="INTERNET SECURITY"
                    description="Learn the computer security or information
technology security."
                  />
                  <Works
                    title="DIGITAL MARKETING"
                    image={blogImage3}
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

      <section id="single-content" className="bg-white">
        <div className="container">
          <div className="section-content blog-content">
            <div className="row">
              {/* <!-- Single Content Holder --> */}
              <div className="col-md-8 offset-md-2 mt-4">
                <h4>Lorem ipsum dolor sit amet</h4>
                <img
                  className="float-left"
                  width="320px"
                  src={blogImage4}
                  alt=""
                />
                <p>
                  Consectetur adipisicing elit. Sint, corrupti deleniti, rem
                  mollitia quam cum quo, animi ipsa praesentium officiis
                  ducimus! Modi aperiam, nulla ipsum, totam natus consequuntur
                  fugiat blanditiis.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
                  harum, ut magni cupiditate. Nihil ipsum debitis voluptates
                  voluptate illum consectetur sapiente dolorem facilis, eum
                  nobis sequi eveniet assumenda vel voluptatem!
                </p>
                <p>
                  Consectetur adipisicing elit. Sint, corrupti deleniti, rem
                  mollitia quam cum quo, animi ipsa praesentium officiis
                  ducimus! Modi aperiam, nulla ipsum, totam natus consequuntur
                  fugiat blanditiis.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
                  harum, ut magni cupiditate. Nihil ipsum debitis voluptates
                  voluptate illum consectetur sapiente dolorem facilis, eum
                  nobis sequi eveniet assumenda vel voluptatem!
                </p>
              </div>
              {/* <!-- End of Contact Form Holder --> */}
            </div>
          </div>
        </div>
      </section>

      {/* <Team image='blogImage4'/> */}

      <section id="contact-form" className="bg-white">
        <div className="container">
          <div className="section-content pt-0">
            <div className="title-wrap" data-aos="fade-up">
              <h2 className="section-title">Where To Find Us?</h2>
            </div>
            <div className="row text-center mt-4">
              <div className="col-md-3" data-aos="fade-up">
                <span className="lnr lnr-location fs-40 py-4 d-block"></span>
                <h5>LOCATION</h5>
                <p>Jos, Plateau State</p>
              </div>
              <div className="col-md-3" data-aos="fade-up" data-aos-delay="200">
                <span className="lnr lnr-clock fs-40 py-4 d-block"></span>
                <h5>WORKING TIME</h5>
                <p>Monday - Saturday</p>
              </div>
              <div className="col-md-3" data-aos="fade-up" data-aos-delay="400">
                <span className="lnr lnr-phone fs-40 py-4 d-block"></span>
                <h5>CALL US</h5>
                <p>123-45678</p>
              </div>
              <div className="col-md-3" data-aos="fade-up" data-aos-delay="600">
                <span className="lnr lnr-phone fs-40 py-4 d-block"></span>
                <h5>EMAIL</h5>
                <p>company@gmail.com</p>
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
