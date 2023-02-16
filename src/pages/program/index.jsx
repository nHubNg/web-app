import Footer from '../../components/footer';
import Header from '../../components/header';

import FeatureSection from '../../components/featureSection';
import Card from './component/card';

const Program = () => {
  return (
    <div>
      <Header name="Programs" />

      <section id="blog" className="bg-grey">
        <div className="container">
          <div className="section-content">
            <div className="title-wrap mb-5" data-aos="fade-up">
              <h2 className="section-title">
                Our <b>Services</b>
              </h2>
              <p className="section-sub-title">
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
                various instit
              </p>
            </div>

            <div className="title-wrap mb-5">
              <h2 className="section-title">
                Our <b>Programs</b>
              </h2>
            </div>

            <Card
              title="SEVO CODER"
              paragraph="This is a Training Program created for children in Secondary
                  schools and Colleges to aquire Digital and Entrepreneurship
                  Skills. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. At quisquam voluptatum, ad officiis possimus laudantium
                  laboriosam itaque eius vel odio accusantium explicabo incidunt
                  similique ratione, impedit, eveniet adipisci maiores
                  repudiandae. Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Repellat deleniti omnis, quibusdam tempore
                  aperiam fugiat? Laboriosam, quam commodi temporibus ratione
                  assumenda dicta quasi accusantium sapiente culpa quos
                  molestias obcaecati doloremque."
            />

            <Card
              title="INCUBATION AND ENTERPRENEURSHIP"
              paragraph="We train, and develop business concepts as well as make
                  available, suitable, and qualified mentors for Startups to
                  take their product development to the highest level. we also
                  provide services for clients ranging from Staff engagement and
                  training, business model development, Branding, Digital
                  Marketing, software development, and application support
                  giving extra attention and deadline consideration to deliver
                  high standards of quality. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Dolores distinctio non mollitia
                  optio maxime eaque, voluptas suscipit quod cupiditate earum
                  nemo voluptatum at soluta, ad cumque ut inventore eum. At.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  obcaecati commodi fugit quae quibusdam nobis corporis
                  laudantium alias quam, tenetur laboriosam earum ut sunt
                  distinctio ipsam. Pariatur laudantium quis autem!"
            />

            <Card
              title="NEXT ECONOMY"
              paragraph="This is an Intervention program initiated by the Dutch
                  Government targeted towards African Countries. It has seen
                  over 1000 young Nigerians trained for free, gainfully
                  employed, and supported with funds to start as well as scale
                  their businesses and employ others. Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. At quisquam voluptatum, ad
                  officiis possimus laudantium laboriosam itaque eius vel odio
                  accusantium explicabo incidunt similique ratione, impedit,
                  eveniet adipisci maiores repudiandae. Lorem ipsum dolor, sit
                  amet consectetur adipisicing elit. Repellat deleniti omnis,
                  quibusdam tempore aperiam fugiat? Laboriosam, quam commodi
                  temporibus ratione assumenda dicta quasi accusantium sapiente
                  culpa quos molestias obcaecati doloremque."
            />
          </div>
        </div>
      </section>

      {/* <!-- Features Section--> */}

      <FeatureSection />

      {/* <!-- End of Features Section--> */}
      <Footer />
    </div>
  );
};

export default Program;
