// $("#aya").hihe(1000);


// start first page (header) 
let item = document.getElementById("item");
let Add  = document.getElementById("Add");

let newField=[] ;
function addField(){
    let field =
    {
        youritem:item.value,
    }
    newField.push(field);
    displayField(newField);
 }
Add.addEventListener("click",addField);
function displayField(anyArray) {
    var cartoona = "";
    for (i = 0; i < anyArray.length; i++) {
        cartoona += `
        <div class="col-md-8 container deleteItem">
                            <ul id="itemsUl" class="m-auto">
                                <li class="form-control text-left">${item.value}<button class="btn btn-danger delete" onclick="deletField(${i})">X</button></li></ul>
                            </div> `;
    }
   document.getElementById("demoo").innerHTML = cartoona;
};
function deletField(index){
    newField.splice(index, 1);
    displayField(newField);
}
// end first page (header) 

// start second page (section) 
let page2 = document.getElementById("page2");
let musicAudio1 = document.getElementById("music1");
    page2.addEventListener("mousemove", function()
{
    // let cartona ="";
    //      cartona+=`<audio id="music1">
    //                 <source src="baby(MP3_128K)_1.mp3" type="audio/mpeg"/>
    //                </audio>`

    let a = Math.round(Math.random()*225 );
    let b = Math.round(Math.random()*225 );
    let c = Math.round(Math.random()*225 );
    musicBackground.style.backgroundColor = `rgb(${a},${b},${c})`;
});

// end second page (section) 
 
// start third page (section) 

// end third page (section3) 

// start fourth page (section4) 
// $("#colorR").click(()=>{
    // $("#secton4Background").animate({backgroundColor:"red"},1000);
// });// $("#secton4Background").hihe(1000);

// start fourth page (section4) 






// $(".delete").click(()=>{
// $(".delete-item").fadeOut(1000);
// });

// xx.addEventListener("click",deletField);
// function deletField(){
//     deleteItem.classList.replace("display: block","display:none");  
//     // newField.splice(index, 1);
//     displayField(newField);
// }

// $(".delete").click(()=>{
//     $(".delete-item").animate({display:"none"},1000);
// });


// page2.addEventListener("mousemove",playMusic);
    // function playMusic(anyArray)
    // {
    //     let cartona ="";
    
    //      cartona+=`<audio id="music1">
    //                 <source src="baby(MP3_128K)_1.mp3" type="audio/mpeg"/>
    //             </audio>`
    //     }
    //     document.getElementById("").innerHTML = cartona;
    // };