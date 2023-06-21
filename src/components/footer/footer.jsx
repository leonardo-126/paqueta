import Footerimg from './footerlist/footerlist'
import './footer.css'
function Footer(){
    return(
        <div className="title-footer">
            <h1>AS MELHORES MARCAS ESTÃO AQUI!</h1>
            <div className="container-footer">
            <Footerimg imgfoo='/adidas.png'></Footerimg>
            <Footerimg imgfoo='/viamarte.png'></Footerimg>
            <Footerimg imgfoo='/bebece.png'></Footerimg>
            <Footerimg imgfoo='/dumo.png'></Footerimg>
            </div>
        </div>
    )
}
export default Footer