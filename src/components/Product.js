//image box
import one from "../assets/images/one.jpg"
import two from "../assets/images/two.jpg"
import three from "../assets/images/three.jpg"
function Product(){
    return(
  <div className="Product">
    <div className="box">
      <img src={one} alt=""></img>
      <p>This is one oftthe porsucts </p>
    </div>
    <div className="box">
      <img src={two} alt=""></img>
      <p>This is one oftthe porsucts </p>
    </div>
    <div className="box">
      <img src={three} alt=""></img>
      <p>This is one oftthe porsucts </p>
    </div>
  </div>)}
  export default Product