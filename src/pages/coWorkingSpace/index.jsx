import Header from '../../components/header';
import Table from 'react-bootstrap/Table';
import Footer from '../../components/footer';
import FeatureSection from '../../components/featureSection';

const CoWorkingSpace = () => {
  return (
    <>
      <Header
        name="Co-Working Space"
        bg="https://res.cloudinary.com/nhubnacademy/image/upload/v1678914808/nhubNigeria/space_e5kxax.jpg"
      />
      <div className="container">
        <div className="title-wrap mb-5" data-aos="fade-up">
          <h2 className="section-title co-working-title">
            Our working spaces and prices are detailed below:
          </h2>
        </div>

        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Work Space</th>
              <th>Daily (&#8358;)</th>
              <th>Weekly (&#8358;)</th>
              <th>Monthly (&#8358;)</th>
              <th>Quarterly (&#8358;)</th>
              <th>Yearly (&#8358;)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Co-Working Space</td>
              <td>2,200</td>
              <td>6,000</td>
              <td>20,000</td>
              <td>60,000</td>
              <td>120,000</td>
            </tr>
            <tr>
              <td>Dedicated Desk</td>
              <td>3,200</td>
              <td>12,000</td>
              <td>40,000</td>
              <td>120,000</td>
              <td>480,000</td>
            </tr>
            <tr>
              <td>Private Offices</td>
              <td>5,000</td>
              <td>25,000</td>
              <td>100,000</td>
              <td>300,000</td>
              <td>1,000,000</td>
            </tr>
          </tbody>
        </Table>

        <Table striped bordered hover className="co-working-table">
          <thead>
            <tr>
              <th>Meeting Rooms</th>
              <th>Hourly (&#8358;)</th>
              <th>Daily (&#8358;)</th>
              <th>Capacity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Executive Meeting Room</td>
              <td>5,000</td>
              <td>40,000</td>
              <td>20</td>
            </tr>
            <tr>
              <td>Conference Hall 1</td>
              <td>6,000</td>
              <td>48,000</td>
              <td>40</td>
            </tr>
            <tr>
              <td>Conference Hall 2</td>
              <td>6,500</td>
              <td>52,000</td>
              <td>50</td>
            </tr>
          </tbody>
        </Table>

        <div className="co-working-div">
          <h5>Virtual Office - &#8358;100,000/Year</h5>
          <h5>Shared Office Space - &#8358;20,000/Month</h5>
        </div>

        <div className="co-working-div">
          <h5>
            We offer fast and affordable internet services, constant power supply and backup
            power supply to our clients so as to ensure a seamless and
            satisfactory experience.
          </h5>
        </div>

        <div className="about-staff">
          <h3>TAKE A LOOK AT OUR CO WORKING SPACE</h3>
        </div>

        <div className="row text-center mb-4">
          <div className="col-md-4 col-sm-6 mt-4" data-aos="fade-up">
            <img
              src="https://res.cloudinary.com/nhubnacademy/image/upload/nhubNigeria/v1678914782/room7_tlv3gv.jpg"
              alt=""
            />
          </div>
          {/* <!-- /.col-md-4 col-sm-6  --> */}
          <div
            className="col-md-4 col-sm-6 mt-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img
              src="https://res.cloudinary.com/nhubnacademy/image/upload/v1678914770/nhubNigeria/room2_ozrfpx.jpg"
              alt=""
            />
          </div>
          {/* <!-- /.col-md-4 col-sm-6  --> */}
          <div
            className="col-md-4 col-sm-6 mt-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img
              src="https://res.cloudinary.com/nhubnacademy/image/upload/v1678914775/nhubNigeria/room3_fynmmx.jpg"
              alt=""
            />
          </div>
          <div
            className="col-md-4 col-sm-6 mt-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img
              src="https://res.cloudinary.com/nhubnacademy/image/upload/v1678914782/nhubNigeria/room4_bpxenx.jpg"
              alt=""
            />
          </div>
          <div
            className="col-md-4 col-sm-6 mt-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img
              src="https://res.cloudinary.com/nhubnacademy/image/upload/v1678914788/nhubNigeria/room5_n1g2ib.jpg"
              alt=""
            />
          </div>
          <div
            className="col-md-4 col-sm-6 mt-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img
              src="https://res.cloudinary.com/nhubnacademy/image/upload/v1678914777/nhubNigeria/room6_j7cdfy.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <FeatureSection />
      <Footer />
    </>
  );
};

export default CoWorkingSpace;
