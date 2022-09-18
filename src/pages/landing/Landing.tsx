import '../../assets/css/index.scss';
import Header from '../../components/Header';
import About from '../../components/landing/About/About';
import Main from '../../components/landing/Main/Main';
import Personal from '../../components/landing/Personal/Personal';
import Reviews from '../../components/landing/Reviews/Reviews';
import VideoCourses from '../../components/landing/VideoCourses/VideoCourses';
import Year from '../../components/landing/Year-course/Year';

function Landing(){

    return(
        <div>
            <Header></Header>
            <Main></Main>
            <About></About>
            <Personal></Personal>
            <VideoCourses></VideoCourses>
            <Year></Year>
            <Reviews></Reviews>
        </div>
    )
}
export default Landing;