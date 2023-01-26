import testi from '../../../img/testi-1.jpg';

const Testimonials = (props) => {
  return (
    <>
      <div className="heading-section text-center">
        <h2 id="user-testimonial">User Testimonials</h2>
      </div>

      <div className="testi-item text-center" id="test-items">
        <i className="testi-icon fa fa-3x fa-quote-left"></i>
        <h4 className="testi-text text-center">{props.content}</h4>
        <div className="testi-meta-inner d-flex justify-content-center align-items-center">
          <div className="testi-img ">
              <img src={testi} alt="" />
            </div>
          <div className="testi-details">
            <p className="testi-author mb-0 font-weight-bolder">John Doe</p>
            <p className="testi-desc mb-0">Web Designer</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
