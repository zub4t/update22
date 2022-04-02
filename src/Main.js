import './Main.css'
import particlesIMG from './particlesIMG'
import NUCC from './NUCC'
import {Patrocinios} from "./components/Patrocinios";
import Footer from "./components/Footer";
import {Horario} from "./components/Horario";

function InitialScreen() {
    const divStyleBanner = {
        width: '100%',
        margin: 0,
        height: "100vh"
        
    };
    const divStylePatrocinadores = {
        background: 'white',
    };
  return (
      <>
        <div style={divStyleBanner}>
            <canvas id="UPdateBanner">
            </canvas>
            {/* <canvas id="NUCClogo">*/}
            {/*</canvas>*/}
        </div>
          <Horario/>
          <div style={divStylePatrocinadores}>
              <Patrocinios/>
          </div>
        <Footer/>
      </>

  )
}

export default InitialScreen