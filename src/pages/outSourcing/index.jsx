import Footer from '../../components/footer';
import Header from '../../components/header';
// import blogImage4 from '../../img/blog-4.jpg';
import FeatureSection from '../../components/featureSection';
import bg from '../../img/hub/outsorcing.jpg'

const OutSourcing = () => {
  return (
    <>
      <Header name="OutSourcing Programs" bg={bg}/>

      {/* <!-- Contact Form Section --> */}
      <section id="single-content" className="bg-white">
        <div className="container">
          <div className="section-content blog-content">
            <div className="row">
              {/* <!-- Single Content Holder --> */}
              <div className="title-wrap">
                <h4>EXECUTIVE SUMMARY</h4>
                {/* <img className="float-left" width="320px" src={blogImage4} alt="" /> */}
                <p>
                  nHub plays a leadership role in nurturing dialogue,
                  disseminating knowledge, and re-wiring the ecosystem through
                  different community-based efforts that are geared towards
                  building a generation of new entrepreneurs, software
                  developers, and an army of skilled and employable young people
                  matching industry needs in priority sectors. We believe
                  technology is a catalyst for growth and that client
                  satisfaction is driven by the best and timely services. We are
                  focused on empowering entrepreneurs on their journey to build
                  great ideas out of little or nothing, we work with Start-ups
                  at every stage of maturity to provide the tools, resources,
                  knowledge and expertise they need to succeed. We help
                  Start-ups scale their businesses, bring innovative services to
                  the market and reach new customers through our connections.
                  Our work spans from conceiving ideas, trainings, incubation,
                  collaboration and creation of services
                </p>
              </div>
              {/* <!-- End of Contact Form Holder --> */}

              <div className="stack">
                <div className="title-wrap">
                  <h4>STACKS AND THEIR VARIOUS RESOURCES</h4>
                </div>
                <div className="stack-1">
                  <h3>
                    <b>FRONTEND</b>
                  </h3>
                  <h4>LANGUAGES</h4>

                  <p>HTML</p>
                  <p>CSS</p>
                  <p>JAVASCRIPT</p>

                  <h4>TOOLS</h4>

                  <p>GITHUB</p>
                  <p>NETLIFY</p>
                  <p>HEROKU</p>
                  <p>REDUX</p>

                  <h4>FRAMEWORKS</h4>

                  <p>REACT.JS</p>
                  <p>REACT.JS</p>
                  <p>HOOKS</p>
                  <p>REDUX</p>
                  <p>CONTEXT API</p>
                  <p>STYLED COMPONENTS</p>
                </div>

                <div className="stack-2">
                  <h3>
                    <b>BACKEND</b>
                  </h3>
                  <h4>LANGUAGES</h4>

                  <p>JAVASCRIPT</p>
                  <p>TYPESCRIPT</p>
                  <p>PYTHON</p>

                  <h4>TOOLS</h4>

                  <p>GITHUB</p>
                  <p>HEROKU</p>
                  <p>FIREBASE</p>
                  <p>AWS S3, ELASTIC BEANSTALK</p>
                  <p>MONGODB</p>
                  <p>POSTGRES</p>
                  <p>JIRA</p>
                  <p>SLACK</p>

                  <h4>FRAMEWORKS</h4>

                  <p>NODE-EXPRESS; REST API</p>
                  <p>NODE-NEST; REST API</p>
                  <p>UNITY/INTEGRATION TESTING WITH JEST</p>
                  <p>FLASK REST</p>
                </div>

                <div className="stack-1">
                  <h3>
                    <b>UI/UX</b>
                  </h3>

                  <p>FIGMA</p>
                  <p>ADOBE XD</p>
                </div>

                <div className="stack-2">
                  <h3>
                    <b>AR/VR</b>
                  </h3>
                  <h4>LANGUAGES</h4>

                  <p>C#</p>
                  <p>C++</p>
                  <p>BLUEPRINT</p>
                  <p>JAVASCRIPT</p>

                  <h4>TOOLS</h4>

                  <p>GITHUB</p>
                  <p>BLENDER</p>
                  <p>UNREAL ENGINE</p>
                  <p>UNITY</p>
                  <p>MAYA</p>

                  <h4>FRAMEWORKS</h4>

                  <p>THREE .JS</p>
                  <p>DECK .GL</p>

                  <h4>DEPLOYMENT</h4>

                  <p>SIDE QUEST</p>
                  <p>STEAM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End of Contact Form Section -->	 */}

      <FeatureSection />

      <Footer />
    </>
  );
};

export default OutSourcing;
