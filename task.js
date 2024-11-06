//click a button and show the content with 60px fontSize and bgColor red and bordeRadius 50%  
let k=document.getElementById("btn")
k.onclick=function(){
    k.style.fontSize="60px"
    k.style.backgroundColor="red"
    k.style.borderRadius="50%"
}
//2. click the button and display three images on clicking the button ft img should be of border radius 30px , second img should be border radius 100px , third img should be of borderradius 50%
let b=document.getElementById("btn1")
function a(){
    let images=document.getElementById("div");
    images.innerHTML='<img id="i1"src=https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg height="200px" width="200px"><img id="i2" src=https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg height="200px" width="200px"><img id="i3" src=https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg height="200px" width="200px">'
    let id=document.getElementById("i1")
    id.style.borderRadius="50px"
    let id2=document.getElementById("i2")
    id2.style.borderRadius="25%"
    let id3=document.getElementById("i3")
    id3.style.borderRadius="50%"
}
    console.log(b)
