import Footer from "../Componants/Footer/Footer"
import Header from "../Componants/Header/Header"
import SignBoard from "../Componants/SignBoard/SignBoard"
import TvList from "../Componants/TvPage/Tv"

function TvPage(){
    return(
        <>
            <Header/>
            <SignBoard headLine={'Tv Shows'}/>
            <TvList/>
            <Footer/>
        </>
    )
}

export default TvPage