// import blogImage3 from '../../../img/blog-4.jpg';

const Card = ({ paragraph, title, image }) => {
  return (
    <>
      <div className="individual-card">
        {/* <!-- Single Content Holder --> */}
        <div className="">
          <h4>{title}</h4>
          <div className="cards">
            <img className="card-image" src={image} alt="" width="500px" />
            <p className="mt-4">{paragraph}</p>
          </div>
        </div>
        {/* <!-- End of Contact Form Holder --> */}
      </div>
    </>
  );
};

export default Card;
