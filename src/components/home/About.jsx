import '../../css/home.css'
import Logo1 from '../../images/logo.jpeg'

function About() {
  return (
 <div className="flexCol center transformUp">
    
        
        {/* <h1 className='logoh1'>מ.ר אלומיניום</h1> */}
        <div className="logoBig">
            <img src={Logo1} className='img' alt="" />
        </div>
        <div className="disnone flexRow bet w150 ">
            <div className="icon flexCol center">
                 <h1 className="fa fa-phone "><a href="tel:+97247901169"></a></h1>
            </div>
           
           <div className="icon flexCol center">
           <h1 className="fa fa-facebook "></h1>
           </div>

        </div>
        <div className="ListOfWorks">
            <h1 className='headerAbout'>
                יצור והתקנת כל עבודות האלומיניום
            </h1>
          
                <ul className='ul'>
                    <li>
                        חלונות
                    </li>
                    <li>
                        רשתות
                    </li>
                    <li>
                        תריסים
                    </li>
                    <li>
                       SOMFI תריס גלילה 
                    </li>
                    <li>
                    כל עבודות הזכוכית
                    </li>
                </ul>
              

          
          

            <div className="botton">
            <p className="peregraph">
                מחירים ללא מתחרים ועבודה ברמה גבוהה
            </p>
                <button className='btnCall'><a href="tel:+97247901169">ליעוץ חינם התקשרו עכשיו</a></button>
            </div>
        </div>
          
 </div>
  );
}

export default About;
