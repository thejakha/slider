let wrapper = document.getElementById('wrapper')
let controllers = document.getElementsByClassName('controller')
let next = document.getElementById('next'), prev = document.getElementById('prev'), right = 0
    function nextPrev(){
        next.addEventListener('click',()=>{
        if (right >= 80) {
            right = 0
        }else{
            right += 20
        }
        wrapper.style.transform = `translateX(-${right}%)`
        wrapper.style.transition = '.4s ease-in-out'
        })
        prev.addEventListener('click',()=>{
            if (right <= 0) {
                right = 80
            }else{
                right -= 20
            }
            wrapper.style.transform = `translateX(-${right}%)`
        })       
        
}
nextPrev()
