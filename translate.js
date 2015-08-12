#!/usr/local/bin/node

var fs = require('fs');
var pl = require('pseudoloc');


if (process.argv.length < 3) NoParamsGiven();
else RunWithParams(process.argv[2]);


function NoParamsGiven() {
  ShowUsage();
  QuitApp();
}


function ShowUsage() {
  console.log('\nPlease run this command line utility like this:');
  console.log('   translate <filename>\n');
}


function QuitApp() {
  process.exit(-1);
}


function RunWithParams(fileName) {
  var language = LoadLanguage(fileName);
  var tranlation = TranslateLanguage(language);
  WriteLanguage(tranlation, 'pseudo_' + fileName);
}


function LoadLanguage(fileName) {
  console.log('\nReading a language file [' + fileName + ']');

  var data = fs.readFileSync(fileName);
  var language = JSON.parse(data);

  return language;
}


function TranslateLanguage(language) {
  console.log('Translating a language');

  var keys = Object.keys(language);
  var translation = {};

  keys.forEach(function(key) {
    translation[key] = pl.str(language[key]);
  });

  return translation;
}


function WriteLanguage(language, fileName) {
  console.log('Writing a translated file [' + fileName + ']\n');

  var languageAsString = JSON.stringify(language);

  fs.writeFileSync(fileName, languageAsString);
}
