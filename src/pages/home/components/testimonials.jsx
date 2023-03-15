const Testimonials = ({ content, name, title, image }) => {
  return (
    <>
      <div className="heading-section text-center">
        <h2 id="user-testimonial">User Testimonials</h2>
      </div>

      <div className="testi-item text-center" id="test-items">
        <i className="testi-icon fa fa-3x fa-quote-left"></i>
        <h4 className="testi-text text-center">{content}</h4>
        <div className="testi-meta-inner d-flex justify-content-center align-items-center">
          <div className="testi-img ">
            <img src={image} alt="" width="100%" height="100%" />
          </div>
          <div className="testi-details">
            <p
              className="testi-author mb-0 font-weight-bolder"
              style={{ fontWeight: 'bold' }}
            >
              {name}
            </p>
            <p className="testi-desc mb-0">{title}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
