
export default function ListExample(){
    var fruits=["Apple", "Orange","PineApple"]
    var displayFruits=fruits.map((fname)=>{return<ul>{fname}</ul> })
    return(
        <div class="text-center"> 
            {displayFruits}
        </div>
    )
}