import Footer from '../../components/footer';
import Header from '../../components/header';
import BlogItems from './components/blogItems';
import blogImage1 from '../../img/blog-1.jpg';
import blogImage2 from '../../img/blog-2.jpg';
import blogImage3 from '../../img/blog-3.jpg';
import FeatureSection from '../../components/featureSection';



const Blog = () => {
  return (
    <div>
      <Header name="Blog" />

      <section id="blog" className="bg-grey">
        <div className="container">
          <div className="section-content">
            <div className="title-wrap mb-5" data-aos="fade-up">
              <h2 className="section-title">
                Latest <b>news</b>
              </h2>
              <p className="section-sub-title">
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et.
              </p>
            </div>
            <div class="row">
              {/* <!-- Blog --> */}
              <div class="col-md-12 blog-holder">
                <div class="row">
                  <BlogItems image={blogImage1} name="CODE" />
                  <BlogItems image={blogImage2} name="SPORTS" />
                  <BlogItems image={blogImage3} name="ECONOMY" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Features Section--> */}

      <FeatureSection />

      {/* <!-- End of Features Section--> */}
      <Footer />
    </div>
  );
};

export default Blog;
