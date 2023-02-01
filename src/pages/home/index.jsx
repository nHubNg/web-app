import Footer from '../../components/footer';
import HomeHeader from './components/homeHeader';
import Section from './components/section';
import bg from '../../img/bg.jpg';
import profileMockup from '../../img/app-profile-mockup.png';
import bgWhite from '../../img/bg-white.jpg';
import Testimonials from './components/testimonials';
import photo_1 from '../../img/photo-1.jpg';
import photo_6 from '../../img/photo-6.jpg';
import photo_2 from '../../img/photo-2.jpg';
import photo_7 from '../../img/photo-7.jpg';
import photo_4 from '../../img/photo-4.jpg';
import photo_9 from '../../img/photo-9.jpg';
import client from '../../img/client.png';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import React, { useEffect } from 'react';
import FeatureSection from '../../components/featureSection';
// import testi from '../../img/testi-1.jpg';
import Carousel from 'react-bootstrap/Carousel';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const options = {
  autoplay: true,
  autoplayTimeout:5000,
  loop:true,
  items: 5,
  smartSpeed: 1500,

};

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <HomeHeader />
      <Section />
      <section
        id="section-featurettes"
        className="featurettes overlay bg-fixed"
        style={{
          backgroundImage: `url(${bg})`,
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
                      Capture every moments and share it to all your friends
                    </h4>
                    <p>
                      Nulla vitae elit libero, a pharetra augue. Maecenas sed
                      diam eget risus varius blandit sit amet non magna. Cras
                      mattis consectetur purus sit amet.
                    </p>
                    <button type="button" className="btn btn-outline-primary">
                      FEATURES
                    </button>
                  </div>

                  <div
                    className="col-md-4 offset-md-right-2 col-sm-6"
                    data-aos="flip-right"
                  >
                    <img className="my-5" src={profileMockup} alt="" />
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

      <section id="section-featurettes" className="featurettes">
        <div className="container">
          <div className="section-content">
            <div className="row">
              <div className="col-md-12">
                <div className="row align-items-center">
                  <div
                    className="col-md-4 offset-md-2 col-sm-6"
                    data-aos="flip-left"
                  >
                    <img className="my-5" src={profileMockup} alt="" />
                  </div>

                  <div
                    className="col-md-4 offset-md-right-2 col-sm-6"
                    data-aos="fade-left"
                  >
                    <h4 className="mb-4">
                      Capture every moments and share it to all your friends
                    </h4>
                    <p>
                      Nulla vitae elit libero, a pharetra augue. Maecenas sed
                      diam eget risus varius blandit sit amet non magna. Cras
                      mattis consectetur purus sit amet.
                    </p>
                    <div className="progress mb-3">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width: '95%',
                          ariaValuenow: '95',
                          ariaValuemin: '0',
                          ariaValuemax: '100',
                        }}
                      >
                        HTML5 95%
                      </div>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width: '90%',
                          ariaValuenow: '90',
                          ariaValuemin: '0',
                          ariaValuemax: '100',
                        }}
                      >
                        CSS3 90%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Testimonial Section--> */}
      <section>
        <Carousel id="carosel">
          <Carousel.Item>
            <img src={bgWhite} id="whiteBG" alt="" />
            <Carousel.Caption id="testi-text">
              <Testimonials
                content={
                  <React.Fragment>
                    <b>NHUB</b> is best theme is used so far.
                    <br /> Its ideal for guys without coding knowledge like me!{' '}
                  </React.Fragment>
                }
              />
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={bgWhite} id="whiteBG" alt="" />
            <Carousel.Caption id="testi-text">
              <Testimonials
                content="
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci non doloribus ut, alias doloremque
                perspiciatis. Lorem ipsum dolor sit"
              />
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={bgWhite} id="whiteBG" alt="" />
            <Carousel.Caption id="testi-text">
              <Testimonials
                content="
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Adipisci non doloribus ut, alias doloremque
                    perspiciatis. Lorem ipsum dolor sit"
              />
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>

      {/* <!-- Portfolio Section --> */}
      <section id="portfolio" className="bg-white">
        <div className="container">
          <div className="section-content">
            {/* <!-- Section Title --> */}
            <div className="title-wrap">
              <h2 className="section-title">
                Our <b>Awesome</b> Works
              </h2>
              <p className="section-sub-title">
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. <br /> pharetra augue. Donec id elit non mi.
              </p>
            </div>
            {/* <!-- End of Section Title --> */}
            <div className="row">
              {/* <!-- Portfolio Holder --> */}
              <div className="col-md-12 portfolio-holder mt-3">
                {/* <!-- Btn Filter --> */}
                <div className="filter-button-group btn-filter d-flex justify-content-center">
                  <a
                    tabIndex="0"
                    className="is-checked"
                    data-filter="*"
                    href="/"
                  >
                    Show All
                  </a>
                  <a tabIndex="0" data-filter=".minimalism" href="/">
                    Minimalism
                  </a>
                  <a tabIndex="0" data-filter=".vintage" href="/">
                    Vintage
                  </a>
                  <a tabIndex="0" data-filter=".creative" href="/">
                    Creative
                  </a>
                </div>
                {/* <!-- End of Btn Filter --> */}
                {/* <!-- Portfolio Content --> */}
                <div
                  className="grid-portfolio"
                  style={{ position: 'relative', height: '887.383px' }}
                >
                  <div className="grid-sizer"></div>
                  <div className="gutter-sizer"></div>
                  {/* <!-- Portfolio Item --> */}
                  <div
                    className="grid-item aos-init aos-animate minimalism"
                    data-aos="fade-up"
                    style={{ position: 'absolute', left: '0%', top: '0px' }}
                  >
                    <div className="grid-item-wrapper">
                      <img
                        src={photo_1}
                        alt="portfolio-img"
                        className="portfolio-item"
                      />
                      <div className="grid-info">
                        <div className="grid-link d-flex justify-content-center">
                          <Link
                            className="img-pop"
                            data-rel="lightcase"
                            to={photo_1}
                            title="Photo-1"
                          >
                            <span className="lnr lnr-move"></span>
                          </Link>
                          <Link
                            className="ext-link"
                            to="https://unsplash.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span className="lnr lnr-link"></span>
                          </Link>
                        </div>
                        <div className="grid-title">
                          <h4>Camera</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End of Portfolio Item --> */}
                  {/* <!-- Portfolio Item --> */}
                  <div
                    className="grid-item aos-init aos-animate vintage"
                    data-aos="fade-up"
                    style={{
                      position: 'absolute',
                      left: '33.9984%',
                      top: '0px',
                    }}
                  >
                    <div className="grid-item-wrapper">
                      <img
                        src={photo_6}
                        alt="portfolio-img"
                        className="portfolio-item"
                      />
                      <div className="grid-info">
                        <div className="grid-link d-flex justify-content-center">
                          <Link
                            className="img-pop"
                            data-rel="lightcase"
                            to={photo_6}
                            title="Ship"
                          >
                            <span className="lnr lnr-move"></span>
                          </Link>
                          <Link
                            className="ext-link"
                            to="https://unsplash.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span className="lnr lnr-link"></span>
                          </Link>
                        </div>
                        <div className="grid-title">
                          <h4>Flower</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End of Portfolio Item --> */}
                  {/* <!-- Portfolio Item --> */}
                  <div
                    className="grid-item aos-init aos-animate creative grid-item-height"
                    data-aos="fade-up"
                    style={{
                      position: 'absolute',
                      left: '67.9968%',
                      top: '0px',
                    }}
                  >
                    <div className="grid-item-wrapper">
                      <img
                        src={photo_2}
                        alt="portfolio-img"
                        className="portfolio-item"
                      />
                      <div className="grid-info">
                        <div className="grid-link d-flex justify-content-center">
                          <Link
                            className="img-pop"
                            data-rel="lightcase"
                            to={photo_2}
                            title="Tracy Portrait"
                          >
                            <span className="lnr lnr-move"></span>
                          </Link>
                          <Link
                            className="ext-link"
                            to="https://unsplash.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span className="lnr lnr-link"></span>
                          </Link>
                        </div>
                        <div className="grid-title">
                          <h4>Breakfast</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End of Portfolio Item --> */}
                  {/* <!-- Portfolio Item --> */}
                  <div
                    className="grid-item aos-init aos-animate creative"
                    data-aos="fade-up"
                    style={{
                      position: 'absolute',
                      left: '33.9984%',
                      top: '375.195px',
                    }}
                  >
                    <div className="grid-item-wrapper">
                      <img
                        src={photo_7}
                        alt="portfolio-img"
                        className="portfolio-item"
                      />
                      <div className="grid-info">
                        <div className="grid-link d-flex justify-content-center">
                          <Link
                            className="img-pop"
                            data-rel="lightcase"
                            to={photo_7}
                            title="Guitar"
                          >
                            <span className="lnr lnr-move"></span>
                          </Link>
                          <Link
                            className="ext-link"
                            to="https://unsplash.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span className="lnr lnr-link"></span>
                          </Link>
                        </div>
                        <div className="grid-title">
                          <h4>Hidden Book</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End of Portfolio Item --> */}
                  {/* <!-- Portfolio Item --> */}
                  <div
                    className="grid-item aos-init aos-animate vintage"
                    data-aos="fade-up"
                    style={{
                      position: 'absolute',
                      left: '0%',
                      top: '552.793px',
                    }}
                  >
                    <div className="grid-item-wrapper">
                      <img
                        src={photo_4}
                        alt="portfolio-img"
                        className="portfolio-item"
                      />
                      <div className="grid-info">
                        <div className="grid-link d-flex justify-content-center">
                          <Link
                            className="img-pop"
                            data-rel="lightcase"
                            to={photo_4}
                            title="Bookself"
                          >
                            <span className="lnr lnr-move"></span>
                          </Link>
                          <Link
                            className="ext-link"
                            to="https://unsplash.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span className="lnr lnr-link"></span>
                          </Link>
                        </div>
                        <div className="grid-title">
                          <h4>Chair</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End of Portfolio Item --> */}
                  {/* <!-- Portfolio Item --> */}
                  <div
                    className="grid-item aos-init aos-animate creative"
                    data-aos="fade-up"
                    style={{
                      position: 'absolute',
                      left: '67.9968%',
                      top: '552.793px',
                    }}
                  >
                    <div className="grid-item-wrapper">
                      <img
                        src={photo_9}
                        alt="portfolio-img"
                        className="portfolio-item"
                      />
                      <div className="grid-info">
                        <div className="grid-link d-flex justify-content-center">
                          <Link
                            className="img-pop"
                            data-rel="lightcase"
                            to={photo_9}
                            title="Guitar"
                          >
                            <span className="lnr lnr-move"></span>
                          </Link>
                          <Link
                            className="ext-link"
                            to="https://unsplash.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span className="lnr lnr-link"></span>
                          </Link>
                        </div>
                        <div className="grid-title">
                          <h4>Red</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End of Portfolio Item --> */}
                </div>
                {/* <!-- End of Portfolio Content --> */}
              </div>
              {/* <!-- End of Portfolio Holder --> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End of Portfolio Section --> */}

      {/* <!-- Client Section --> */}
      <section
        id="client"
        className="overlay bg-fixed"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="container">
          <div className="section-content" data-aos="fade-up">
            <div className="row ">
              <div className="col-md-12">
                {/* <!-- Section Title --> */}
                <div className="title-wrap mb-5">
                  <h2>
                    Who love to <span> work</span> with us
                  </h2>
                </div>
                {/* <!-- End of Section Title --> */}
              </div>
              {/* <!-- Client Holder --> */}
              <div className="col-md-12 client-holder">
                <div className="client-slider">
                <OwlCarousel className="slider-items owl-carousel" {...options}>
                  <div className="client-item">
                    <img className="img-responsive" src={client} alt=" " />
                  </div>
                  <div className="client-item">
                    <img className="img-responsive" src={client} alt=" " />
                  </div>
                  <div className="client-item">
                    <img className="img-responsive" src={client} alt=" " />
                  </div>
                  <div className="client-item">
                    <img className="img-responsive" src={client} alt=" " />
                  </div>
                  <div className="client-item">
                    <img className="img-responsive" src={client} alt=" " />
                  </div>
                  <div className="client-item">
                    <img className="img-responsive" src={client} alt=" " />
                  </div>
                  </OwlCarousel>
                </div>
                {/* <!-- End of Client Holder --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
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
                      <input
                        type="text"
                        className="form-control"
                        id="websiteUrl"
                        name="websiteUrl"
                        placeholder="Website"
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
                Best solution to create any website. Pay once.
              </h2>
              <p className="mb-4">
                I am text block. Click edit button to change this text. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>

              <ul className="list-inline py-2">
                <li className="list-inline-item text-center">
                  <span className="lnr fs-40 lnr-rocket"></span>
                  <p>Fast delivery</p>
                </li>
                <li className="list-inline-item text-center">
                  <span className="lnr fs-40 lnr-magic-wand"></span>
                  <p>Awesome design</p>
                </li>
                <li className="list-inline-item text-center">
                  <span className="lnr fs-40 lnr-cog"></span>
                  <p>Easy to customize</p>
                </li>
              </ul>

              <a href="/" className="btn btn-link p-0">
                <span>PURCHASE NOW</span>
                <span className="lnr lnr-arrow-right"></span>
              </a>
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
