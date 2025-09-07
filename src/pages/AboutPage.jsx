import '../styles/about-page.css';
import marco_me from '../assets/meimage.jpg';
import family from '../assets/family1.jpg';
import hiking from '../assets/hiking1.jpg';
import FlipCard from '../components/FlipCard';

export default function AboutPage() {
  return (
    <div className="about-section">
        <div className="about-card">
            <h2 className="cs-title">Get To Know Me</h2>
            <p className="cs-text">                
                As a software developer, I immerse myself in the intricate world of coding, crafting innovative solutions to real-world problems. However, beyond the screen, I find solace and rejuvenation in the great outdoors. Whether hiking through lush forests or camping beneath starlit skies, nature offers me a canvas to unwind and reconnect with the world around me. Yet, amidst my tech pursuits and outdoor adventures, nothing compares to the warmth of family time. Sharing laughter, stories, and experiences with loved ones brings a sense of fulfillment and joy that transcends any other pursuit. Thus, my life is a harmonious blend of coding challenges, outdoor escapades, and cherished moments with family, each enriching the tapestry of my existence in its unique way.
            </p>
        </div>
        <div className="about-images">
            {/*<figure className='image-container'>
                <img src={marco_me} alt="Me Marco" className="about-image" />
                <figcaption className="image-caption">Software Developer</figcaption>
            </figure>
            */}
           <FlipCard
                imgSrc={marco_me}
                alt="Me Marco"
                caption="Software Developer"
                title="Software Developer"
                details="A full stack developer, focusing on clean UI and reliable APIs."
            />
            <FlipCard
                imgSrc={family}
                alt="Family"
                caption="Family"
                title="Family"
                details="Spending quality time with my loved ones is my top priority and greatest joy."
            />
            <FlipCard
                imgSrc={hiking}
                alt="Backpacking"
                caption="Backpacking"
                title="Backpacking"
                details="Exploring nature through hiking and camping helps me recharge and find balance."
            />
        </div>
    </div>
  );
}