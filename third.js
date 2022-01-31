function isValidHttpUrl(string) {
  let url;
  
  try {
    url = new URL(string);
  } catch (_) {
    return false;  
  }

  return url.protocol === "http:" || url.protocol === "https:"  ;
}


function convertMarkDownToHTML(text)
{
    
    let elements = text.match(/\[.*?\)/g);
      if( elements != null && elements.length > 0){
        for(el of elements){
          let txt = el.match(/\[(.*?)\]/)[1];//get only the txt
          let url = el.match(/\((.*?)\)/)[1];//get only the link
          if (isValidHttpUrl(url))
          {
            text = text.replace(el,'<a href="'+url+'>'+txt+'</a>')
          }
        }
      }
    return text
    
}

let t = "Hey all! Check [my new site](http://mysite.com)! [not a link](javascript:console.log('hello'))";
console.log(convertMarkDownToHTML(t));