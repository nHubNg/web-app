

const Team = ({image}) => {
    return ( <>
    <section className="bg-white section-content">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-5 offset-lg-1 mb-5 mb-lg-0"
              data-aos="fade-right"
            >
              <img src={image} alt="" />
            </div>
            <div className="col-lg-4 offset-lg-1" data-aos="fade-left">
              <h2 className="mb-4">
                Best solution to create any website. Pay once.
              </h2>
              <p className="mb-4">
                I am text block. Click edit button to change this text. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed nulla quo quidem quas consectetur provident voluptates iste sequi facere pariatur optio animi perferendis quia alias voluptate, quos modi laudantium quaerat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam minima ab deleniti quisquam optio. Laboriosam fugiat eius magni, quaerat nulla nesciunt neque minus? Nam consequatur enim nobis ut accusamus culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, dicta minus. Facilis ipsam facere fugit nemo amet, officia fuga ullam labore accusantium commodi blanditiis, optio ipsa eius quis esse consequatur!
              </p>
            </div>
          </div>
        </div>
      </section>
    </> );
}
 
export default Team;