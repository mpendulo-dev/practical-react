import Navbar from '../components/Navbar';
import Props from '../components/Props';
import State from '../components/UseState';
import Footer from '../components/Footer';

const Home = () => {
    const name = "Mpendulo";
    const city = "Mbombela";

    return (
        <div className='main'>
            <Navbar />
            <main>
                <Props name={name} city={city}/>
                <State/>
            </main>
            <footer className="fixed-bottom">
                <Footer/>
            </footer>

        </div>
    );
};

export default Home;
