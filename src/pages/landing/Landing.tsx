import '../../assets/css/index.scss';
import Header from '../../components/Header';
import About from '../../components/landing/About/About';
import Main from '../../components/landing/Main/Main';
import Personal from '../../components/landing/Personal/Personal';
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
        </div>
    )
}
export default Landing;