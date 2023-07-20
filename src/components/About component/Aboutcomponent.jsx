import './style.css'
import img from './sekilim.jpg'
function Aboutcomponent () {
    return(
        <>
       <div className='about-content-component'>
        <h2>HELLO EVERYBODY, I AM</h2>
        <h1>FUAD RASULOV</h1>
        <p> I’m a digital designer in love with photography, painting and discovering new worlds and cultures. ​Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor. </p>
     <img src={img} alt="" />
       </div>
       <div className='circle-information-components'>
        <div className='resume-circle'>
            <h2 className='resume'>Resume</h2>
        </div>
        <div className='skills-circle'>
            <h2 className='skills'>My Skills</h2>
        </div>
        <div className='resume-circle'>
            <h2 className='resume'>Projects</h2>
        </div>
        <div className='skills-circle'>
            <h2 className='skills '>Contacts</h2>
        </div>

       </div>
</>

    )
}

export default Aboutcomponent;