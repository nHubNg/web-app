import FeatureSection from "../../components/featureSection";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Works from './components/works';
import blogImage1 from '../../img/blog-1.jpg';
import blogImage2 from '../../img/blog-2.jpg';
import blogImage3 from '../../img/blog-3.jpg';
import blogImage4 from '../../img/blog-4.jpg';
import Team from "./components/team";


const WorkSpace = () => {
    return ( <>
    <Header name='Co-Working Space' />

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
                  <Works title="Adventure into the coding World" image={blogImage1} name="CODE" />
                  <Works title="Easing the stress of the tech world" image={blogImage2} name="RECREATION" />
                  <Works title="Skills needed for entrepreneurship" image={blogImage3} name="EMPOWERMENT" />
                  <Works title="Augmented and Virtual Reality" image={blogImage2} name="AR/VR" />
                  <Works title="User Interface and User Experience" image={blogImage3} name="UI/UX" />
                  <Works title="FrontEnd + BackEnd === FullStack" image={blogImage3} name="WEB DEVELOPMENT" />
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
                    <img className="float-left" width="320px" src={blogImage4} alt="" />
                    <p>Consectetur adipisicing elit. Sint, corrupti deleniti, rem mollitia quam cum quo, animi ipsa praesentium officiis ducimus! Modi aperiam, nulla ipsum, totam natus consequuntur fugiat blanditiis.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste harum, ut magni cupiditate. Nihil ipsum debitis voluptates voluptate illum consectetur sapiente dolorem facilis, eum nobis sequi eveniet assumenda vel voluptatem!</p>
                    <p>Consectetur adipisicing elit. Sint, corrupti deleniti, rem mollitia quam cum quo, animi ipsa praesentium officiis ducimus! Modi aperiam, nulla ipsum, totam natus consequuntur fugiat blanditiis.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste harum, ut magni cupiditate. Nihil ipsum debitis voluptates voluptate illum consectetur sapiente dolorem facilis, eum nobis sequi eveniet assumenda vel voluptatem!</p>
                </div>
                {/* <!-- End of Contact Form Holder --> */}
            </div>
        </div>
    </div>
</section>

<Team image='blogImage4'/>

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
    </> );
}
 
export default WorkSpace;