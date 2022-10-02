import { useRef } from 'react';
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
import Social from '../../UI/Social';

function Landing(){

    const reviews = useRef(null);
    const courses = useRef(null);
    const about = useRef(null);
    const personal = useRef(null);
    const year = useRef(null);
    const main = useRef(null);

    return(
        <div>
            <Modal></Modal>

            <Header 
                refAbout={about}
                refCourses={courses} 
                refReviews={reviews} 
                refMain={main} 
            ></Header>
            
            <div ref={main}></div>
            <Main
                refPersonal={personal} 
                refYear={year} 
            ></Main>

            <div ref={about}></div>
            <About></About>

            <div ref={personal}></div>
            <Personal></Personal>

            <div ref={courses}></div>
            <VideoCourses></VideoCourses>

            <div ref={year}></div>
            <Year></Year>

            <div ref={reviews}></div>
            <Reviews></Reviews>

            <Footer></Footer>
        </div>
    )
}
export default Landing;