
import './TopSect.css';
import logo from '/home/Max/Documentos/projetos/react-app/src/_assets/Sygnet.svg'
const btnStyle = {
  background: '#060714',
  color: '#7780A1',
  border: 'solid #7780A1'
}
const btnStyle2 = {
  width: '250px',
  background: 'linear-gradient(104.42deg, #4745D0 0%, #2A27C9 60.23%)'
}

function TopSection() {
    return (
      
      <div className="top-section">
          
        <nav class="navbar logo-container position-absolute top-0 start-0">
          <div class="container">
              <a class="navbar-brand" href="#">
              <img class = "logo"src={logo} alt="Bootstrap" width="30" height="24"></img>
              </a>
          </div>
        </nav>
        <nav class="nav-menu position-absolute top-0 start-50 translate-middle-x">
            <a class=" btn-hover-efect-2 nav-link nav-menu-link active" aria-current="page" href="#">Auctions</a>
            <a class="btn-hover-efect-2 nav-link" href="#">Roudmap</a>
            <a class="btn-hover-efect-2 nav-link" href="#">Discover</a>
            <a class="btn-hover-efect-2 nav-link" href="#">Community</a>
        </nav>
        <div class="btn-container position-absolute top-0 end-0">
          <a class="btn btn-primary btn-hover-efect btn-aditional w-50 p-3 h-25  fs-5" href="#" role="button" style={btnStyle}>Contact</a>
          <a class="btn btn-primary btn-hover-efect-2 btn-aditional w-50 p-3 h-25  fs-5" href="#" role="button" style={btnStyle2}>My acount</a>
          
        </div>  
      </div>
    );
  }
  
  export default TopSection;
  