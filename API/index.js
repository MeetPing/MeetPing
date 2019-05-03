//making validkeys
let validKeys = [
    "H72@vhVJu26$RvJ*w4D@rY%WRt!He2X_3e_dsg^n","p&DvwYV9qWq?MAdED@9tQtbEbtxgxUxprVq!p-C#"
    ]; 
    // Logging in on your API key
    let apikey;
    function key(x) {
      apikey = x;
    }
    // Api usage
    if (validKeys.includes(apikey.value)) {
    console.log('A Valid key')
    } else {
    console.error('invalid key')
    }
