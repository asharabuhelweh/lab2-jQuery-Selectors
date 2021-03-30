'use strict';
let everyThingArray = [];
// let everyThing=[];
let keywordArr = [];
function getData1() {
  $.ajax('data/page-1.json')
    .then(hornsData => {
      console.log(hornsData);
      hornsData.forEach(val => {
        // console.log(val);
        let newhorn = new Horn(val);
        console.log(newhorn);
        // if(newhorn.keyword==="narwhal"){
        //   newhorn.display();

        // }
        newhorn.display();

      })
      let everyThing = [...new Set(keywordArr)];
      console.log(everyThing);
      everyThing.forEach(item => filterOption(item))
      $('.photo-template').first().remove();
    })
}

function Horn(hornNew) {
  this.title = hornNew.title;
  this.description = hornNew.description;
  this.keyword = hornNew.keyword;
  this.horns = hornNew.horns;
  this.image_url = hornNew.image_url;
  everyThingArray.push(this);
  keywordArr.push(this.keyword);

}
console.log(keywordArr);

Horn.prototype.display = function () {
  let $photoTemplate = $('.photo-templateM').html();
  let html = Mustache.render($photoTemplate, this);
  console.log(html);
  $('main').append(html);


}

const filterOption = option => {
  console.count('enter');
  $('select').append(`<option>${option}</option`);
}



$('select').on('change', function (event) {
  let value = `${$(this).val()}`;
  $(`.photo-template`).hide();
  $(`.${value}`).show();


});

$('#firstPage').on('click', () => {
  $('.photo-template').remove();
  $('option:not(:first)').remove();
  everyThingArray = [];
  getData1();
})

///////////////////////////////////////////////////////
///////page2////////////////////////////////////////////
///////////////////////////////////////////////////////////

let keywordArr1 = [];

function getData2() {
  $.ajax('data/page-2.json')
    .then(hornsData1 => {
      console.log(hornsData1);
      hornsData1.forEach(val => {
        // console.log(val);
        let newhorn1 = new Horn1(val);
        console.log(newhorn1);
        // if(newhorn1.keyword==="narwhal"){
        //   newhorn1.display();

        // }
        newhorn1.display();

      })

      let everyThing1 = [...new Set(keywordArr1)];
      console.log(everyThing1);
      everyThing1.forEach(item => filterOption1(item))
      $('.photo-template').first().remove();
    })
}

function Horn1(hornNew1) {
  this.title = hornNew1.title;
  this.description = hornNew1.description;
  this.keyword = hornNew1.keyword;
  this.horns = hornNew1.horns;
  this.image_url = hornNew1.image_url;
  keywordArr1.push(this.keyword);

}
console.log(keywordArr1);

Horn1.prototype.display = function () {
  let $photoTemplate1 = $('.photo-templateTow').html();
  let html1 = Mustache.render($photoTemplate1, this);
  console.log(html1);
  $('main').append(html1);


}

const filterOption1 = option => {
  console.count('enter');
  $('select').append(`<option>${option}</option`);
}



$('select').on('change', function (event) {
  let value = `${$(this).val()}`;
  $(`.photo-template`).hide();
  $(`.${value}`).show();


});

$('#secondPage').on('click', () => {
  $('.photo-template').remove();
  $('option:not(:first)').remove();
  // everyThingArray = [];
  getData2()
})


$('select').on('change', () => {
  $('photo-template').removeClass('visible');
  let $buttonValue = $('select option:selected').val();
  console.log($buttonValue);



  if ($buttonValue === 'default') {
      $('photo-template').addClass('visible');

  }
  $(`[class*=${$buttonValue}]`).addClass('visible').show();
  console.log($(`[class*=${$buttonValue}]`).addClass('visible'));

})

$('#byHorns').on('click', (event) => {
  event.preventDefault();
  $('photo-template').remove();
  everyThingArray.sort((a, b) => {
      return b.horn - a.horn;
  });
  everyThingArray.forEach(value => {
      value.display();
  });
  $('photo-template').removeClass('visible');
  let $buttonValue = $('select option:selected').val();
  console.log($buttonValue);

  if ($buttonValue === 'default') {
      $('photo-template').addClass('visible');
  }
  $(`${$buttonValue}`).addClass('visible');
})

$('#byName').on('click',()=>{
  $('photo-template').remove();
  everyThingArray.sort((a,b) =>{
      let firstTitle = a.title.toLowerCase();
      let secondTitle = b.title.toLowerCase();
      if (firstTitle > secondTitle){
          return 1;
      }else{
          return -1
      }
      
  });
  everyThingArray.forEach(value =>{
      value.display();
  });
  $('photo-template').removeClass('visible');
  
  let $buttonValue = $('select option:selected').val();
  console.log($buttonValue);

  if ($buttonValue === 'default'){
      $('photo-template').addClass('visible');
  }
  $(`[class*=${$buttonValue}]`).addClass('visible');
})




// });
