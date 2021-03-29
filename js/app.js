'use strict';

let everyThing=[];
let keywordArr=[];
$.ajax('data/page-1.json')
.then(hornsData => {
  console.log(hornsData);
  hornsData.forEach(val => {
      // console.log(val);
      let newhorn = new Horn(val);
      newhorn.display();
      newhorn.keywordList();
  })
  $('.horn-template').first().remove();
})

function Horn(hornNew) {
  this.title = hornNew.title;
  this.description=hornNew.description;
  this.keyword=hornNew.keyword;
  this.horns=hornNew.horns;
  this.image_url=hornNew.image_url;
  everyThing.push(this);
  keywordArr.push(this.keyword);

}
console.log(everyThing);

Horn.prototype.display = function () {
  let hornClone = $('#photo-template').first().clone();
  hornClone.find('h2').text(this.title);
  console.log('hornClone',hornClone);
  hornClone.find('p').text(this.description);
  hornClone.find('img').attr('src', this.image_url);
  hornClone.attr('class', `${this.keyword} visible`);
  hornClone.removeAttr('id');



    $('main').append(hornClone);

}

Horn.prototype.keywordList =function(){
  let $listClone =$('option').first().clone();
  $listClone.attr('value',this.keyword);
  $listClone.text(this.keyword);
  $('select').append($listClone);

}

$('select').on('change', function(event){
  let options = $('select').find(':selected').text()
  event.preventDefault();
  $('h2').hide();
  $('img').hide();
  $('p').hide();
  $(options).show();

});