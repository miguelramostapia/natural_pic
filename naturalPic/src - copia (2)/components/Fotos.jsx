import './Fotos.css';

const Fotos = (props)=>{
    return(
        <div className='fotos'>
            <img className='fotos_img' src={props.url}></img>
            <h2 className='fotos_name'>{props.name}</h2>
            <h2 className='fotos_desc'>{props.desc}</h2>
        </div>
    )
}
export default Fotos