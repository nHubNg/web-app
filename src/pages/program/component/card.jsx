import blogImage3 from '../../../img/blog-4.jpg';

const Card = ({ paragraph, title }) => {
  return (
    <>
      <div className="individual-card">
        {/* <!-- Single Content Holder --> */}
        <div className="">
          <h4>{title}</h4>
          <div className="cards">
            <img className="card-image" width="320px" src={blogImage3} alt="" />
            <p>{paragraph}</p>
          </div>
        </div>
        {/* <!-- End of Contact Form Holder --> */}
      </div>
    </>
  );
};

export default Card;
