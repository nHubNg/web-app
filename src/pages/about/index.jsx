import Footer from '../../components/footer';
import Header from '../../components/header';
import Card from './components/card';
import cover from '../../img/hub/cover.jpg';
import sam from '../../img/hub/sam.jpg';
import bash from '../../img/hub/bash.jpg';
import theodore from '../../img/hub/theodore.jpeg';
import nathan from '../../img/hub/nathan.jpeg';
import Msad from '../../img/hub/Msad.jpeg';
import hagos from '../../img/hub/hagos.jpeg';
import marvel from '../../img/hub/marvel.jpeg';
import wakzin from '../../img/hub/wakzin.JPG';
import terrence from '../../img/hub/Terrence.png';
import FeatureSection from '../../components/featureSection';
import AOS from 'aos';
import { useEffect } from 'react';
import bg from '../../img/hub/courses.JPG';

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header name="About Us" bg={bg} />
      <section id="who-we-are" className="bg-white">
        <div className="container">
          <div className="section-content">
            <div className="title-wrap" data-aos="fade-up">
              <h2 className="section-title">
                nHub NIGERIA STARTUP INNOVATION COMMUNITY
              </h2>
              <p className="section-sub-title">
                nHub plays a leadership role in nurturing dialogue,
                disseminating knowledge, and re-wiring the ecosystem through
                different community-based efforts that are geared towards
                building a generation of new entrepreneurs, software developers,
                and an army of skilled and employable young people matching
                industry needs in priority sectors. We believe technology is a
                catalyst for growth and that client satisfaction is driven by
                the best and timely services. We are focused on empowering
                entrepreneurs on their journey to build great ideas out of
                little or nothing, we work with Start-ups at every stage of
                maturity to provide the tools, resources, knowledge and
                expertise they need to succeed. We help Start-ups scale their
                businesses, bring innovative services to the market and reach
                new customers through our connections. Our work spans from
                conceiving ideas, trainings, incubation, collaboration and
                creation of services.
              </p>
            </div>

            <section id="skills" className="bg-white">
              <div className="about-staff">
                <h3>MEET OUR STAFF</h3>
              </div>
            </section>
            <div className="row text-center">
              <div className="col-md-4 col-sm-6 mt-4" data-aos="fade-up">
                <Card
                  image={theodore}
                  heading="Theodore Longji"
                  description="CEO"
                  twitter="https://twitter.com/theodorelongji"
                  instagram="https://www.instagram.com/theodorelongji/"
                  linkedIn="https://www.linkedin.com/in/theodore-longji-0b791253/"
                />
              </div>
              {/* <!-- /.col-md-4 col-sm-6  --> */}
              <div
                className="col-md-4 col-sm-6 mt-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <Card
                  image={bash}
                  heading="Bashir Shaidu"
                  description="COO"
                  twitter="https://twitter.com/ImpactBash"
                  instagram="https://www.instagram.com/impactbash/"
                  linkedIn="https://www.linkedin.com/in/bashirsheidu/"
                />
              </div>
              {/* <!-- /.col-md-4 col-sm-6 mt-4  --> */}
              <div
                className="col-md-4 col-sm-6 mt-4"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <Card
                  image={nathan}
                  heading="Nathan Pankyes"
                  description="Legal"
                  twitter=""
                  instagram="https://www.instagram.com/pk_doppelganger/"
                  linkedIn="https://www.linkedin.com/in/pankyes-nathan-h-5b2b03123/"
                />
              </div>
              <div
                className="col-md-4 col-sm-6 mt-4"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <Card
                  image={sam}
                  heading="Samuel Adebayo"
                  description="Head of Partnership"
                  twitter="https://twitter.com/IamsamAdebayo"
                  instagram="https://www.instagram.com/iamsamadebayo/"
                  linkedIn=""
                />
              </div>
              <div
                className="col-md-4 col-sm-6 mt-4"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <Card
                  image={cover}
                  heading="Nanbam Kumben"
                  description="Lead Incubation"
                  twitter="https://twitter.com/Naan_bee"
                  instagram="https://www.instagram.com/bizzlekumben/"
                  linkedIn=""
                />
              </div>
              <div
                className="col-md-4 col-sm-6 mt-4"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <Card
                  image={cover}
                  heading="Sodiqi"
                  description="Manager"
                  twitter=""
                  instagram=""
                  linkedIn=""
                />
              </div>
              {/* <!-- /.col-md-4 col-sm-6  --> */}
            </div>

            <section id="skills" className="bg-white">
              <div className="about-staff">
                <h3>MEET OUR TEAM LEADS</h3>
                <p className="section-sub-title">
                  With our diverse collection of technology tracks, we have an
                  amazing teams of developers mentors and instructors to match
                  each
                </p>
              </div>
            </section>
            <div className="row text-center">
              <div className="col-md-4 col-sm-6 mt-4" data-aos="fade-up">
                <Card
                  image={Msad}
                  heading="Muhammad Sadiq Abdulrasheed"
                  description="Backend Developer"
                  twitter="https://twitter.com/dotMsadiq"
                  instagram="https://www.instagram.com/dotmsadiq/"
                  linkedIn="https://www.linkedin.com/in/dotmsadiq/"
                />
              </div>
              {/* <!-- /.col-md-4 col-sm-6  --> */}
              <div
                className="col-md-4 col-sm-6 mt-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <Card
                  image={terrence}
                  heading="Terrence Eze"
                  description="UI/UX Developer"
                  twitter="https://twitter.com/ImpactBash"
                  instagram="https://www.instagram.com/impactbash/"
                  linkedIn="https://www.linkedin.com/in/bashirsheidu/"
                />
              </div>
              {/* <!-- /.col-md-4 col-sm-6 mt-4  --> */}
              <div
                className="col-md-4 col-sm-6 mt-4"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <Card
                image={wakzin}
                  heading="Wakzin Gani"
                  description="AR/VR Developer"
                  twitter=""
                  instagram="https://www.instagram.com/pk_doppelganger/"
                  linkedIn="https://www.linkedin.com/in/pankyes-nathan-h-5b2b03123/"
                />
              </div>
              <div
                className="col-md-4 col-sm-6 mt-4"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <Card
                  image={hagos}
                  heading="Hagos Abdullah"
                  description="Embedded Systems & IOT."
                  twitter="https://twitter.com/AbdallahHagos"
                  instagram="https://www.instagram.com/hagosabdallah/"
                  linkedIn="https://www.linkedin.com/in/abdallah-hagos-176150194/"
                />
              </div>
              <div
                className="col-md-4 col-sm-6 mt-4"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <Card
                  image={marvel}
                  heading="Stephen Paul"
                  description="Networks & CyberSec"
                  twitter="https://twitter.com/lohtis"
                  instagram="https://www.instagram.com/bizzlekumben/"
                  linkedIn="https://www.linkedin.com/in/marvel-tisloh-190891ab"
                />
              </div>
              <div
                className="col-md-4 col-sm-6 mt-4"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <Card
                  image={cover}
                  heading="Jeremiah Oluranti"
                  description="FullStack Developer"
                  twitter=""
                  instagram=""
                  linkedIn=""
                />
              </div>
              {/* <!-- /.col-md-4 col-sm-6  --> */}
            </div>
            {/* <!-- /.row --> */}
          </div>
        </div>
      </section>

      <FeatureSection />
      <Footer />
    </>
  );
};
export default About;
