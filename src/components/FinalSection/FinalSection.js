import fulllogo from '/home/Max/Documentos/projetos/react-app/src/_assets/fulllogo.svg'
import instagram from '/home/Max/Documentos/projetos/react-app/src/_assets/instagram.svg'
import facebook from '/home/Max/Documentos/projetos/react-app/src/_assets/facebook.svg'
import linkedin from '/home/Max/Documentos/projetos/react-app/src/_assets/linkedin.svg'
import github from '/home/Max/Documentos/projetos/react-app/src/_assets/github.svg'
import twitter from '/home/Max/Documentos/projetos/react-app/src/_assets/twitter.svg'
import './FinalSection.css'
const btnStyle2 = {
    width: '250px',
    background: 'linear-gradient(104.42deg, #4745D0 0%, #2A27C9 60.23%)'
}
const iconShape = {
    height: '36px',
    width: '36px',
}
function FinalSection(){
    return(
        <div class = "final-section section-default">
            <div class = "final-section-1 section-form">
                <img class = "position-relative" src ={fulllogo}></img>
                
                <nav class="nav-menu position-relative">
                    <a class="nav-link nav-menu-link active" aria-current="page" href="#">Auctions</a>
                    <a class="nav-link" href="#">Roudmap</a>
                    <a class="nav-link" href="#">Discover</a>
                </nav>
            
            </div>
            <div class = "final-section-2 section-form">
                <nav class="nav-menu nav-menu-2">
                    <a class="nav-link nav-menu-link active" aria-current="page" href="#">Auctions</a>
                    <a class="nav-link" href="#">Roudmap</a>
                    <a class="nav-link" href="#">Discover</a>
                    <a class="nav-link disabled">Community</a>
                </nav>
                <a class="btn btn-primary  position-relative p-3  fs-5" href="#" role="button" style={btnStyle2}>Get started</a>
                <div class ="d-flex icons flex-row m-3">
                    <img class = "" style={iconShape} src ={facebook}></img>
                    <img class = ""style={iconShape} src ={linkedin}></img>
                    <img class = ""style={iconShape} src ={github}></img>
                    <img class = ""style={iconShape} src ={twitter}></img>
                    <img class = ""style={iconShape} src ={instagram}></img>
                </div>
               
            </div>
            <div class = "final-section-3 section-form">
                <p class = "position-relative">Nibh volutpat, aliquam id sagittis elementum. Pellentesque laoreet velit, sed egestas in. Id nam semper dolor tellus vulputate eget turpis. </p>
                
                <div class="input-group input position-relative mb-5">
                    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"></input> 
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                     
                </div>
                
            </div>

        </div>

    );
}
export default FinalSection;