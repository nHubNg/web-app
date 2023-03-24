import Footer from '../../components/footer';
import Header from '../../components/header';
import Card from './components/card';
import FeatureSection from '../../components/featureSection';

const About = () => {

  return (
    <>
      <Header
        name="About Us"
        bg="https://res.cloudinary.com/nhubnacademy/image/upload/q_auto:eco/v1678914632/nhubNigeria/courses_jtppir.jpg"
      />
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
                  image="https://res.cloudinary.com/nhubnacademy/image/upload/v1678914821/nhubNigeria/theodore_ayfqye.jpg"
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
                  image="https://res.cloudinary.com/nhubnacademy/image/upload/v1678914111/nhubNigeria/bash_yytl2u.jpg"
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
                  image="https://res.cloudinary.com/nhubnacademy/image/upload/v1678914707/nhubNigeria/nathan_rsitxx.jpg"
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
                  image="https://res.cloudinary.com/nhubnacademy/image/upload/v1678914784/nhubNigeria/sam_mffar3.jpg"
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
                  image="https://res.cloudinary.com/nhubnacademy/image/upload/v1678914696/nhubNigeria/nanbam_ldleqt.jpg"
                  heading="Nanbam Kumben"
                  description="Lead Incubation"
                  twitter="https://twitter.com/Naan_bee"
                  instagram="https://www.instagram.com/bizzlekumben/"
                  linkedIn="https://www.linkedin.com/in/nanbam-kumben-1270b9193/"
                />
              </div>

              <div
                className="col-md-4 col-sm-6 mt-4"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <Card
                  image="https://res.cloudinary.com/nhubnacademy/image/upload/v1678980680/nhubNigeria/shamsiyya_ianswu.jpg"
                  heading="Shamsiyya Bashir"
                  description="Project Manager"
                  twitter=""
                  instagram="https://www.instagram.com/shamsiyyah10/"
                  linkedIn="https://www.linkedin.com/in/shamsiya-bashir-432958185/"
                />
              </div>

              <div
                className="col-md-4 col-sm-6 mt-4"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <Card
                  image="https://res.cloudinary.com/nhubnacademy/image/upload/v1678984019/nhubNigeria/vicky_czj1hp.jpg"
                  heading="Efezino Victory"
                  description="Community Manager"
                  twitter="https://twitter.com/EfezinoVictory"
                  instagram="https://www.instagram.com/mosesefezinovictory/"
                  linkedIn="https://www.linkedin.com/in/efezino-victory-moses-066756261/"
                />
              </div>

              
               
              {/* <!-- /.col-md-4 col-sm-6  --> */}
            </div>

            <section id="skills" className="bg-white">
              <div className="about-staff">
                <h3>MEET OUR MASTER TRAINERS</h3>
              </div>
            </section>
            <div className="row text-center">
            <div
                className="col-md-4 col-sm-6 mt-4"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <Card
                  image="https://res.cloudinary.com/nhubnacademy/image/upload/v1678975344/nhubNigeria/nkem_mflr6e.jpg"
                  heading="Nkemdilim Okeke"
                  description="Master Trainer"
                  twitter=""
                  instagram="https://www.instagram.com/nkemm._/"
                  linkedIn=""
                />
              </div>

               <div
                className="col-md-4 col-sm-6 mt-4"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <Card
                  image="https://res.cloudinary.com/nhubnacademy/image/upload/v1679577617/nhubNigeria/6afc07b5-c285-489f-9b5e-8d7a632daf60_n6dmhh.jpg"
                  heading="Agwom Akare"
                  description="Master Trainer"
                  twitter="https://twitter.com/AkareAgwom"
                  instagram="https://www.instagram.com/beebela03/"
                  linkedIn=""
                />
              </div>

              <div
                className="col-md-4 col-sm-6 mt-4"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <Card
                  image="https://res.cloudinary.com/nhubnacademy/image/upload/v1679516958/nhubNigeria/image1_qlstcl.jpg"
                  heading="Ifeanyi Chioma "
                  description="Community Manager"
                  twitter="https://twitter.com/Ifeanyichioma47"
                  instagram="https://www.instagram.com/chioma.ifeanyi.927/"
                  linkedIn=""
                />
              </div>

              {/* <!-- /.col-md-4 col-sm-6  --> */}

              {/* <!-- /.col-md-4 col-sm-6  --> */}
            </div>

            <section id="skills" className="bg-white">
              <div className="about-staff">
                <h3>MEET OUR TEAM LEADS</h3>
                <p className="section-sub-title">
                  With our diverse collection of technology tracks, we have an
                  amazing teams of developers mentors and instructors to match
                  each.
                </p>
              </div>
            </section>
            <div className="row text-center">
              <div className="col-md-4 col-sm-6 mt-4" data-aos="fade-up">
                <Card
                  image="https://res.cloudinary.com/nhubnacademy/image/upload/q_auto:eco/v1678915083/nhubNigeria/Msad_qkde1q.jpg"
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
                  image="https://res.cloudinary.com/nhubnacademy/image/upload/v1679690051/nhubNigeria/IMG_7621_fendex.jpg"
                  heading="Terrence Eze"
                  description="UI/UX Developer"
                  twitter="https://twitter.com/jstdika"
                  instagram="https://www.instagram.com/_terrenceeze/"
                  linkedIn="https://www.linkedin.com/in/terrence-eze-075466186/"
                />
              </div>
              {/* <!-- /.col-md-4 col-sm-6 mt-4  --> */}
              <div
                className="col-md-4 col-sm-6 mt-4"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <Card
                  image="https://res.cloudinary.com/nhubnacademy/image/upload/v1678914875/nhubNigeria/wakzin_b23am3.jpg"
                  heading="Wakzin Gani"
                  description="AR/VR Developer"
                  twitter="https://twitter.com/gani_wakzin?t=17H0bKulvB859uZqDdQ3Rg&s=09"
                  instagram="https://www.instagram.com/gani_wakzin/"
                  linkedIn="https://www.linkedin.com/in/wakzin-gani-18365b1b7/"
                />
              </div>
              <div
                className="col-md-4 col-sm-6 mt-4"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <Card
                  image="https://res.cloudinary.com/nhubnacademy/image/upload/v1678914392/nhubNigeria/hagos_snaovj.jpg"
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
                  image="https://res.cloudinary.com/nhubnacademy/image/upload/v1678914628/nhubNigeria/marvel_zwmhny.jpg"
                  heading="Stephen Paul"
                  description="Networks & CyberSec"
                  twitter="https://twitter.com/lohtis"
                  instagram=""
                  linkedIn="https://www.linkedin.com/in/marvel-tisloh-190891ab"
                />
              </div>
              <div
                className="col-md-4 col-sm-6 mt-4"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <Card
                  image="https://res.cloudinary.com/nhubnacademy/image/upload/v1679682956/nhubNigeria/IMG_7620_ls29xu.jpg"
                  heading="Ediongsenyene Inokotong"
                  description="Frontend Developer"
                  twitter="https://twitter.com/IEdiong"
                  instagram=""
                  linkedIn="https://www.linkedin.com/in/iediong/"
                />
              </div>
              <div
                className="col-md-4 col-sm-6 mt-4"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <Card
                  image="https://res.cloudinary.com/nhubnacademy/image/upload/v1679690052/nhubNigeria/IMG_7622_efikeb.jpg"
                  heading="Jeremiah Oluranti Faluyi"
                  description="FullStack Developer"
                  twitter="https://twitter.com/_oluranti"
                  instagram=""
                  linkedIn="https://www.linkedin.com/in/jeremiah-faluyi-009b85206/"
                />
              </div>
              <div
                className="col-md-4 col-sm-6 mt-4"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <Card
                  image="https://res.cloudinary.com/nhubnacademy/image/upload/v1678914411/nhubNigeria/ife_eg88ng.jpg"
                  heading="Adeife Olugunna"
                  description="Data Analyst"
                  twitter="https://twitter.com/AdeifeEffective"
                  instagram="https://www.instagram.com/ade_effective/"
                  linkedIn="https://www.linkedin.com/in/olugunnaadeife/"
                />
              </div>

              <div
                className="col-md-4 col-sm-6 mt-4"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <Card
                  image="https://res.cloudinary.com/nhubnacademy/image/upload/v1679351694/nhubNigeria/5418f8fb-84fd-4644-ba68-e3404256a9a4_djktkz.jpg"
                  heading="Temitope Oke"
                  description="Data Analyst"
                  twitter="https://twitter.com/Temi_Oke_"
                  instagram="https://www.instagram.com/temi_flourish/"
                  linkedIn="https://www.linkedin.com/in/flourish-oke-a18668224/"
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
