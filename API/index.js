const validKeys = [
    "H72@vhVJu26$RvJ*w4D@rY%WRt!He2X_3e_dsg^n","p&DvwYV9qWq?MAdED@9tQtbEbtxgxUxprVq!p-C#"
    ];
    
    let userKey;
    
    // Logging in on your API key
    function key(x) {
        userKey = x;
// When you need to check
    if (validKeys.includes(userKey)) {
    console.log('A Valid key')
   
      
    } else {
    console.error('invalid key')
    }
    }
    
 
    let Pingres;
function resp(y) {
    Pingres = y;
    console.log(Pingres)
}

    function getResponse(command) {
        switch (command) {
          case 'hello ping': return  resp("Hello user");
          case 'Hi': return resp('Hello!');
          default: return resp('Bad request');
        }}
