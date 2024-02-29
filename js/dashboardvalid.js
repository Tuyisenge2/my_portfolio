/*  let blogDescription = tinymce.get('blogDescription').getContent().replace(/&nbsp;/g, ' '); */
 
function validateForm() {
    event.preventDefault();
    let blogNAmeErr=document.getElementById('blogNAmeErr');
    let blogSummary=document.getElementById('blogSummary').value.trim();
    let blogSumErr=document.getElementById('blogSumErr');
    let blogdescErr=document.getElementById("blogdescErr");
    let blogName = document.getElementById('blogName').value.trim();   
    let blogDesc = tinymce.get('blogDescription').getContent();    
   
    if (blogName === '') {
        blogNAmeErr.classList.remove('errorDisappear');
        blogNAmeErr.classList.add('styleuserErrorMEss');
        blogNAmeErr.innerHTML='Blog Name cannot be empty';
        return false;
    }
  
    if (blogSummary === '') {
        blogNAmeErr.classList.add('errorDisappear');
        blogSumErr.classList.remove('errorDisappear');
        blogSumErr.classList.add('styleuserErrorMEss');
        blogSumErr.innerHTML='Blog summary cannot be empty';
        return false;
    }



    if (blogDesc === '') {
        blogNAmeErr.classList.add('errorDisappear');
        blogSumErr.classList.add('errorDisappear');
        blogdescErr.classList.remove('errorDisappear');
        blogdescErr.classList.add('styleuserErrorMEss');
        blogdescErr.innerHTML='Blog Description cannot be empty';
        return false;
    }

    //console.log(stripHTMLTags(blogDescription));
return true;

 
}



function stripHTMLTags(input) {
    return input.replace(/<\/?[^>]+(>|$)/g, "");
}


