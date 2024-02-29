let fetchArr1=localStorage.getItem('article');
let fetchArr2=JSON.parse(fetchArr1)
 let blogSwiper=document.querySelector('.blog-card-displ');
let  blog='';
function allBlog(){
  
fetchArr2.forEach((item,index) => {
  blog +=`
<div class="single-blog-card swiper-slide">
          <div class="blog-pic">
      <img src="${item.pic}" alt="">
        </div>
       <div class="blog-desrciption">
           <h2>${item.name}</h2>
        <p>${item.summary}</p>
    <div class="blog-like-comment">
     <div class="blog-like">
 <div class="like-nbr-count"><p>23.4k</p>
     </div>
       <div class="like-icon"><img src="images/blog/Vector (3).svg" alt=""></div>
            </div>
   <div class="blog-comment">
      <div class="comment-nbr-count">
            <p>23.9k</p>
           </div>
         <div class="comment-icon">
           <img src="images/blog/Vector.svg" alt="">
                 </div>
            </div>
              </div>
               <div class="blog-view-more ">
         <a class="view-more-link" href="singleblog.html?id=${index}">view more <img src="images/blog/Vector (4).svg" alt=""></a>
       </div>
          </div>
             </div> `

});
blogSwiper.innerHTML=blog;

}



if (document.querySelector('.blog-card-displ')) {
  allBlog();
}


function singleBlog(){
const url= new URLSearchParams(window.location.search);
const id=url.get('id');
    

  let fetchArr1=localStorage.getItem('article');
  let fetchArr2=JSON.parse(fetchArr1)
      let contentblog=document.querySelector('.cont-blog-text');
      let cont=`
      <h1>${fetchArr2[id].name}</h1>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
      <span id="blog-article" >
      <img src="${fetchArr2[id]. pic}" alt="">
      <p> ${fetchArr2[id].desc}
      </p>
      </span>
      `;
      contentblog.innerHTML=cont;
      }
      if (document.querySelector('.cont-blog-text')) {
        singleBlog();
      }
       
/*
document.addEventListener('DOMContentLoaded', function() {

  let viewMoreButton= document.querySelectorAll(".view-more-button");
  viewMoreButton.forEach((button,index)=>{
    

    button.addEventListener('click',()=>{
      
    //  window.location.href="singleblog.html";
     TosinglePage(button.getAttribute('data-index')); 
    })

  })
})

  function  TosinglePage(index) {
    

    window.location.href="singleblog.html";
}
    */

  