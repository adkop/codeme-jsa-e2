/**
 * Rozszerz funkcje css o takie działanie, że nie tylko ustawia ale jeżeli przyjmie tylko parametr element, /*:String*/ruleName
 * wtedy zwroci wartosc reguły
 * 
 * przyklady wywolania funkcji css:
 
 * css(element, "opacity", 0.3) -> wstawi regule tj. element.style.opacity = 0.3
 
 * css(element, {opacity: 0.3, visibility: "hidden"}) -> wstawi reguly opacity i visibility
 
 * css(element, "opacity") -> zwroci np. 0.3;
 */
 
 function css(element, ...rest) {
    let names = rest[0];
    if (1 < rest.length && "object" !== typeof names) {
        names = { [names]: rest[1] };            
    }
    
    Object.assign(element.style, names);
 }
