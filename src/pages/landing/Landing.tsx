import '../../assets/css/index.scss';
import Header from '../../components/Header';
import About from '../../components/landing/About/About';
import Main from '../../components/landing/Main/Main';

function Landing(){

    return(
        <div>
            <Header></Header>
            <Main></Main>
            <About></About>
        </div>
    )
}
export default Landing;