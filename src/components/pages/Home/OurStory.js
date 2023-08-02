import chefsMarioAndAdrianAImage from './assets/chefs-mario-and-adrian_a.jpg';
import chefsMarioAndAdrianBImage from './assets/chefs-mario-and-adrian_b.jpg';
import './OurStory.css';

const OurStory = () => {
    return (
        <section className='container grid our-story'>
            <div className='our-story-description'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec euismod, nisl sed cursus blandit, elit elit vehicula
                    nunc, sed ultricies arcu elit vitae eros. Nulla facilisi.
                    Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
                    facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi.
                    Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
                    facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi.
                </p>
                <div className='our-story-chefs'>
                    <img src={chefsMarioAndAdrianAImage} alt='Chefs Mario and Adrian' />
                    <img src={chefsMarioAndAdrianBImage} alt='Chefs Mario and Adrian' />
                </div>
            </div>
        </section>
    );
};

export default OurStory;
