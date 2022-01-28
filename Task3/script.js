
console.log('sjx bsjxbjxh')
//to get the element

var aa= document.getElementsByClassName('accordian');


    var i;
    for(i=0; i < aa.length ;i++){
    aa[i].addEventListener('click',function(){

        this.classList.toggle('active');


        var para1= this.nextElementSibling;

        if(para1.style.display=== 'block'){
            para1.style.display = 'none'
        }else{
            para1.style.display='block'
        }
    });

}