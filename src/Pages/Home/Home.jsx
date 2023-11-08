import { Helmet } from "react-helmet-async";
import About from "../../Components/About/About";
import Banner from "../../Components/Banner/Banner";
import CardSection from "../../Components/CardSection/CardSection";
import Contact from "../../Components/Contact/Contact";
import Gallery from "../../Components/Gallery/Gallery";
import ImgSection from "../../Components/ImgSection/ImgSection";


const Home = () => {
    return (
        <div className="space-y-32">
            <Helmet>
            <title>Granny is the best restaurant management system</title>
            </Helmet>
            <Banner></Banner>
            <CardSection></CardSection>
            <About></About>
            <Gallery></Gallery>
            <ImgSection></ImgSection>
            <Contact></Contact>
        </div>
    );
};

export default Home;