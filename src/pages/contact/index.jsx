import Footer from "../../components/footer";
import Header from "../../components/header";

import FeatureSection from "../../components/featureSection";


const Contact = () => {
    return ( <>

        <Header name='Contact Us' />


        {/* <!-- Contact Form Section --> */}
<section id="contact-form" className="bg-white">
    <div className="container">
        <div className="section-content">
            {/* <!-- Section Title --> */}
            <div className="title-wrap" data-aos="fade-up">
                <h2 className="section-title">Get In Touch</h2>
                <p className="section-sub-title">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. <br /> pharetra augue. Donec id elit non mi.</p>
            </div>
            {/* <!-- End of Section Title --> */}
            <div className="row">
                {/* <!-- Contact Form Holder --> */}
                <div className="col-md-8 offset-md-2 contact-form-holder mt-4" data-aos="fade-up">
                    <form method="post" name="contact-us" action="">
                        <div className="row">
                            <div className="col-md-12 form-group">
                                <input type="text" className="form-control" id="name" name="name" placeholder="Name" />
                            </div>
                            <div className="col-md-6 form-group">
                                <input type="text" className="form-control" id="email" name="email" placeholder="Email" />
                            </div>
                            <div className="col-md-6 form-group">
                                <input type="number" className="form-control" id="phoneNumber" name="phoneNumber" placeholder="Phone" />
                            </div>
                            <div className="col-md-12 form-group">
                                <input type="text" className="form-control" id="websiteUrl" name="websiteUrl" placeholder="Website" />
                            </div>
                            <div className="col-md-12 form-group">
                                <textarea className="form-control" id="message" name="message" rows="6" placeholder="Your Message ..."></textarea>
                            </div>
                            <div className="col-md-12 text-center">
                                <button className="btn btn-primary btn-shadow btn-lg" type="submit" name="submit">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
                {/* <!-- End of Contact Form Holder --> */}
            </div>
        </div>
        <div className="section-content pt-0">
            <div className="title-wrap" data-aos="fade-up">
                <h2 className="section-title">Where To Find Us?</h2>
            </div>
            <div className="row text-center mt-4">
                <div className="col-md-3" data-aos="fade-up">
                    <span className="lnr lnr-location fs-40 py-4 d-block"></span>
                    <h5>LOCATION</h5>
                    <p>Yogyakarta</p>
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
{/* <!-- End of Contact Form Section -->	 */}

        <FeatureSection />

        <Footer />

    </> );
}
 
export default Contact;