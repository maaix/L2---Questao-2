import './Cards.css'

import users from './avatares.svg'
import heart from '/home/Max/Documentos/projetos/Questao2/src/_assets/hearticon.svg'
import image from '/home/Max/Documentos/projetos/Questao2/src/_assets/Image.svg'
import image1 from '/home/Max/Documentos/projetos/Questao2/src/_assets/Image1.svg'
import image2 from '/home/Max/Documentos/projetos/Questao2/src/_assets/image2.svg'
import image3 from '/home/Max/Documentos/projetos/Questao2/src/_assets/Image3.svg'
import image4 from '/home/Max/Documentos/projetos/Questao2/src/_assets/Image4.svg'
const cardShape = {
    background: '#060714',
    border: 'solid 1px #7780A1'
    
}
const btnShape = {
    background: 'rgba(81, 76, 255, 0.15)',
    color: '#514CFF',
    fontfamily: 'Sora',
    border: 'solid 1px rgba(81, 76, 255, 0.15)',
    width: '150px',
   
}
const imgShape = {
    'border-radius': '15px'
}
function Cards(){
    return (
        <div className="cards-area">
            <div id="carouselExampleControls" class="carousel slide" data-bs-interval="false">
                <div class="carousel-inner">
                    
                    
                    
                    
                    <div class="carousel-item active">
                        <div class = "cards-wrapper">
                            <div class="card" style={cardShape}>
                                <img src={image3} class="card-img-top" alt="Bootstrap" style={imgShape}></img>
                                <div class="card-body">
                                    <div class = "cards-title">
                                        <h5 class="card-title">Card title</h5>
                                        <a href="#" class="btn btn-hover-efect btn-primary" style={btnShape}>3.19 ETH</a>
                                    </div>
                                    
                                    <p class="card-text">2:41 min left</p>

                                    <div class = "user-interact">
                                        <div class = "user-icons">
                                        <img src={users} class="" alt=""></img>
                                        </div>
                                        <p class = "small-text">35 people are bidding</p>
                                        <div class = "user-likes">
                                        <img src={heart} class="like-icon" alt=""></img>
                                        <p class = "small-text">120</p>

                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="card" style={cardShape}>
                                <img src={image} class="card-img-top" alt="Bootstrap" style={imgShape}></img>
                                <div class="card-body">
                                    <div class = "cards-title">
                                        <h5 class="card-title">Card title</h5>
                                        <a href="#" class="btn btn-hover-efect btn-primary" style={btnShape}>3.19 ETH</a>
                                    </div>
                                    
                                    <p class="card-text">2:41 min left</p>

                                    <div class = "user-interact">
                                        <div class = "user-icons">
                                        <img src={users} class="" alt=""></img>
                                        </div>
                                        <p class = "small-text">35 people are bidding</p>
                                        <div class = "user-likes">
                                        <img src={heart} class="like-icon" alt=""></img>
                                        <p class = "small-text">120</p>

                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="card" style={cardShape}>
                                <img src={image2} class="card-img-top" alt="Bootstrap" style={imgShape}></img>
                                <div class="card-body">
                                    <div class = "cards-title">
                                        <h5 class="card-title">Card title</h5>
                                        <a href="#" class="btn btn-hover-efect btn-primary" style={btnShape}>3.19 ETH</a>
                                    </div>
                                    
                                    <p class="card-text">2:41 min left</p>

                                    <div class = "user-interact">
                                        <div class = "user-icons">
                                        <img src={users} class="" alt=""></img>
                                        </div>
                                        <p class = "small-text">35 people are bidding</p>
                                        <div class = "user-likes">
                                        <img src={heart} class="like-icon" alt=""></img>
                                        <p class = "small-text">120</p>

                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="card" style={cardShape}>
                                <img src={image4} class="card-img-top" alt="Bootstrap" style={imgShape}></img>
                                <div class="card-body">
                                    <div class = "cards-title">
                                        <h5 class="card-title">Card title</h5>
                                        <a href="#" class="btn btn-hover-efect btn-primary" style={btnShape}>3.19 ETH</a>
                                    </div>
                                    
                                    <p class="card-text">2:41 min left</p>

                                    <div class = "user-interact">
                                        <div class = "user-icons">
                                        <img src={users} class="" alt=""></img>
                                        </div>
                                        <p class = "small-text">35 people are bidding</p>
                                        <div class = "user-likes">
                                        <img src={heart} class="like-icon" alt=""></img>
                                        <p class = "small-text">120</p>

                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="card" style={cardShape}>
                                <img src={image1} class="card-img-top" alt="Bootstrap" style={imgShape}></img>
                                <div class="card-body">
                                    <div class = "cards-title">
                                        <h5 class="card-title">Card title</h5>
                                        <a href="#" class="btn btn-hover-efect btn-primary" style={btnShape}>3.19 ETH</a>
                                    </div>
                                    
                                    <p class="card-text">2:41 min left</p>

                                    <div class = "user-interact">
                                        <div class = "user-icons">
                                        <img src={users} class="" alt=""></img>
                                        </div>
                                        <p class = "small-text">35 people are bidding</p>
                                        <div class = "user-likes">
                                        <img src={heart} class="like-icon" alt=""></img>
                                        <p class = "small-text">120</p>

                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        

                    </div>







                    <div class="carousel-item">
                        <div class = "cards-wrapper">
                                <div class="card" style={cardShape}>
                                    <img src={image2} class="card-img-top" alt="Bootstrap" style={imgShape}></img>
                                    <div class="card-body">
                                        <div class = "cards-title">
                                            <h5 class="card-title">Card title</h5>
                                            <a href="#" class="btn btn-hover-efect btn-primary" style={btnShape}>3.19 ETH</a>
                                        </div>
                                        
                                        <p class="card-text">2:41 min left</p>

                                        <div class = "user-interact">
                                            <div class = "user-icons">
                                            <img src={users} class="" alt=""></img>
                                            </div>
                                            <p class = "small-text">35 people are bidding</p>
                                            <div class = "user-likes">
                                            <img src={heart} class="like-icon" alt=""></img>
                                            <p class = "small-text">120</p>

                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div class="card" style={cardShape}>
                                    <img src={image1} class="card-img-top" alt="Bootstrap" style={imgShape}></img>
                                    <div class="card-body">
                                        <div class = "cards-title">
                                            <h5 class="card-title">Card title</h5>
                                            <a href="#" class="btn btn-hover-efect btn-primary" style={btnShape}>3.19 ETH</a>
                                        </div>
                                        
                                        <p class="card-text">2:41 min left</p>

                                        <div class = "user-interact">
                                            <div class = "user-icons">
                                            <img src={users} class="" alt=""></img>
                                            </div>
                                            <p class = "small-text">35 people are bidding</p>
                                            <div class = "user-likes">
                                            <img src={heart} class="like-icon" alt=""></img>
                                            <p class = "small-text">120</p>

                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div class="card" style={cardShape}>
                                    <img src={image3} class="card-img-top" alt="Bootstrap" style={imgShape}></img>
                                    <div class="card-body">
                                        <div class = "cards-title">
                                            <h5 class="card-title">Card title</h5>
                                            <a href="#" class="btn btn-hover-efect btn-primary" style={btnShape}>3.19 ETH</a>
                                        </div>
                                        
                                        <p class="card-text">2:41 min left</p>

                                        <div class = "user-interact">
                                            <div class = "user-icons">
                                            <img src={users} class="" alt=""></img>
                                            </div>
                                            <p class = "small-text">35 people are bidding</p>
                                            <div class = "user-likes">
                                            <img src={heart} class="like-icon" alt=""></img>
                                            <p class = "small-text">120</p>

                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div class="card" style={cardShape}>
                                    <img src={image2} class="card-img-top" alt="Bootstrap" style={imgShape}></img>
                                    <div class="card-body">
                                        <div class = "cards-title">
                                            <h5 class="card-title">Card title</h5>
                                            <a href="#" class="btn btn-hover-efect btn-primary" style={btnShape}>3.19 ETH</a>
                                        </div>
                                        
                                        <p class="card-text">2:41 min left</p>

                                        <div class = "user-interact">
                                            <div class = "user-icons">
                                            <img src={users} class="" alt=""></img>
                                            </div>
                                            <p class = "small-text">35 people are bidding</p>
                                            <div class = "user-likes">
                                            <img src={heart} class="like-icon" alt=""></img>
                                            <p class = "small-text">120</p>

                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div class="card" style={cardShape}>
                                    <img src={image1} class="card-img-top" alt="Bootstrap" style={imgShape}></img>
                                    <div class="card-body">
                                        <div class = "cards-title">
                                            <h5 class="card-title">Card title</h5>
                                            <a href="#" class="btn btn-hover-efect btn-primary" style={btnShape}>3.19 ETH</a>
                                        </div>
                                        
                                        <p class="card-text">2:41 min left</p>

                                        <div class = "user-interact">
                                            <div class = "user-icons">
                                            <img src={users} class="" alt=""></img>
                                            </div>
                                            <p class = "small-text">35 people are bidding</p>
                                            <div class = "user-likes">
                                            <img src={heart} class="like-icon" alt=""></img>
                                            <p class = "small-text">120</p>

                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div> 
                    </div>



                   


                    
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>

    );
}
export default Cards;