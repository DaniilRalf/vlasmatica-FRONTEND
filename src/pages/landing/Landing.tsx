import '../../assets/css/index.scss';
import Header from '../../components/Header';
import About from '../../components/landing/About/About';
import Main from '../../components/landing/Main/Main';
import Personal from '../../components/landing/Personal/Personal';

function Landing(){

    return(
        <div>
            <Header></Header>
            <Main></Main>
            <About></About>
            <Personal></Personal>
        </div>
    )
}
export default Landing;