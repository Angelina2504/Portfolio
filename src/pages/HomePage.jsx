import '../styles/home.css';
import photoProfil from "../assets/photoProfile.png"

function HomePage() {
    return (
    
    <section className='home'>
    
    <h1>Bonjour ! Je suis Angélina Droz</h1>
    <h2>Developpeuse fullstack</h2>

    <img src={photoProfil} alt="Myself's Picture" />
    
    <p>Les technos que je connais : </p>
    <img src="" alt="" />
   
    <p>Les outils que je manipules: </p>
    
    </section>

    
    );
}

export default HomePage;