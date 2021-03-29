'use strict';

// let everyThing=[];
let keywordArr=[];
$.ajax('data/page-1.json')
.then(hornsData => {
  console.log(hornsData);
  hornsData.forEach(val => {
      // console.log(val);
      let newhorn = new Horn(val);
      newhorn.display();
      
  })
let everyThing=[...new Set (keywordArr)];
console.log(everyThing);
everyThing.forEach(item=>filterOption(item))
  $('.horn-template').first().remove();
})

function Horn(hornNew) {
  this.title = hornNew.title;
  this.description=hornNew.description;
  this.keyword=hornNew.keyword;
  this.horns=hornNew.horns;
  this.image_url=hornNew.image_url;
  keywordArr.push(this.keyword);

}
console.log(keywordArr);

Horn.prototype.display = function () {
  let hornClone = $('.photo-template').first().clone();
  hornClone.find('h2').text(this.title);
  console.log('hornClone',hornClone);
  hornClone.find('p').text(this.description);
  hornClone.find('img').attr('src', this.image_url);
  console.log(this.keyword);
  hornClone.addClass(this.keyword);
  // hornClone.attr('class', `${this.keyword} visible`);
    $('.container').append(hornClone);

}

const filterOption=option=>{
  console.count('enter');
  $('select').append(`<option>${option}</option`);
}



$('select').on('change', function(event){
 let value= `${$(this).val()}`;
 $('.photo-template').hide();
 $(`.${value}`).show();
  
  // let options = $('select').find(':selected').text()
  // event.preventDefault();
  // $('h2').hide();
  // $('img').hide();
  // $('p').hide();
  // $(options).show();

});