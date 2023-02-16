import blogImage3 from '../../../img/blog-4.jpg';

const Card = ({ paragraph, title }) => {
  return (
    <>
      <div className="row">
        {/* <!-- Single Content Holder --> */}
        <div className="col-md-8 offset-md-2 mt-4">
          <h4>{title}</h4>
          <img className="float-left" width="320px" src={blogImage3} alt="" />
          <p>{paragraph}</p>
        </div>
        {/* <!-- End of Contact Form Holder --> */}
      </div>
    </>
  );
};

export default Card;
