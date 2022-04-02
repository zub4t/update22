import React from 'react';

export const Horario = () =>{

    return(<div className="container horario-small-screen">
        <div className={"row  justify-content-center"}>
            <div className={"col-8 d-flex flex-column"}>
                <img style={{height: "auto", width: "100%"}} src={require("../img/horario_title.png")} alt=""/>
            </div>
        </div>
        <div className="row justify-content-md-center">
            <div className="horario">
                <div className="eventos">
                    <div className="eventos-item hour">
                        <p>Horas</p>
                    </div>
                    <div className="eventos-item normal">
                        <p> Dia 6</p>
                    </div>
                    <div className="eventos-item normal">
                        <p>Dia 7</p>
                    </div>
                    <div className="eventos-item hour">
                        <p>10:00-10:30</p>
                    </div>
                    <div className="eventos-item normal">
                        <p>Abertura</p>
                    </div>
                    <div className="eventos-item normal-takes-2">
                        <p>Autonomous Driving: Technology & Challenges</p>
                    </div>
                    <div className="eventos-item hour">
                        <p>10:30-11:00</p>
                    </div>
                    <div className="eventos-item normal-takes-3">
                        <p>Como me tornar num programador de Jogos Bem-Sucedido</p>
                    </div>
                    <div className="eventos-item hour">
                        <p>11:00-11:15</p>
                    </div>
                    <div className="eventos-item normal empty">
                        <p> </p>
                    </div>
                    <div className="eventos-item hour">
                        <p>11:15-11:30</p>
                    </div>
                    <div className="eventos-item normal-takes-3">
                        <p>Workshop de React</p>
                    </div>
                    <div className="eventos-item hour">
                        <p>11:30-12:00</p>
                    </div>
                    <div className="eventos-item normal">
                        <p>Coffee Break</p>
                    </div>
                    <div className="eventos-item hour">
                        <p>12:00-13:00</p>
                    </div>
                    <div className="eventos-item normal">
                        <p> Computer Science in the Banking World </p>
                    </div>
                    <div className="eventos-item hour">
                        <p>13:00-14:30</p>
                    </div>
                    <div className="eventos-item normal">
                        <p>Almoço</p>
                    </div>
                    <div className="eventos-item normal">
                        <p>Almoço</p>
                    </div>
                    <div className="eventos-item hour">
                        <p>14:30-15:30</p>
                    </div>
                    <div className="eventos-item normal">
                        <p> Pitching & Networking Session </p>
                    </div>
                    <div className="eventos-item normal">
                        <p> Pitching & Networking Session </p>
                    </div>
                    <div className="eventos-item hour">
                        <p>15:30-16:30</p>
                    </div>
                    <div className="eventos-item half">
                        <p>Networking & Coffee Break</p>
                    </div>
                    <div className="eventos-item metyis">
                        <p>Metyis Code Battle</p>
                    </div>
                    <div className="eventos-item normal">
                        <p>Networking & Coffee Break</p>
                    </div>
                    <div className="eventos-item hour">
                        <p>16:30-18:30</p>
                    </div>
                    <div className="eventos-item half">
                        <p>Workshop From Code to Kubernetes</p>
                    </div>
                    <div className="eventos-item normal">
                        <p> Workshop Automotive Supply Chain: Arquitecture 101 </p>
                    </div>
                    <div className="eventos-item hour">
                        <p>18:30-19:00</p>
                    </div>
                    <div className="eventos-item half empty">
                        <p></p>
                    </div>
                    <div className="eventos-item normal">
                        <p> Sessão de Encerramento </p>
                    </div>
                    <div className="eventos-item hour">
                        <p>19:00-19:30</p>
                    </div>
                    <div className="eventos-item normal-takes-3">
                        <p>Churrasco </p>
                    </div>
                    <div className="eventos-item hour">
                        <p>19:30-20:00</p>
                    </div>
                    <div className="eventos-item half empty">
                        <p> </p>
                    </div>
                    <div className="eventos-item hour">
                        <p>20:00-22:30</p>
                    </div>


                </div>
            </div>
        </div>
    </div>)
}