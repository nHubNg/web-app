import Header from "../../components/header";
import Table from 'react-bootstrap/Table';
import Footer from "../../components/footer";
import FeatureSection from "../../components/featureSection";

const CoWorkingSpace = () => {
    return ( <>
    <Header name='Co-Working Space'/>
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
          <th>Daily (#)</th>
          <th>Weekly (#)</th>
          <th>Monthly (#)</th>
          <th>Quarterly (#)</th>
          <th>Yearly (#)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Co-Working Space</td>
          <td>2,000</td>
          <td>10,000</td>
          <td>40,000</td>
          <td>120,000</td>
          <td>480,000</td>
        </tr>
        <tr>
          <td>Dedicated Desk</td>
          <td>5,000</td>
          <td>25,000</td>
          <td>100,000</td>
          <td>300,000</td>
          <td>1,000,000</td>
        </tr>
        <tr>
          <td>Private Offices</td>
          <td>10,000</td>
          <td>50,000</td>
          <td>200,000</td>
          <td>600,000</td>
          <td>2,400,000</td>
        </tr>
      </tbody>
    </Table>

    <Table striped bordered hover className="co-working-table">
      <thead>
        <tr>
          <th>Meeting Rooms</th>
          <th>Hourly (#)</th>
          <th>Daily (#)</th>
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
          <td>PConference Hall 2</td>
          <td>6,500</td>
          <td>52,000</td>
          <td>50</td>
        </tr>
      </tbody>
    </Table>

    <div className="co-working-div">
    <h5>Virtual Office - #100,000/Year</h5>
    <h5>Shared Office Space - #20,000/Month</h5>
    </div>
    </div>


    <FeatureSection />  
    <Footer />
    </> );
}
 
export default CoWorkingSpace;