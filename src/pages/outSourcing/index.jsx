import Footer from '../../components/footer';
import Header from '../../components/header';
// import blogImage4 from '../../img/blog-4.jpg';
import FeatureSection from '../../components/featureSection';

const OutSourcing = () => {
  return (
    <>
      <Header name="OutSourcing Programs" />

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

              <div>
                <div>
                  <h3>
                    <b>FRONTEND</b>
                  </h3>
                  <h4>LANGUAGES</h4>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JAVASCRIPT</li>
                  </ul>
                  <h4>TOOLS</h4>
                  <ul>
                    <li>GITHUB</li>
                    <li>NETLIFY</li>
                    <li>HEROKU</li>
                    <li>REDUX</li>
                  </ul>
                  <h4>FRAMEWORKS</h4>
                  <ul>
                    <li>REACT.JS</li>
                    <li>REACT.JS</li>
                    <li>HOOKS</li>
                    <li>REDUX</li>
                    <li>CONTEXT API</li>
                    <li>STYLED COMPONENTS</li>
                  </ul>
                </div>

                <div>
                  <h3>
                    <b>BACKEND</b>
                  </h3>
                  <h4>LANGUAGES</h4>
                  <ul>
                    <li>JAVASCRIPT</li>
                    <li>TYPESCRIPT</li>
                    <li>PYTHON</li>
                  </ul>
                  <h4>TOOLS</h4>
                  <ul>
                    <li>GITHUB</li>
                    <li>HEROKU</li>
                    <li>FIREBASE</li>
                    <li>AWS S3, ELASTIC BEANSTALK</li>
                    <li>MONGODB</li>
                    <li>POSTGRES</li>
                    <li>JIRA</li>
                    <li>SLACK</li>
                  </ul>
                  <h4>FRAMEWORKS</h4>
                  <ul>
                    <li>NODE-EXPRESS; REST API</li>
                    <li>NODE-NEST; REST API</li>
                    <li>UNITY/INTEGRATION TESTING WITH JEST</li>
                    <li>FLASK REST</li>
                  </ul>
                </div>

                <div>
                  <h3>
                    <b>UI/UX</b>
                  </h3>
                  <h4>TOOLS</h4>
                  <ul>
                    <li>FIGMA</li>
                    <li>ADOBE XD</li>
                  </ul>
                </div>

                <div>
                  <h3>
                    <b>AR/VR</b>
                  </h3>
                  <h4>LANGUAGES</h4>
                  <ul>
                    <li>C#</li>
                    <li>C++</li>
                    <li>BLUEPRINT</li>
                    <li>JAVASCRIPT</li>
                  </ul>
                  <h4>TOOLS</h4>
                  <ul>
                    <li>GITHUB</li>
                    <li>BLENDER</li>
                    <li>UNREAL ENGINE</li>
                    <li>UNITY</li>
                    <li>MAYA</li>
                  </ul>
                  <h4>FRAMEWORKS</h4>
                  <ul>
                    <li>THREE .JS</li>
                    <li>DECK .GL</li>
                  </ul>
                  <h4>DEPLOYMENT</h4>
                  <ul>
                    <li>SIDE QUEST</li>
                    <li>STEAM</li>
                  </ul>
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
