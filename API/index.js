const validKeys = [
    "key1","key2"
    ];
    
    let userKey;
    
    // Logging in on your API key
    function key(x) {
        userKey = x;
    }
    
    // When you need to check
    if (validKeys.includes(userKey)) {
    console.log('A Valid key')
    } else {
    console.error('invalid key')
    }
