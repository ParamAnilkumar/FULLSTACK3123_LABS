const Student = ({student})=>{
    const myStyle = {backgroundColor:"#FFAA22",fontSize:"20px",color:"blue"}
    return(
        <div>
        <h3 align="center" >Student id: {student.id}</h3>
        <h3 align="center">Name: {student.name}</h3>
        <h3 align="center">College: {student.college}</h3>
        </div>
    )
}
export default Student