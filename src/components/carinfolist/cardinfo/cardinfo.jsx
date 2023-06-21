import './cardinfo.css'

function Cardinfo(props){
    return(
        <div className="cardinfo">
            <img src={props.img} alt="" />
            <div className='cardinfotxt' style={props.strong1 ? {flexDirection: "column-reverse"} : {}}>
                <span>{props.txtspan}</span>
                <strong>{props.txtstrong}</strong>
            </div>
        </div>
    )
}
export default Cardinfo