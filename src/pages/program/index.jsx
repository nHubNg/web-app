import Footer from '../../components/footer';
import Header from '../../components/header';
import bg from '../../img/hub/program.jpg';
import sevo from '../../img/hub/sevo.jpg';
import next from '../../img/hub/next.JPG';
import programm from '../../img/hub/programm.jpg';
import back from '../../img/hub/back.jpg';
import meet from '../../img/hub/meet.jpg';
import FeatureSection from '../../components/featureSection';
import Card from './component/card';

const Program = () => {
  return (
    <div>
      <Header name="Programs" bg={bg} />

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
          title="SEVOCODER"
          paragraph="The mission here is to “catch them young”. This program is targeted at kids within the age range of six (6) and sixteen (16) years, with the aim of exposing them to different emerging technologies, having them learn and ultimately choose the path that best suit them.
          The major role SEVOCODER play in the upbringing of young children is that it prepares them for the future of work which is based on technology, and gives them a fair fighting chance against their counterparts all over the world."
        />
      </div>

      <div className="card-2">
        <Card
          image={back}
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
          title="SOFTWARE DEVELOPMENT TRAINING"
          paragraph="We have in place a comprehensive plan to equip you with practical skills and help you gain proficiency in various areas of ICT. Whether you are completely new to the world of ICT, or need to add an extra skill to your profile, we have tailor-made training services for all categories of learners. Our training programs cover, but are not limited to Website design and development (in various languages and stacks), Mobile App development, Robotics, Augmented & Virtual Reality, Data Science and AI, Graphics Design and 3D Animation."
        />
      </div>

      <div className="card-2">
        <Card
          image={programm}
          title="COMMUNITY PROGRAMS"
          paragraph="We also host and support any activity, set of activities, other initiative or tech related community programs such as Google Developer Group, Dev Fest, International Women's Day, Flutter, and so on for the benefit of techies. Programs like this expose developers to new ideas and skills. It also provides an opportunity for developers to meet other developers and connect, which is very important in tech space."
        />
      </div>

      <div className="card-1">
        <Card
          image={meet}
          title="MEET UPS"
          paragraph="Meet ups are key events that gives tech members an opportunity to connect with each other and also to acquire knowledge and gain advice from those above them so as to overcome some challenges they may be facing. nHub regularly host such meet ups for it's members in a bid to make sure they get quality and maximum support in their tech journey."
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
