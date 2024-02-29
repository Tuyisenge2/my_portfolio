let AddToComment=document.querySelector('.AddToComment');
let storage=localStorage.getItem('comment');
function storeCom()
{  
    let arr=[];
    let commentValue=document.getElementById('commentValue').value;
    console.log(commentValue)
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
    arr.push(commentValue);
    localStorage.setItem('comment',JSON.stringify(arr))
}}
let arr=JSON.parse(storage);
let displaycomment=document.querySelector('.displaycomment');

let allcomment='';

arr.forEach(item => {

allcomment+=`
<div class="comment-section Hr-line-upper  Hr-line-lower">
<div class="user">
    <img src="images/infopic2.jpg" alt="">
    <p>USER 1</p>
</div>
<div class="comment">
    <p>${item}</p>
</div>

<div class="blog-like-comment">
<div class="blog-like">
<div class="like-nbr-count">
    <p>4k</p>
</div>
<div class="like-icon">
    <img src="images/blog/heart red.svg" alt="">
</div>
    </div>
    <div class="blog-comment">
        <div class="comment-nbr-count">
        <p>45</p>
        </div>
        <div class="comment-icon">
            <img src="images/blog/Vector.svg" alt="">
        </div>
    </div>
</div>
</div>   `;

});

displaycomment.innerHTML=allcomment;