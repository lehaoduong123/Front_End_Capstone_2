import {Link} from 'react-router-dom';
import restaurantFoodImage from './assets/restaurant-food.jpg';
import './Hero.css';
import pages from '../../../utils/pages';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container grid">
                <div className="hero-information">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        We are a family onwed Medterranean restaurant located in the heart of Chicago.
                        We offer a variety of dishes from different countries in the Medterranean region.
                        We focue on traditional recipes served with a modern twist.
                    </p>
                    <Link className='button-primary'  to= {pages.get('bookings').path}>Reserver a table</Link>
                </div>
                <img className='hero-image' src={restaurantFoodImage} alt='Restaurant food' />
            </div>
        </section>
    );
}

export default Hero;