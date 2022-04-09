import Typed from 'react-typed';

const Title = () => {
  return (
    <div >

    <div className="home__content--1"><span>G</span>erardo <span>A</span>rrieta</div>
  
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