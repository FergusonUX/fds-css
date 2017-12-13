const read = require('read-file');
const dirTree = require('directory-tree');
const Handlebars = require('handlebars');
// var helpers = require('prettify'); helpers.register(Handlebars);
// var markdown = require('helper-markdown'); Handlebars.registerHelper('markdown', markdown());
var fs = require('fs');

//grab default template file for now
// var templates = {};

// templates.wrapper = read.sync('../src/templates/wrapper.handlebars').toString();
// templates.page_default = read.sync('../src/templates/page_default.handlebars').toString();
// templates.section_default = read.sync('../src/templates/section_default.handlebars').toString();
// templates.element_default = read.sync('../src/templates/element_default.handlebars').toString();
// templates.element_twocolumn = read.sync('../src/templates/element_twocolumn.handlebars').toString();
// templates.element_fontcard = read.sync('../src/templates/element_fontcard.handlebars').toString();
// templates.element_colorcard = read.sync('../src/templates/element_colorcard.handlebars').toString();
// templates.element_codetest = read.sync('../src/templates/element_codetest.handlebars').toString();

// Handlebars.registerPartial( 'page_default', templates['page_default'] );
// Handlebars.registerPartial( 'section_default', templates['section_default'] );
// Handlebars.registerPartial( 'element_default', templates['element_default'] );
// Handlebars.registerPartial( 'element_twocolumn', templates['element_twocolumn'] );
// Handlebars.registerPartial( 'element_fontcard', templates['element_fontcard'] );
// Handlebars.registerPartial( 'element_colorcard', templates['element_colorcard'] );
// Handlebars.registerPartial( 'element_codetest', templates['element_codetest'] );

console.log( "Load templates...");
const templateFiles = dirTree('src', {extensions:/\.handlebars/});
console.log( "Load datas...");
const jsonFiles = dirTree('src', {extensions:/\.json/});

// console.log(templateFiles);
// console.log('templateFiles: '+templateFiles);
for(var i = 0; i < templateFiles.children.length; i++ ) {
  // console.log( templateFiles.children[i] );
  var name = templateFiles.children[i].name.split(".", 1)[0];
  console.log( "name: "+name );
  //var dataObj = jsonFiles.children[i];

  //var name = templateObj.name.split(".", 1)[0];


  // console.log( templateObj );

  // console.log("templateName: "+templateName);
  //templates[templateName] = read.sync(templateObj.path).toString();
  //Handlebars.registerPartial( templateName, templates[templateName] );
  //console.log('[T] - template loaded: '+templateName)
}
/*
console.log( "Done templates...");


var hbTemplate = Handlebars.compile(templates['wrapper']);


console.log( "Load data and render pages...");
const jsonFiles = dirTree('src', {extensions:/\.json/});


for(var i = 0; i < jsonFiles.children.length; i++ ) {

  var folder = jsonFiles.children[i];

  if( folder.children ){
    //iterate through files (ex: buttons.json)
    for(var j = 0; j < folder.children.length; j++ ) {

      var file = folder.children[j];
      // console.log("file: "+file.path);

      var data = JSON.parse( read.sync(file.path).toString() );
      var html = hbTemplate( data );
      // console.log( "html: \n"+html)

      console.log( '[R] - page rendered: '+data.fileName)
      fs.writeFile(("../src/components/_"+data.fileName+".vue").toString(), html);

    }
  }
}
*/
