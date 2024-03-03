
let myBut=document.getElementById("myBut");
let sto=localStorage.getItem('article');

function pulltoEdit(){
    const url= new URLSearchParams(window.location.search);
    const id=url.get('id');
    let blogName = document.getElementById('blogName');
    let blogSum=document.getElementById('blogSummary');
    let blogDesc = document.getElementById('blogDescription');
  
           // let single = { name: blogName,summary:blogSum, desc: blogDesc, pic: url };
            let Arr;

            if (sto === null) {
                Arr = [];
            } else {
                Arr = JSON.parse(sto);
            }
            blogName.value=Arr[id].name;
            blogSum.value=Arr[id].summary;
            blogDesc.value=Arr[id].desc;
            

}
pulltoEdit();

function SaveEdit() {
    const url= new URLSearchParams(window.location.search);
    const id=url.get('id');
    let blogNameClear = document.getElementById('blogName');
    let blogSumClear=document.getElementById('blogSummary');
   

    let blogName = document.getElementById('blogName').value.trim();
    let blogSum=document.getElementById('blogSummary').value.trim();
    
     let blogDesc = tinymce.get('blogDescription').getContent();
    
    let myImage = document.getElementById('myImage');
    const fr = new FileReader();
   if(myImage.files.length>0){    
    fr.readAsDataURL(myImage.files[0]);

    const readImagePromise = new Promise((resolve) => {
        fr.addEventListener('load', () => {
            resolve(fr.result);
        });
    });

    readImagePromise.then((url) =>{
        if (blogName !== '' && blogDesc !== ''&& blogSum !=='' ) {
            let Arr;
            if (sto === null) {
                Arr = [];
            } else {
                Arr = JSON.parse(sto);
            }
             Arr[id].name=blogName;
           Arr[id].summary=  blogSum;
            Arr[id].desc= blogDesc;
            Arr[id].pic=url;
            localStorage.setItem('article', JSON.stringify(Arr));
           
        }

    });}
    else{

       if (blogName !== '' && blogDesc !== ''&& blogSum !=='' ) {
              let Arr;

            if (sto === null) {
                Arr = [];
            } else {
                Arr = JSON.parse(sto);
            }
             Arr[id].name=blogName;
           Arr[id].summary=  blogSum;
            Arr[id].desc= blogDesc;
            localStorage.setItem('article', JSON.stringify(Arr));
              
        }

    }

    blogNameClear.value='';
    blogSumClear.value='';
    tinymce.activeEditor.setContent('');
   
    
}
