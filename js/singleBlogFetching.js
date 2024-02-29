
 
function singleBlog(){
    
    allBlog();
    let fetchArr1=localStorage.getItem('article');
    let fetchArr2=JSON.parse(fetchArr1)
    let contentblog=document.querySelector('.cont-blog-text');
    let cont=`
    <h1>${fetchArr2[6].name}</h1>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
    <span id="blog-article" >
    <img src="${fetchArr2[6]. pic}" alt="">
    <p> ${fetchArr2[6].desc}
    </p>
    </span>
    `;
    contentblog.innerHTML=cont;
    }
    
      //singleBlog(7);
    