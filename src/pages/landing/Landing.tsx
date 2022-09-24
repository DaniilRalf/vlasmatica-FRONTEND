import '../../assets/css/index.scss';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import About from '../../components/landing/About/About';
import Main from '../../components/landing/Main/Main';
import Personal from '../../components/landing/Personal/Personal';
import Reviews from '../../components/landing/Reviews/Reviews';
import VideoCourses from '../../components/landing/VideoCourses/VideoCourses';
import Year from '../../components/landing/Year-course/Year';
import Modal from '../../UI/Modal';

function Landing(){

    return(
        <div>
            <Modal></Modal>

            <Header></Header>

            <Main></Main>
            <About></About>
            <Personal></Personal>
            <VideoCourses></VideoCourses>
            <Year></Year>
            <Reviews></Reviews>

            <Footer></Footer>
        </div>
    )
}
export default Landing;