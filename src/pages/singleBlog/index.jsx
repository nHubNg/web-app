import Footer from "../../components/footer";
import Header from "../../components/header";
import blogImage4 from '../../img/blog-4.jpg';
import FeatureSection from "../../components/featureSection";


const SingleBlog = () => {
    return ( <>

        <Header name='Single Blog' />


        {/* <!-- Contact Form Section --> */}
<section id="single-content" className="bg-white">
    <div className="container">
        <div className="section-content blog-content">
            
            <div className="row">
                {/* <!-- Single Content Holder --> */}
                <div className="col-md-8 offset-md-2 mt-4">
                    <h4>Lorem ipsum dolor sit amet</h4>
                    <img className="float-left" width="320px" src={blogImage4} alt="" />
                    <p>Consectetur adipisicing elit. Sint, corrupti deleniti, rem mollitia quam cum quo, animi ipsa praesentium officiis ducimus! Modi aperiam, nulla ipsum, totam natus consequuntur fugiat blanditiis.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste harum, ut magni cupiditate. Nihil ipsum debitis voluptates voluptate illum consectetur sapiente dolorem facilis, eum nobis sequi eveniet assumenda vel voluptatem!</p>
                    <p>Consectetur adipisicing elit. Sint, corrupti deleniti, rem mollitia quam cum quo, animi ipsa praesentium officiis ducimus! Modi aperiam, nulla ipsum, totam natus consequuntur fugiat blanditiis.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste harum, ut magni cupiditate. Nihil ipsum debitis voluptates voluptate illum consectetur sapiente dolorem facilis, eum nobis sequi eveniet assumenda vel voluptatem!</p>
                </div>
                {/* <!-- End of Contact Form Holder --> */}
            </div>
        </div>
    </div>
</section>
{/* <!-- End of Contact Form Section -->	 */}

        <FeatureSection />

        <Footer />

    </> );
}
 
export default SingleBlog;