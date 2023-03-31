function MyName(props){
    return(
        <>
            <p>My Name is {props.name}</p>
        </>
    )
}

export default function DisplayNames(){
    const names=["Abhi","Chetan", "Hahaha"]
    return(
        <>
            {names.map((n)=><MyName name={n}/>)}
        </>
    )
}