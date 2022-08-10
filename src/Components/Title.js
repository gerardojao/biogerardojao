import Typed from 'react-typed';
import img from "../assets/logo.svg"

const Title = () => {
  return (
    <div className="containerTitle" >
      <div className="logoTitle">
        <a href="https://gerardojao.vercel.app/" target="_blank"> <img className="logo" src={img} alt="log"  /></a>
   
    <div className="home__content--1"><span>G</span>erardo <span>A</span>rrieta</div>
    </div>
    <Typed
                strings={[
                   " Frontend Developer", "Backend Developer"]}
                    typeSpeed={120}
                    backSpeed={50}
                    loop >
                    <input className="inputTyped" type="text"/>
                </Typed>
    <hr />
    
</div>
  )
}

export default Title