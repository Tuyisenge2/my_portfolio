const blogCards = [
    {
      id: 1,
      imageSrc: 'images/blog/figma.png',
      title: 'Figma',
      description: "JavaScript, often abbreviated as JS, is more than just a scripting language; it's a cornerstone of modern web ........",
      likeCount: '23.4k',
      likeimage:'images/blog/Vector (3).svg',
      commentCount: '23.9k',
      commentImage:'images/blog/Vector.svg',
      viewMoreLink: 'singleblog.html'
    },
    {
      id: 2,
      imageSrc: 'images/blog/figma.png',
      title: 'Figma',
      description: "JavaScript, often abbreviated as JS, is more than just a scripting language; it's a cornerstone of modern web ........",
      likeCount: '23.4k',
      likeimage:'images/blog/Vector (3).svg',

      commentCount: '23.9k',
      commentImage:'images/blog/Vector.svg',

      viewMoreLink: ''
    },
    {
      id: 3,
      imageSrc: 'images/blog/figma.png',
      title: 'Figma',
      description: "JavaScript, often abbreviated as JS, is more than just a scripting language; it's a cornerstone of modern web ........",
      likeCount: '23.4k',
      likeimage:'images/blog/Vector (3).svg',

      commentCount: '23.9k',
      commentImage:'images/blog/Vector.svg',

      viewMoreLink: 'singleblog.html'
    },
    {
        id: 4,
        imageSrc: 'images/blog/figma.png',
        title: 'Figma',
        description: "JavaScript, often abbreviated as JS, is more than just a scripting language; it's a cornerstone of modern web ........",
        likeCount: '23.4k',
        likeimage:'images/blog/Vector (3).svg',
  
        commentCount: '23.9k',
        commentImage:'images/blog/Vector.svg',
  
        viewMoreLink: 'singleblog.html'
      },
      {
        id: 5,
        imageSrc: 'images/blog/figma.png',
        title: 'Figma',
        description: "JavaScript, often abbreviated as JS, is more than just a scripting language; it's a cornerstone of modern web ........",
        likeCount: '23.4k',
        likeimage:'images/blog/Vector (3).svg',
  
        commentCount: '23.9k',
        commentImage:'images/blog/Vector.svg',
  
        viewMoreLink: 'singleblog.html'
      },
      {
        id: 6,
        imageSrc: 'images/blog/figma.png',
        title: 'Figma',
        description: "JavaScript, often abbreviated as JS, is more than just a scripting language; it's a cornerstone of modern web ........",
        likeCount: '23.4k',
        likeimage:'images/blog/Vector (3).svg',
  
        commentCount: '23.9k',
        commentImage:'images/blog/Vector.svg',
  
        viewMoreLink: 'singleblog.html'
      },
      {
        id: 7,
        imageSrc: 'images/blog/figma.png',
        title: 'Figma',
        description: "JavaScript, often abbreviated as JS, is more than just a scripting language; it's a cornerstone of modern web ........",
        likeCount: '23.4k',
        likeimage:'images/blog/Vector (3).svg',
  
        commentCount: '23.9k',
        commentImage:'images/blog/Vector.svg',
  
        viewMoreLink: 'singleblog.html'
      }
     
     
     
  ];

  let blogDis= document.querySelector(".blog-card-displ");

  

let blogCardsHTML = '';

blogCards.forEach(card => {
    blogCardsHTML += `
        <div class="single-blog-card">
            <div class="blog-pic">
                <img src="${card.imageSrc}" alt="">
            </div>
            <div class="blog-desrciption">
                <h2>${card.title}</h2>
                <p>${card.description}</p>
            </div>
            <div class="blog-like-comment">
                <div class="blog-like">
                    <div class="like-nbr-count"><p>${card.likeCount}</p></div>
                    <div class="like-icon"><img src="${card.likeimage}" alt=""></div>
                </div>
                <div class="blog-comment">
                    <div class="comment-nbr-count">
                        <p>${card.commentCount}</p>
                    </div>
                    <div class="comment-icon">
                        <img src="" alt="">
                    </div>
                </div>
            </div>
            <div class="blog-view-more">
                <a href="${card.viewMoreLink}">view more</a>
                <a href="${card.viewMoreLink}"><img src="images/blog/Vector (4).svg" alt=""></a>
            </div>
        </div>
    `;
});
blogDis.innerHTML=blogCardsHTML;

