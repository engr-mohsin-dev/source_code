// block scope & fnc scope

// var is fnc scope in nature while let & const are blocke scope 

let name = 'ali';
{
    let name = 'mohsin';
    console.log(name)
};

{
    const name = 'ashfaq';
    console.log(name)
}


console.log(name)