function add(a){
    return function(b){
        if(b) return add(a+b);
        return b;
    }
}

// infinte currying -->console.log((1)(2)(3)...());