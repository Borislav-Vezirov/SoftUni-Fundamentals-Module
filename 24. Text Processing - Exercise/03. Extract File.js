function exercise(param){ 
   let text      = param.split('\\').pop();
   let name      = text.substring(0, text.lastIndexOf('.'));
   let extension = text.substring(text.lastIndexOf('.')).split('.').join('');
   console.log(`File name: ${name}\nFile extension: ${extension}`); 
}
exercise('C:\\Internal\\training-internal\\Template.pptx');
exercise('C:\\Internal\\training-internal\\template.bak.pptx');