let fetchArr1=localStorage.getItem('article');
let fetchArr2=JSON.parse(fetchArr1)
 let blogSwiper=document.querySelector('.blog-card-displ');
 let DashblogSwiper=document.querySelector('.dash-blog-card-displ');



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
 <div class="blog-button">                              
<div class="blog-view-more">
     <a href="singleblog.html">view more</a>
        <a href="singleblog.html"><img src="images/blog/Vector (4).svg" alt=""></a>
</div>
<div class="edi-del-but">
    <button class="" >edit</button>
    <button >delete</button>
</div>

</div>

</div>
                              
                             
</div>  

            
  `

});
blogSwiper.innerHTML=blog;

}



if (document.querySelector('.blog-card-displ')) {
  allBlog();
}
 
       
 function DashBLog(){
  let blog="";
  fetchArr2.forEach( (item,index) => {
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
                 <div class="blog-button">                              
                <div class="blog-view-more">
                     <a href="singleblog.html">view more</a>
                        <a href="singleblog.html"><img src="images/blog/Vector (4).svg" alt=""></a>
                </div>
                <div class="edi-del-but">
                    <button class="" >edit</button>
                    <button >delete</button>
                </div>
                
            </div>

                </div>
                                              
                                             
             </div>  
             
             `
  });
  DashblogSwiper.innerHTML="blog";
 }

 