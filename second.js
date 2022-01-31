function flat(array, res = [])
{
    for (let i = 0; i < array.length; i++)
    {
        if (Array.isArray(array[i]))
        {
            flat(array[i], res);
        }
        else if (typeof array[i] == "number")
        {
            res.push(array[i]);
        }
    }
    return res
}

let arr = [[1, 2], 3, [4, [5, [6], ['foo', 'bar']]]];
ar = flat(arr);
console.log(ar);
