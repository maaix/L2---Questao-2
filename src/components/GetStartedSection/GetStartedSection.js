import './GetStartedSection.css'
import rightimage from '/home/Max/Documentos/projetos/Questao2/src/_assets/RightImage.svg'
let btnStyle = {
    background: '#060714',
    color: '#7780A1',
    border: 'solid #7780A1',
    width: '250px'
}
let btnStyle2 = {
    width: '250px',
    background: 'linear-gradient(104.42deg, #4745D0 0%, #2A27C9 60.23%)'
}

function GetStartedSection (){

    return (
        <div class = "get-started-section">
            <div class = "left-container">
                <h2>overline</h2>
                <h1>Spien ipsum scelerisque convallis fusce</h1>
                <p>Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.</p>
                <div class="btn-contain">
                    <a class="btn btn-primary btn-hover-efect p-3   fs-5" href="" role="button" style={btnStyle2}>Get started</a>
                    <a class="btn btn-primary btn-hover-efect-2  p-3 fs-5" href="" role="button" style= {btnStyle}>Learn more</a>
          
                </div> 
            </div>
            <div class = "right-container">
            <img src={rightimage} class = "right-image"></img>
            </div>

        </div>


    );
}
export default GetStartedSection;