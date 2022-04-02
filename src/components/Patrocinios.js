import React from "react";
import SectionTitle from "../styled-components/SectionTitle";
import dcc from "./sponsors/Parceiros/dcc.svg";
import ipdj from "./sponsors/Parceiros/ipdj.svg";
import farfetch from "./sponsors/Bronze/farfetch.png";
import ltpLabs from "./sponsors/Bronze/ltp_labs.svg";
import natixis from "./sponsors/Bronze/natixis.png";

export const Patrocinios = () =>{
    return (
        <div className={"container-fluid"}>
            <SectionTitle font={"60"} width={"100%"} textShadowSize={"2px 2px"}>
                Patrocínios
            </SectionTitle>

            {/*Patrocínios Insane*/}
            <div className={"mt-5 justify-content-center row"}>
                <SectionTitle insane font={"60"} width={"80%"} textShadowSize={"2px 2px"}>
                    Insane
                </SectionTitle>
            </div>

            <div className={"mt-md-5 mt-3 justify-content-center row"}>
                <div className="col-12 d-flex d-flex  justify-content-center ">
                    <img width={"60%"} height={"70%"} src={require("./sponsors/Insane/metyis.png")} alt={""}/>
                </div>
            </div>


            {/*Patrocínios Gold*/}
            <div className={"mt-1 justify-content-center row"}>
                <SectionTitle font={"50"} width={"70%"} textShadowSize={"2px 2px"}>
                    Gold
                </SectionTitle>
            </div>

            <div className={"mt-md-5 justify-content-center row"}>
                <div className="col-5 d-flex  justify-content-center ">
                    <img  src={require("./sponsors/Gold/critical.png")} alt={""}/>
                </div>
                <div className="col-5 d-flex  justify-content-center ">
                    <img width={"50%"} src={require("./sponsors/Gold/mindera.png")} alt={""}/>
                </div>
                <div className="col-5 d-flex  justify-content-center ">
                    <img width={"60%"} src={require("./sponsors/Gold/synopsys.png")} alt={""}/>
                </div>
            </div>


            {/*Patrocínios Silver*/}
            <div className={"mt-4 justify-content-center row"}>
                <SectionTitle font={"30"} width={"60%"} textShadowSize={"2px 2px"}>
                    Silver
                </SectionTitle>
            </div>
            <div className={"justify-content-center row p-md-5"}>
                <div className="col-12 d-flex  justify-content-center ">
                    <img width={"35%"} src={require("./sponsors/Silver/sonae.jpg")} alt={""}/>
                </div>
            </div>

            {/*Patrocínios Bronze*/}
            <div className={"mt-md-2 mt-4 justify-content-center row"} >
                <SectionTitle font={"20"} width={"60%"} textShadowSize={"1px 1px"}>
                    Bronze
                </SectionTitle>
            </div>
            <div className={"justify-content-center row mt-md-5 mt-3"}>
                <div className="col-3  col-sm-3  d-flex  justify-content-center ">
                    <img width={"55%"} height={"55%"} src={farfetch} alt={""}/>
                </div>
                <div className="col-2 col-sm-2 d-flex  justify-content-center">
                    <img width={"70%"} src={ltpLabs} alt={""}/>
                </div><div className="col-3 col-sm-3 d-flex  justify-content-center">
                <img width={"55%"} src={natixis} alt={""}/>
            </div>
            </div>

            {/*Parceiros*/}
            <div className={"mt-md-4 mt-3 justify-content-center row"}>
                <SectionTitle font={"15"} width={"50%"} textShadowSize={"1px 1px"}>
                    Parceiros
                </SectionTitle>
            </div>
            <div className={"justify-content-center row mt-md-5 mt-2"}>
                <div className="col-2  d-flex   ">
                    <img width={"55%"} height={"40%"} src={require("./sponsors/Parceiros/fcup.png")} alt={""}/>
                </div>
                <div className="col-2  d-flex  ">
                    <img width={"55%"} height={"40%"} src={ipdj} alt={""}/>
                </div>
                <div className="col-2  d-flex  ">
                    <img width={"45%"} height={"40%"} src={dcc} alt={""}/>
                </div>
            </div>
        </div>
    )
}