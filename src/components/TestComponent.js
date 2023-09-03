function Name({content , content1}){
    return(
        <>
       {content}
       {content1}
        </>
    )
}

export default Name

function Test(){
 let name = {
    content:"data",
    content1:"data2"
 }
    return(
        <>
        < Name {...name}/>
        <h1> this is test</h1>
        </>
    )
}
export { Test , Name }