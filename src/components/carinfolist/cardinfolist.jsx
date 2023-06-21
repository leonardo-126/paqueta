import Cardinfo from './cardinfo/cardinfo'
import './cardinfolist.css'

function Cardinfolist(){
    return  (
        <div className="cardinfolist">
            <div className="cardinfolist-content">
                <Cardinfo img="/pague.png" txtspan="PAGUE EM ATE 10X" txtstrong="SEM JUROS"></Cardinfo>
                <Cardinfo img="/retire.png" strong1={true} txtstrong="RETIRE GRÁTIS" txtspan="EM NOSSAS LOJAS"></Cardinfo>
                <Cardinfo img="/ganhe.png" txtstrong="GANHE 20% DE DESCONTO*"></Cardinfo>
                <Cardinfo img="/frete.png" strong1={true} txtstrong="FRETE GRÁTIS " txtspan="PARA REGIÕES SUL E SUDESTE*"></Cardinfo>
                <Cardinfo img="/primeira.png" txtspan="PRIMEIRA TROCA GRÁTIS"></Cardinfo>
            </div>
        </div>
    )
}
export default Cardinfolist