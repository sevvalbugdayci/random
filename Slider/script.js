var models = [
    {
        name : 'Buttercup',
        image :'img/222.jpg',
        link : 'link'
    },
    {
        name : 'Profesör',
        image :'img/225.webp',
        link : 'link'
    },
    {
        name : 'Bubbles',
        image :'img/333.webp',
        link : '/yok'
    },
    {
        name : 'Şevval',
        image :'img/5555555.jpg',
        link : 'üzgünüm'
    },
    {
        name : 'Blossom',
        image :'img/pff.jpeg',
        link : '/linkleugrasamadim'
    }
]


var index =0;
var slaytCount = models.length; 
var interval;

var settings = {
    duration : '2000',
    random : 'false'
}

init(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener('click',function() {
   index--;
   showSlide(index);
   console.log(index);
});


document.querySelector('.fa-arrow-circle-right').addEventListener('click',function() {
    index++;
    showSlide(index);
    console.log(index);
})


document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function() {
        clearInterval(interval);
    })
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function() {
        init(set)
    })
})

function init(set) {
    var prev;
    interval = setInterval(function() {
       if(settings.random) {

         do{

         }while(index == prev)
          prev = index;
        
         index = Math.floor(Math.random() * slaytCount);
       }else {
          if(slaytCount == index+1) {
            index = -1;
          }
          showSlide(index);
          index++;
          
       }

       showSlide(index);
    },settings.duration)
}

function showSlide(i) {
   
    index = i;


    if(i<0) {
        index = slaytCount - 1;
    }

    if(i >= slaytCount) {
        index = 0;
    }

   document.querySelector('.card-img-top').setAttribute('src',models[index].image);

   document.querySelector('.card-link').setAttribute('href',models[index].link);

   document.querySelector('.card-title').textContent = models[index].name;
}

