window.addEventListener('scroll',reveal)
function reveal(){
    const reveals=document.querySelectorAll('.reveal')
    reveals.forEach((i)=>{
        let windowHeight=window.innerHeight
        let revTop=i.getBoundingClientRect().top
        let p=150
        if(revTop< windowHeight-p){
            i.classList.add('active')
        }
        else{
            i.classList.remove('active')
        }
    })
   
}