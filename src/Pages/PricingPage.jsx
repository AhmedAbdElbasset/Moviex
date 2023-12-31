import Footer from "../Componants/Footer/Footer"
import Header from "../Componants/Header/Header"
import Pricing from "../Componants/Pricing/Pricing"
import SignBoard from "../Componants/SignBoard/SignBoard"

function PricingPage(){
    return(
        <>
        <Header/>
        <SignBoard headLine={'Pricing'}/>
        <Pricing/>
        <Footer/>
        </>
    )
}

export default PricingPage