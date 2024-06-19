import '../styles/home.css';
import photoProfil from "../assets/photoProfile.png"
import html5 from "/src/assets/html5.png";
import css3 from "/src/assets/css3.png";
import javascript from "/src/assets/js.png";
import nodejs from "/src/assets/nodejs.png";
import react from "/src/assets/react.png";

function HomePage() {
    return (
    
    <section className='home'>
    <h1>Bonjour ! Je suis Angélina Droz</h1>
    <h2>Developpeuse Web fullstack</h2>

    <img src={photoProfil} alt="Myself's Picture" />

    <p className='prez'>En reconversion professionnelle pour devenir développeuse web, je suis à la recherche d'une alternance pour mettre en pratique mes compétences. Avant de me lancer dans le développement web, j'ai travaillé dans différents domaines tels que l'organisation de projets culturels, la librairie, la gestion d'un pressing et en tant qu'assistante d'éducation. Ces expériences m'ont permis de développer diverses compétences en gestion de projet, en organisation et en travail en équipe !</p>
    
    <h2>Mes technos </h2>
    <img src={html5} alt="icon html5" />
    <img src={css3} alt="icon css3" />
    <img src={javascript} alt="javascript" />
    <img src={react} alt="react" />
    <img src={nodejs} alt="nodejs" />
   
    
    </section>

    
    );
}

export default HomePage;