function code(string)
{
    let firstPart = string.slice(0, string.length / 2);
    console.log(firstPart);
    let secondPart = string.slice(string.length / 2);
    console.log(secondPart);
    let newStr = "";
    for (let i = 0; i < string.length / 2; i++)
    {
        if (firstPart[i] != undefined)
        {
            newStr = newStr + firstPart[i];
        }
        newStr += secondPart[i];
        
    }
    return newStr;
}

function decode(string)
{
    let firstPart = "";
    let secondPart = "";
    let lastSymbol = "";
    if (string.length % 2 != 0)
        {
            lastSymbol = string.slice(-1);
            string = string.slice(0, string.length -1)
        }
    
    for (let i = 0; i < string.length; i++)
    {

        if (i % 2 == 0)
        {
            firstPart += string[i];
            
        }
        if (i % 2 != 0)
        {
            secondPart += string[i];
            
        }
    }
    return firstPart + secondPart + lastSymbol;
}


console.log(decode("Hweolrllod !!"))
