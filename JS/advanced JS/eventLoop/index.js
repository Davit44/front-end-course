var x = 4,       
  obj = { 
    x: 3, 
    bar: function( ) { 
        var x = 2; 
        setTimeout((function( ) { 
            var x = 1; 
            console.log( this.x ); 
        }), 1000); 
    } 
  }; 
obj.bar();
//////////////////////////
var x = 4,       
  obj = { 
    x: 3, 
    bar: function( ) { 
        var x = 2; 
        setTimeout((function( ) { 
            var x = 1; 
            console.log( this.x ); 
        }).bind(this), 1000); 
    } 
  }; 
obj.bar();
////////////////////////////
var x = 4,       
  obj = { 
    x: 3, 
    bar: function( ) { 
        var x = 2; 
        setTimeout(() => { 
            var x = 1; 
            console.log( this.x ); 
        }, 1000); 
    } 
  }; 
obj.bar();
let t = obj.bar
t() // not same result as `obj.bar();`