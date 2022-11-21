import './NumberDashboard.css'
import item1 from '/home/Max/Documentos/projetos/react-app/src/_assets/dashboarditem.svg'
import item2 from '/home/Max/Documentos/projetos/react-app/src/_assets/dashboarditem2.svg'
import item3 from '/home/Max/Documentos/projetos/react-app/src/_assets/dashboarditem3.svg'
import item4 from '/home/Max/Documentos/projetos/react-app/src/_assets/dashboarditem4.svg'

const itemShape = {
    height: '32px',
    width: '32px'
}

function NumberDashboard (){
    return (
        <div class ="dashboard-section">
            <div class ="dashboard-item">
                <img class ="fade"src={item1} style = {itemShape}></img>
                <h1>300K</h1>
                <p>Users Active</p>

            </div>
            <div class ="dashboard-item">
                <img src={item2} style = {itemShape}></img>
                <h1>52,5K</h1>
                <p>Artworks</p>

            </div>
            <div class ="dashboard-item">
                <img src={item3} style = {itemShape}></img>
                <h1>17,5K</h1>
                <p>Artists</p>

            </div>
            <div class ="dashboard-item">
                <img src={item4} style = {itemShape}></img>
                <h1>35.58K</h1>
                <p>ETH Spent</p>

            </div>
        </div>
        

    );
}
export default NumberDashboard;