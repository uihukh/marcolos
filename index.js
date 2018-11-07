const http = require('http');  

 
 
(async () => { 
  const requestHandler = (request, response) => {  
       console.log(request.url)
       response.end('Hello Worldssss xao qua 2')
  }
       
  const server = http.createServer(requestHandler)

  server.listen(process.env.PORT, (err) => {  
    if (err) {
      return console.log('something bad happened', err)
    }

    console.log(`server is listening`)
  })
 
})();


const phantom = require('phantom');
function kiusi(){
  (async function() {
  const instance = await phantom.create();
  const page = await instance.createPage();
  await page.on('onResourceRequested', function(requestData) {
    console.info('Requesting', requestData.url);
  }); 
  
   const status = await page.open('https://uihukh.github.io/marcolos/index.html');
    page.evaluate( function () { 
        console.log("000");
        // find element to send click to
        var element = document.querySelector( 'button' );
        console.log("111");
        // create a mouse click event
        var event = document.createEvent( 'MouseEvents' );
        event.initMouseEvent( 'click', true, true, window, 1, 0, 0 );
        // send click to element
        element.dispatchEvent( event );
    }); 
   // const content = await page.property('content');
   // console.log(content);


  
  setTimeout(async () => await await instance.exit() , 90000); 
  
})();

}



function f() { 
    console.log('-111111111111-------trong f -----------');
    kiusi();
    console.log(Date()); 
    setTimeout( f, 95000 ); 
    console.log('--tttttttttt--') 
}



f();
