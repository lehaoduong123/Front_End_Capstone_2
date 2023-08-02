import { Link } from 'react-router-dom';
import bruschettaImage from './assets/bruschetta.jpg';
import greekSaladImage from './assets/greek-salad.jpg';
import lemonDessertImage from './assets/lemon-dessert.jpg';
import './WeekSpecials.css';
import pages from '../../../utils/pages';
import MealCard from './MealCard';

const meal = [
    {
        name: 'Greek Salad',
        image: greekSaladImage,
        price: '$12.99',
        description: `The famous greek salad of crispy lettuce, peppers, olives and 
          our Chicago style feta cheese, garnished with crunchy garlic and rosemary 
          croutons.`,
      },
      {
        name: 'Bruschetta',
        image: bruschettaImage,
        price: '$5.99',
        description: `Our Bruschetta is made from grilled bread that has been 
          smeared with garlic and seasoned with salt and olive oil.`,
      },
      {
        name: 'Lemon Dessert',
        image: lemonDessertImage,
        price: '$5.00',
        description: `This comes straight from grandma's recipe book, every last 
          ingredient has been sourced and is as authentic as can be imagined.`,
      },
];

const WeekSpecials = () => {
    return (
        <section className='container grid week-specials'>
            <div className='week-specials-header'>
                <h2>Week Specials</h2>
                <Link className='button-primary' to={pages.get('orderOnline').path}>
                    View full menu
                </Link>
            </div>
            <div className='week-specials-meals'>
                {meal.map((meal, index) => 
                <MealCard key={index} meal={meal} />
                )}
            </div>
        </section>
    );
};

export default WeekSpecials;