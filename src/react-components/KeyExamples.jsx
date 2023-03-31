export default function KeyExamples(){
    return(
        <>

        {studentInfo.map((sinfo)=>{return <li key={sinfo.id}>{sinfo.id} {sinfo.name}</li>})}    
        </>
    )

}
const studentInfo=[{id:1,name:"Sachin"},{id:2,name:"Naveen"},{id:3,name:"Kumaru"}]