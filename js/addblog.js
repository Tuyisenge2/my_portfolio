 

let myBut=document.getElementById("myBut");
let sto=localStorage.getItem('article');

function add() {
    let blogName = document.getElementById('blogName').value.trim();
    let blogSum=document.getElementById('blogSummary').value.trim();
    let blogDesc = tinymce.get('blogDescription').getContent();
    let myImage = document.getElementById('myImage');

    const fr = new FileReader();
    
    fr.readAsDataURL(myImage.files[0]);

    const readImagePromise = new Promise((resolve) => {
        fr.addEventListener('load', () => {
            resolve(fr.result);
        });
    });

    readImagePromise.then((url) =>{
        if (blogName !== '' && blogDesc !== ''&& blogSum !=='' ) {
            let single = { name: blogName,summary:blogSum, desc: blogDesc, pic: url };
            let Arr;

            if (sto === null) {
                Arr = [];
            } else {
                Arr = JSON.parse(sto);
            }

            Arr.push(single);
            localStorage.setItem('article', JSON.stringify(Arr));
        }
    });
}

