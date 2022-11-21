import './TitleSection.css'
import background from '/home/Max/Documentos/projetos/react-app/src/_assets/Circles.png'
import vector1 from '/home/Max/Documentos/projetos/react-app/src/_assets/Vector.png'
import frame1 from '/home/Max/Documentos/projetos/react-app/src/_assets/Frame.svg'
import logo1 from '/home/Max/Documentos/projetos/react-app/src/_assets/Vector1.svg'
import logo2 from '/home/Max/Documentos/projetos/react-app/src/_assets/Vector2.svg'
import logo3 from '/home/Max/Documentos/projetos/react-app/src/_assets/Vector3.svg'
import logo4 from '/home/Max/Documentos/projetos/react-app/src/_assets/Vector4.svg'
const subtitle = {
    'text-transform': 'uppercase'
}


function TitleSection(){
    return (
        <div className="title-section ">
          
            <img class = "background-image"src={background}></img>
            <div className="title-header position-absolute top-40 start-50">
                <h2 style={subtitle}>Non fungible tokens</h2>
                <h1 class='main-title'>A new NFT<img class ="vector"src={vector1} alt="Bootstrap" width="24" height="24"></img></h1>
                <h1 class='main-title'> <img class ="frame"src={frame1} alt="Bootstrap" width="24" height="24"></img>Experience</h1>
                <h2 >Discover, colect and sell</h2>
                
            </div>
            <div class = "logos position-absolute top-50 start-100 translate-middle">
                <img class = "frame"src={logo1}></img>
                <img class = "frame"src={logo2}></img>
                <img class = "frame"src={logo3}></img>
                <img class = "frame"src={logo4}></img>
            </div>
        </div>

    );

}
export default TitleSection;