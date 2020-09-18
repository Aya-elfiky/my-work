let imgs = (document.getElementsByClassName("portifolo-image"));
let lightboxcontainer = document.getElementById("lightboxcontainer");
let lightboxitem = document.getElementById("lightboxitem");
let closeIcon  = document.getElementById("close");
let prevIcon = document.getElementById("prev");
let nextIcon = document.getElementById("next");
let currentSlideIndex =0;
for(i=0;i<imgs.length;i++){
    imgs[i].addEventListener("click",openlightBox)}

    function openlightBox(eventInfo){
        lightboxcontainer.style.display ="flex";
        let imgSrc = eventInfo.target.src;
        lightboxitem.style.backgroundImage = `url(${imgSrc})`;
        currentSlideIndex =imgs.indexOf(eventInfo.target);
    };
    function nextSlide(){
        currentSlideIndex++;
        if(currentSlideIndex==imgs.length){
            currentSlideIndex=0;
        }
        let imgSrc = imgs[currentSlideIndex].src;
        lightboxitem.style.backgroundImage = `url(${imgSrc})`;

    }
    nextIcon.addEventListener("click",nextSlide);

    function prevSlide(){
        currentSlideIndex--;
        if (currentSlideIndex<0){
            currentSlideIndex =imgs.length-1;
        }
        let imgSrc = imgs[currentSlideIndex].src;
        lightboxitem.style.backgroundImage = `url(${imgSrc})`;
    }
    
    prevIcon.addEventListener("click",prevSlide);
    
    function closeSlide () {
    lightboxcontainer.style.display = 'none';
    }
    closeIcon.addEventListener("click",closeSlide);

    document.addEventListener("keydown",function(eventInfo){
        if(eventInfo.keyCode == 39)
        {
            nextSlide();
        }
        else if(eventInfo.keyCode ==37){
            prevSlide();
        }
        else if(eventInfo.keyCode ==27)
        {
            closeSlide();
        }
    });
/////////////////////////////////////////////////////////

// //regular expression for inputs// //

//  // regular expression for userName // //

let userName = document.getElementById("name");
let userEmail = document.getElementById("email");

function vaildateData(yourName){
    let regex = /^[A-Za-z].{6,14}/;
    if(regex.test(yourName) == true){
        userNameAlret.classList.replace("d-block", "d-none");
        userName.classList.remove("is-invalid");
        userName.classList.add("is-valid");
    }
    else{
        userNameAlret.classList.replace("d-none", "d-block");
        userName.classList.remove("is-valid");
        userName.classList.add("is-invalid");
    }
}
  userName.addEventListener("keyup",function(){
      vaildateData(userName.value);
  });
  //  // end regular expression for userName // //

//  //start regular expression for email // //
  function vaildateEmailData(yourEmail){
    var regex = /.[@gmail.com]$/;
    if(regex.test(yourEmail) == true){
        userEmailAlret.classList.replace("d-block", "d-none");
        userEmail.classList.remove("is-invalid");
        userEmail.classList.add("is-valid");
    }
    else{
        userEmailAlret.classList.replace("d-none", "d-block");
        userEmail.classList.remove("is-valid");
        userEmail.classList.add("is-invalid");
    }
}
  userEmail.addEventListener("keyup",function(){
      vaildateEmailData(userEmail.value);
  });
//  //end regular expression for email // //

  //////////////////////////////////////////////////////
//   let currentSlideIndex1 =0;
  // for(i=0;i<imgs1.length;i++){
  //     imgs1[i].addEventListener("click",openlightBox1)}
  
  //     function openlightBox1(eventInfo){
  //         lightboxcontainer.style.display ="flex";
  //         let imgSrc = eventInfo.target.src;
  //         lightboxitem.style.backgroundImage = `url(${imgSrc})`;
  //         currentSlideIndex1 =imgs1.indexOf(eventInfo.target);
  //     };