let AddToComment=document.querySelector('.AddToComment');
let storage=localStorage.getItem('article');
const url= new URLSearchParams(window.location.search);
    const id=url.get('id');

function storeCom() {
    

    let arr=[];
    let commentValue=document.getElementById('commentValue').value;
if(commentValue!=="")
{
   
    if(storage===null)
    {
        arr=[];
    }    
    else{
        try{
   arr=JSON.parse(storage);

}catch(error)
   {}
    }
    arr[id].BComment.push(commentValue);
    localStorage.setItem('article',JSON.stringify(arr))
    console.log(commentValue,"  ",arr[id].BComment,"  ",id);

}
location.reload();
 
}
     

let arr=JSON.parse(storage);
let displaycomment=document.querySelector('.displaycomment');

let allcomment='';

arr.forEach((item,index) => {
    arr[index].BComment.forEach(i => {
allcomment+=`
<div class="comment-section Hr-line-upper  Hr-line-lower">
<div class="user">
    <img src="images/infopic2.jpg" alt="">
    <p>USER 1</p>
</div>
<div class="comment">
    <p>${i}</p>
</div>

<div class="blog-like-comment">
<div class="blog-like">
<div class="like-nbr-count">
    <p></p>
</div>
<div class="like-icon">
    <img src="images/blog/heart red.svg" alt="">
</div>
    </div>
    <div class="blog-comment">
        <div class="comment-nbr-count">
        <p>0</p>
        </div>
        <div class="comment-icon">
            <img src="images/blog/Vector.svg" alt="">
        </div>
    </div>
</div>
</div>   `;

})

});

displaycomment.innerHTML=allcomment;