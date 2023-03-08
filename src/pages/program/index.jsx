import Footer from '../../components/footer';
import Header from '../../components/header';
import bg from '../../img/hub/program.jpg';
import sevo from '../../img/hub/sevo.jpg'
import next from '../../img/hub/next.JPG'

import FeatureSection from '../../components/featureSection';
import Card from './component/card';

const Program = () => {
  return (
    <div>
      <Header name="Programs" bg={bg}/>

      <section id="blog" className="bg-grey">
        <div className="container">
          <div className="section-content">
            <div className="title-wrap mb-5" data-aos="fade-up">
              <h2 className="section-title">
                Our <b>Services</b>
              </h2>
              <p className="section-sub-title program-p">
                As a technological hub, our main focus is on the tech aspect of
                life. Setting up of digital laboratories for institutions and
                schools. We also engage in C.B.T installations for companies and
                schools. That is, we purchase and set up required equipment such
                as; servers, computers, and routers. Not only do we set up for
                companies in urban areas, we also install micro laboratories in
                rural areas. Furthermore, together with our various partners, we
                engage in the setting up of a digital and financial literacy
                training infrastructure with application to small businesses.
                Outsourcing is also one of the services we provide. We outsource
                talent both locally and internationally. We supply hardware to
                various institutions
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="title-wrap mb-5">
        <h2 className="section-title">
          <b>Our</b> Programs
        </h2>
      </div>

      <div className="card-1">
        <Card
        image={sevo}
          title="SEVO CODER"
          paragraph="The mission here is to “catch them young”. This program is targeted at kids within the age range of six (6) and sixteen (16) years, with the aim of exposing them to different emerging technologies, having them learn and ultimately choose the path that best suit them.

          The major role SEVO CODER play in the upbringing of young children is that it prepares them for the future of work which is based on technology, and gives them a fair fighting chance against their counterparts all over the world."
        />
      </div>

      <div className="card-2">
        <Card
        image={sevo}
          title="INCUBATION AND ENTREPRENEURSHIP"
          paragraph="We train, and develop business concepts as well as make
                  available, suitable, and qualified mentors for Startups to
                  take their product development to the highest level. we also
                  provide services for clients ranging from Staff engagement and
                  training, business model development, Branding, Digital
                  Marketing, software development, and application support
                  giving extra attention and deadline consideration to deliver
                  high standards of quality."
        />
      </div>

      <div className="card-1">
        <Card
        image={next}
          title="NEXT ECONOMY"
          paragraph="This is an Intervention program initiated by the Dutch
                  Government targeted towards African Countries. It has seen
                  over 1000 young Nigerians trained for free, gainfully
                  employed, and supported with funds to start as well as scale
                  their businesses and employ others."
        />
      </div>

      {/* <!-- Features Section--> */}

      <FeatureSection />

      {/* <!-- End of Features Section--> */}
      <Footer />
    </div>
  );
};

export default Program;
