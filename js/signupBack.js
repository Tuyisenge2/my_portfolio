document.getElementById('signUpForm').addEventListener('submit', async (event)=>{
event.preventDefault();    

const loaderVar=document.querySelector('.loaderContainer')
    const myForm=  document.getElementById('signUpForm')
    const formData= new FormData(myForm);
  //  const allData=Object.fromEntries(formData)
const firstname=document.getElementById('firstname');
const lastname=document.getElementById('lastname');
const password=document.getElementById('password')
const gender =document.getElementById('gender')
//const dateOfBirth=document.getElementById('dateOfBirth')
const monthSelect = document.getElementById('month');
const daySelect = document.getElementById('day');
const yearSelect = document.getElementById('year');
const selectedDate = `${monthSelect.value}-${daySelect.value}-${yearSelect.value}`;

const email=document.getElementById('email');
const userDAta={
    firstname:firstname.value,
    lastname:lastname.value,
    email:email.value,
    gender:gender.value,
    dateOfBirth:selectedDate,
    password:password.value
}
function displayLoad(){
    loaderVar.style.display="flex"
}
function hideLoader(){
    loaderVar.style.display="none"

}
try{

displayLoad();

const response=await fetch('https://mybrand-be-zlsl.onrender.com/api/users/signup',{
    method:"POST",
    headers:{
        "content-Type":"application/json"
    },
    body:JSON.stringify(userDAta)
})
.then((res)=>{
   
    console.log(res)
     hideLoader();  
});


// const result= await response.json();
// if(!response.ok){
//     console.log("something went wrong")
// }
 
// console.log("resulted is ",result)



}catch(error){
console.log(error);
}

});

