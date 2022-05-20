import ClientTest from '../../Components/Client Testimonials';
import Header from './1. Header';
import MainContent from './2. Main Content';
import MainContent2 from './2. Main Content2';
import MainContent3 from './2. Main Content3';
import LineImages from '../../Components/LineImages';
import Footer from './3. Footer';
import './styles.css';

function Home() {
  return (
    <div className ='home-content'>
        <Header />
        <MainContent />
        <MainContent2 />
        <MainContent3 />
        <ClientTest />
        <LineImages />
        <Footer />
    </div>
  );
}

export default Home;