import './MisfotosContainer.css';


const MisfotosContainer = (props)=>{
    return(
        <section className="fotos_section">
            <h1 className= "fotos_titulo">Mis Fotos</h1>
            <div className="fotos_container">
                {props.children}
            </div>
        </section>
    )
}
export default MisfotosContainer