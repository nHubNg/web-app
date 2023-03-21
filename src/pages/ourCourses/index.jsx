import FeatureSection from '../../components/featureSection';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Works from './components/works';

const OurCourses = () => {
  return (
    <>
      <Header
        name="Our Courses"
        bg="https://res.cloudinary.com/nhubnacademy/image/upload/v1678914599/nhubNigeria/cover_pfgyc1.jpg"
      />

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
                    image="https://res.cloudinary.com/nhubnacademy/image/upload/v1678916505/nhubNigeria/Screenshot_from_2023-03-15_22-40-40_wjm7wx.png"
                    name="WEB DEVELOPMENT"
                    description="A complete guide to frontend web application
development technologies and their
practical usage."
                  />
                  <Works
                    title="BACKEND DEVELOPMENT"
                    image="https://res.cloudinary.com/nhubnacademy/image/upload/v1678914107/nhubNigeria/backend_hrdwfm.jpg"
                    name="WEB DEVELOPMENT"
                    description="Learn how to develop the persistent layer of
any application using popular backends
technologies."
                  />
                  <Works
                    title="UI/UX"
                    image="https://res.cloudinary.com/nhubnacademy/image/upload/v1678914853/nhubNigeria/ui_eqxx2j.jpg"
                    name="PRODUCT DESIGN"
                    description="An in-depth course on graphics, User
Interface and Experience design and product design."
                  />
                  <Works
                    title="MOBILE APP DEVELOPMENT"
                    image="https://res.cloudinary.com/nhubnacademy/image/upload/v1678920777/nhubNigeria/Screenshot_from_2023-03-15_23-52-43_x5ydym.png"
                    name="FLUTTER"
                    description="Learn how to develop mobile applications for both android and iOS devices using flutter."
                  />
                  <Works
                    title="EMBEDDED SYSTEMS (ARDUINO)"
                    image="https://res.cloudinary.com/nhubnacademy/image/upload/v1678914386/nhubNigeria/embedded_l8100x.jpg"
                    name="IOT"
                    description="Learn a system of interrelated computing
devices, mechanical and digital machines,
objects, animals or people that are provided."
                  />
                  <Works
                    title="DATA ANALYSIS"
                    image="https://res.cloudinary.com/nhubnacademy/image/upload/v1678914217/nhubNigeria/data_n6vtls.jpg"
                    name="DATA"
                    description="Learn how to inspect, clean, transform, and
model data for useful information
extrapolation"
                  />
                  <Works
                    title="DATA SCIENCE"
                    image="https://res.cloudinary.com/nhubnacademy/image/upload/v1678915273/nhubNigeria/scienc_rdmvrq.jpg"
                    name="DATA"
                    description="Learn data management, visualization,
analysis."
                  />
                  <Works
                    title="VR/AR"
                    image="https://res.cloudinary.com/nhubnacademy/image/upload/v1678913905/nhubNigeria/blog-2_coaw8d.jpg"
                    name="VIRTUAL REALITY"
                    description="A guide on 3D development with blender,
with an introduction to unity engine."
                  />
                  <Works
                    title="NETWORKING FUNDAMENTALS
& WIRELESS NETWORKING"
                    image="https://res.cloudinary.com/nhubnacademy/image/upload/v1678916504/nhubNigeria/Screenshot_from_2023-03-15_22-41-03_nntk87.png"
                    name="NETWORKING"
                    description="Connecting two or more computers with
purpose to share data or technical
support."
                  />
                  <Works
                    title="CYBER SECURITY"
                    image="https://res.cloudinary.com/nhubnacademy/image/upload/v1678916506/nhubNigeria/Screenshot_from_2023-03-15_22-39-17_ucus9a.png"
                    name="INTERNET SECURITY"
                    description="Learn the computer security or information
technology security."
                  />
                  <Works
                    title="DIGITAL MARKETING"
                    image="https://res.cloudinary.com/nhubnacademy/image/upload/v1678920636/nhubNigeria/Screenshot_from_2023-03-15_23-50-14_pyxoqy.png"
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
