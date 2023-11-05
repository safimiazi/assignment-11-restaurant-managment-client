import About from "../../Components/About/About";
import Banner from "../../Components/Banner/Banner";
import CardSection from "../../Components/CardSection/CardSection";
import Contact from "../../Components/Contact/Contact";
import Gallery from "../../Components/Gallery/Gallery";


const Home = () => {
    return (
        <div className="space-y-32">
            <Banner></Banner>
            <CardSection></CardSection>
            <About></About>
            <Gallery></Gallery>
            <Contact></Contact>
        </div>
    );
};

export default Home;