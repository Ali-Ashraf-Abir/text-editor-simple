function textArea (textarea){

    const textArea=document.getElementById(textarea)

    return textArea

}





let text=0




    document.getElementById("bold").addEventListener("click",function(){
        console.log(text)
        let textarea=textArea("text-area")
        if(text==0){
            textarea.style.fontWeight="600"
        
        text++}
        else{
            textarea.style.fontWeight="400"
            text=0
        }

    })



let underline =false
document.getElementById("underline").addEventListener("click",function(){


    console.log(text)
    let textarea=textArea("text-area")
    if (underline==false){
    textarea.style.textDecoration="underline"
    underline=true}

    else{
        textarea.style.textDecoration="none"
        underline=false
        
    }
})

let italic=false
document.getElementById("italic").addEventListener("click",function(){


    console.log(text)
    let textarea=textArea("text-area")
    if (italic==false){
    textarea.style.fontStyle="italic"
    italic=true}
    else{
        textarea.style.fontStyle="normal"
        italic=false
    }
})



document.getElementById("font-size").addEventListener("keyup",function(){

    const fontSize=document.getElementById("font-size")
    const fontSizeNumber=fontSize.value 

    const textarea=textArea("text-area")
    textarea.style.fontSize=fontSizeNumber+"px"



})
document.getElementById("font-size").addEventListener("click",function(){

    const fontSize=document.getElementById("font-size")
    const fontSizeNumber=fontSize.value 

    const textarea=textArea("text-area")
    textarea.style.fontSize=fontSizeNumber+"px"



})


document.getElementById("font-color").addEventListener("blur",function(){

    const textarea=textArea("text-area")
    textarea.style.color=this.value
})


document.getElementById("align-right").addEventListener("click",function(){

    const textarea=textArea("text-area")
    textarea.style.textAlign="right"
})
document.getElementById("align-left").addEventListener("click",function(){

    const textarea=textArea("text-area")
    textarea.style.textAlign="left"
})

document.getElementById("align-center").addEventListener("click",function(){

    const textarea=textArea("text-area")
    textarea.style.textAlign="center"
})