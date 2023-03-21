import Footer from '../../components/footer';
import HomeHeader from './components/homeHeader';
import Section from './components/section';
// import bg from '../../img/hub/backk.JPG';
// import profileMockup from '../../img/hub/wire.jpg';
// import bgWhite from '../../img/bg-white.jpg';
import Testimonials from './components/testimonials';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import FeatureSection from '../../components/featureSection';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <HomeHeader />
      <Section />
      <section
        id="section-featurettes"
        className="featurettes overlay bg-fixed"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/nhubnacademy/image/upload/q_auto:eco/v1678914733/nhubNigeria/backk_nah9dj.jpg)`,
        }}
      >
        <div className="container">
          <div className="section-content">
            <div className="row">
              <div className="col-md-12">
                <div className="row align-items-center text-white">
                  <div
                    className="col-md-4 offset-md-2 col-sm-6"
                    data-aos="fade-right"
                  >
                    <h4 className="mb-4">
                      Check out our road map for each technology
                    </h4>
                    <p>
                      Our curriculum consist of all the necessary and updated
                      libraries, frameworks and languages needed for each
                      technology as well as the resources needed for the tech
                      journey.
                    </p>
                    <p>
                      Check out the various stacks and their curriculum below.
                    </p>
                    <button type="button" className="btn btn-outline-primary">
                      <Link to="/outsourcing">CURRICULUM</Link>
                    </button>
                  </div>

                  <div
                    className="col-md-4 offset-md-right-2 col-sm-6"
                    data-aos="flip-right"
                  >
                    <img
                      className="my-5"
                      src="https://res.cloudinary.com/nhubnacademy/image/upload/v1678914992/nhubNigeria/wire_yacyuf.jpg"
                      alt=""
                      style={{ borderRadius: '5px' }}
                    />
                  </div>
                </div>
                <div
                  className="col-md-4 offset-md-right-2 col-sm-6"
                  data-aos="flip-right"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Carousel id="carosel">
          <Carousel.Item>
            <img
              src="https://res.cloudinary.com/nhubnacademy/image/upload/v1678913905/nhubNigeria/bg-white_k0amwf.jpg"
              id="whiteBG"
              alt=""
            />
            <Carousel.Caption id="testi-text">
              <Testimonials
                content="
                nHub Nigeria has exposed me to so many knowledge, possibilities and opportunities I have never imagined or learnt before now"
                name="Sadiq"
                title="Backend Developer"
                image="https://res.cloudinary.com/nhubnacademy/image/upload/v1678915083/nhubNigeria/Msad_qkde1q.jpg"
              />
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              src="https://res.cloudinary.com/nhubnacademy/image/upload/v1678913905/nhubNigeria/bg-white_k0amwf.jpg"
              id="whiteBG"
              alt=""
            />
            <Carousel.Caption id="testi-text">
              <Testimonials
                content="
                I have been able to grow as a developer and also connect with like minds and developers during my stay at nHub."
                name="Desmond"
                title="Frontend Developer"
                image="https://res.cloudinary.com/nhubnacademy/image/upload/v1678914273/nhubNigeria/dess_ejujtv.jpg"
              />
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              src="https://res.cloudinary.com/nhubnacademy/image/upload/v1678913905/nhubNigeria/bg-white_k0amwf.jpg"
              id="whiteBG"
              alt=""
            />
            <Carousel.Caption id="testi-text">
              <Testimonials
                content="
                A very conducive and inspiring community to grow together and work as a team."
                name="Terrence"
                title="UI/UX Designer"
                image="https://res.cloudinary.com/nhubnacademy/image/upload/v1678914812/nhubNigeria/Terrence_wwhd55.jpg"
              />
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              src="https://res.cloudinary.com/nhubnacademy/image/upload/v1678913905/nhubNigeria/bg-white_k0amwf.jpg"
              id="whiteBG"
              alt=""
            />
            <Carousel.Caption id="testi-text">
              <Testimonials
                content="
                An organization which provides a comfortable learning environment. Quality mentorship and user friendly curriculum."
                name="Faith"
                title="Private Student"
                image="https://res.cloudinary.com/nhubnacademy/image/upload/v1678914632/nhubNigeria/courses_jtppir.jpg"
              />
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              src="https://res.cloudinary.com/nhubnacademy/image/upload/v1678913905/nhubNigeria/bg-white_k0amwf.jpg"
              id="whiteBG"
              alt=""
            />
            <Carousel.Caption id="testi-text">
              <Testimonials
                content="
                Thanks to nHub, I have grown and improved greatly in my web development journey. I was able to learn things I wasn't taught in school"
                name="Ibrahim"
                title="Intern"
                image="https://res.cloudinary.com/nhubnacademy/image/upload/v1678914733/nhubNigeria/backk_nah9dj.jpg"
              />
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>

      {/* <!-- Client Section --> */}
      <section
        id="client"
        className="overlay bg-fixed"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/nhubnacademy/image/upload/v1678915471/nhubNigeria/internshipp_lf5myn.jpg)`,
        }}
      ></section>
      {/* <!-- End of Client Section -->	 */}

      <section id="reservation" className="bg-white section-content">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-5 offset-lg-1 mb-5 mb-lg-0"
              data-aos="fade-right"
            >
              <div className="bg-white p-5 shadow">
                <div className="heading-section text-center">
                  <h2 className="mb-4">Contact Us</h2>
                </div>
                <form method="post" name="contact-us" action="">
                  <div className="row">
                    <div className="col-md-12 form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="col-md-12 form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="col-md-12 form-group">
                      <input
                        type="number"
                        className="form-control"
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="Phone"
                      />
                    </div>

                    <div className="col-md-12 form-group">
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="6"
                        placeholder="Your Message ..."
                      ></textarea>
                    </div>
                    <div className="col-md-12 text-center">
                      <button
                        className="btn btn-primary btn-shadow btn-lg"
                        type="submit"
                        name="submit"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1" data-aos="fade-left">
              <h2 className="mb-4">
                We've got you covered with courses on Emerging Technologies
              </h2>
              <p className="mb-4">
                We have in place a comprehensive plan to equip you with
                practical skills and help you gain proficiency in various areas
                of ICT. Whether you are completely new to the world of ICT, or
                need to add an extra skill to your profile, we have tailor-made
                training services for all categories of learners.
                <br /> <br />
                Our training programs cover, but are not limited to Website
                design and development (in various languages and stacks), Mobile
                App development, Robotics, Augmented & Virtual Reality, Data
                Science and AI, Graphics Design and 3D Animation.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End of Reservation Section --> */}

      <FeatureSection />

      <Footer />
    </div>
  );
};

export default Home;
