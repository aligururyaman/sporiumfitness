import 'bulma/css/bulma.css'
import './App.css'
import { Monday } from './monday'
import DumbellRow from './assets/dumbellrow.jpg'
import PulldownMachine from './assets/pulldownmachine.jpg'
import SeatedRow from './assets/seatedrow.jpg'
import LatpulldownBack from './assets/latpulldown.jpg'
import HyperExtension from './assets/hyperextensions.jpg'
import SmithmachineShrug from './assets/smithmachineshrug.jpg'
import WristCurl from './assets/wirstcurl.jpg'
import DumbellbenchPress from './assets/dumbellbenchpress.jpg'
import InclineDumbellFly from './assets/inclinedumbellfly.jpg'
import CableCrossover from './assets/cablecrossover.jpg'
import ChestPressMachine from './assets/chestpressmachine.jpg'
import ButherFly from './assets/butherfly.jpg'
import OverheadExtansion from './assets/overheadextansion.jpg'
import ReversePushdown from './assets/reversepushdown.jpg'
import Yuruyus from './assets/yürüyüsbandı.jpg'
import LegExtensions from './assets/legextension.jpg'
import LegCurl from './assets/legcurl.jpg'
import Abductor from './assets/abductor.jpg'
import CalfRaises from './assets/calfraises.jpg'
import Crunch from './assets/crunch.jpg'
import LegRaises from './assets/legraises.jpg'
import SideBand from './assets/sidebend.jpg'
import BarbellCurl from './assets/burbellcurl.jpg'
import PrecherCurl from './assets/prechercurl.jpg'
import HummerCurl from './assets/hummercurl.jpg'
import TricepsPushdown from './assets/tricepspushdown.jpg'
import RopePushdown from './assets/ropepushdown.jpg'
import TricepsDipsMachine from './assets/tricepsdipsmachine.jpg'
import MachineCurl from './assets/machinecurl.jpg'
import OneArmPushdown from './assets/onearmpushdown.jpg'


function App() {
  

  return (
    <>
    <section>
      <div className="ali-image">
        <div className="ali-text">
          <h1>Sporium Fitnes Programı</h1>
          <p>Emre TOPAL</p>
          
        </div>
      </div>
    </section>  
    {/* Pazartesi Günü */}
    <section className='section'>
    
      <div className="container ">
      <p className="title">1. Gün</p>
        <div className="columns">
          <div className="column">
            
              <Monday
              image = {DumbellRow} 
              title="Dumbell Row" 
              sets="4 x 12" 
              desc="Son set 5. set olarak drop yap 25 tekrar"
              />
            
          </div>
          <div className="column">
            <Monday
            image = {PulldownMachine} 
            title="Pulldown Machine" 
            sets="4 x 10" 
            desc="Son set 20 yapılacak"
            />
        
          </div>
          <div className="column">
            <Monday
            image = {SeatedRow} 
            title="Seated Row" 
            sets="4 set" 
            desc="15 - 12 - 10 - 8 (herbir set)"
            />
          </div>
          <div className="column">
            <Monday 
            image = {LatpulldownBack}
            title="Latpulldown Back" 
            sets="4 x 12" 
            desc="Sabit"
            />
          </div>
          <div className="column">
            <Monday 
            image = {HyperExtension}
            title="Hyper Extension" 
            sets="4 x 15" 
            desc="Sabit"
            />
          </div>
          <div className="column">
            <Monday 
            image = {SmithmachineShrug}
            title="Smith Machine Shrug" 
            sets="4 x 15" 
            desc="Sabit"
            />
          </div>
          <div className="column">
            <Monday 
            image = {WristCurl}
            title="Wrist Crul" 
            sets="4 Set " 
            desc="Ucunda ağırlık takılı ip ile yap"
            />
          </div>
        </div>
      </div>   
    </section>

    {/* SALI GÜNÜ  */}

    <section className='section'>
    
      <div className="container ">
      <p className="title">2. Gün</p>
        <div className="columns">
          <div className="column">
            
              <Monday
              image = {DumbellbenchPress} 
              title="Dumbell Bench Press" 
              sets="4 set" 
              desc="12 - 12 - 10 - 8"
              />
            
          </div>
          <div className="column">
            <Monday
            image = {InclineDumbellFly} 
            title="Incline Dumbell Fly" 
            sets="4 Set " 
            desc="12 veya 15"
            />
        
          </div>
          <div className="column">
            <Monday
            image = {CableCrossover} 
            title="Cable Cross Over" 
            sets="4 x 25" 
            desc="Sabit"
            />
          </div>
          <div className="column">
            <Monday 
            image = {ChestPressMachine}
            title="Chest Press Machine" 
            sets="4 x 12" 
            desc="Sabit"
            />
          </div>
          <div className="column">
            <Monday 
            image = {ButherFly}
            title="Buther Fly" 
            sets="4 Set" 
            desc="12 - 15 - 18 - 25 drop set olacak"
            />
          </div>
          <div className="column">
            <Monday 
            image = {OverheadExtansion}
            title="OverHead Extansion" 
            sets="4 x 12" 
            desc="Sabit"
            />
          </div>
          <div className="column">
            <Monday 
            image = {ReversePushdown}
            title="Reverse Push Down" 
            sets="4 x 15" 
            desc="Sabit"
            />
          </div>
        </div>
      </div>   
    </section>


    {/* Çarşamba GÜNÜ  */}

    <section className='section'>
    
      <div className="container ">
      <p className="title">3. Gün</p>
        <div className="columns">
          <div className="column">
            
              <Monday
              image = {Yuruyus} 
              title="Yürüyüş Bandı" 
              sets="10 dakika" 
              desc="10 dakika yürüyüş bandı"
              />
            
          </div>
          <div className="column">
            <Monday
            image = {LegExtensions} 
            title="Leg Extension" 
            sets="4 x 25" 
            desc="Sabit"
            />
        
          </div>
          <div className="column">
            <Monday
            image = {LegCurl} 
            title="Leg Curl" 
            sets="4 x 15" 
            desc="Sabit"
            />
          </div>
          <div className="column">
            <Monday 
            image = {Abductor}
            title="Abductor Super Set" 
            sets="3 x 50" 
            desc="Sabit"
            />
          </div>
          <div className="column">
            <Monday 
            image = {CalfRaises}
            title="Calf Raises" 
            sets="4 x 30" 
            desc="Sabit"
            />
          </div>
          <div className="column">
            <Monday 
            image = {Crunch}
            title="Crunch" 
            sets="3 x Max" 
            desc="Sabit"
            />
          </div>
          <div className="column">
            <Monday 
            image = {LegRaises}
            title="Leg Raises" 
            sets="3 x Max" 
            desc="Sabit"
            />
          </div>
          <div className="column">
            <Monday 
            image = {SideBand}
            title="Side Band" 
            sets="3 x 50" 
            desc="Sabit"
            />
          </div>
        </div>
      </div>   
    </section>    
          
    

    {/* Cuma Günü */}
    <section className='section'>
    
      <div className="container ">
      <p className="title">4. Gün</p>
      <div className="columns">
          <div className="column">
            <Monday 
            image = {BarbellCurl}
            title="BarbellCurl" 
            sets="Alttaki ile dev set" 
            desc="3 x 12"
            />
          </div>
          <div className="column">
            <Monday 
            image = {PrecherCurl}
            title="Precher Curl" 
            sets="Alttaki ve Üstteki ile Dev set" 
            desc="3 x 12"
            />
          </div>
          <div className="column">
            <Monday 
            image = {HummerCurl}
            title="Hummer Curl" 
            sets="Üsteki ile Dev set" 
            desc="3 x 12"
            />
          </div>
          <div className="column">
            <Monday 
            image = {TricepsPushdown}
            title="Triceps Pushdwon" 
            sets="Alttaki ile Dev set" 
            desc="4 x 12"
            />
          </div>
          <div className="column">
            <Monday 
            image = {RopePushdown}
            title="Rope Push Down" 
            sets="Üstteki ve Alttaki ile Dev set" 
            desc="4 x 12"
            />
          </div>
          <div className="column">
            <Monday 
            image = {TricepsDipsMachine}
            title="Triceps Dips Machine" 
            sets="Üstteki ile Dev Set" 
            desc="4 x 12"
            />
          </div>
          <div className="column">
            <Monday 
            image = {MachineCurl}
            title="Machine Curl" 
            sets="Alttaki ile Dev Set" 
            desc="4 x 12"
            />
          </div>
          <div className="column">
            <Monday 
            image = {OneArmPushdown}
            title="One Arm Push Down" 
            sets="Üstteki ile Dev set" 
            desc="4 x 12"
            />
          </div>
      </div>
      </div>   
    </section>   
        

   
          
       
        
    
        
      
    
    </>
  )
}

export default App