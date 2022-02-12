import Lottie from "lottie-react";
import Anim from "../../assets/90464-loading.json";

const Animation = () => {
    
    return (
        <Lottie 
            loop 
            autoPlay 
            animationData={Anim} 
            style={{width: 400, height: 400}} 
        />
    )
};

export default Animation;