

function compareFuns(fun1,fun2,start,end,step)
{
	let map1 = new Map();
	let map2 = new Map();
	let first = 0;
	let done = false;
	let current = 0;
	let i = start;
        //on first iteration
        if(fun1(i) > fun2(i))
        {
                console.log("first function starts  bigger");
		first = 1;
        }
        else if(fun1(i) < fun2(i))
        {
                console.log("seccond function starts bigger")
		first = 2;
        }
	else
	{
		console.log("both start the same")
	}

	for(let i = start ; i <= end; i += step)
	{
		let a = fun1(i);
		let b = fun2(i);
		if(first == 2 && a>b && !done)
		{
			console.log("first grows bigger at " + i);
			done = true;
		}
		if(first == 1 && b>a && !done)
		{
			console.log("seccond grows bigger at " + i);
			done = true;
		}
		map1.set(i,a);
		map2.set(i,b);
	}

	console.log(map1);
	console.log(map2);
}

function A(x)
{
	return 10000 + 5 * x;
}

function B(x)
{
	return Math.pow(2,x);
}

module.exports = compareFuns ;

//compareFuns(x => 10000 + 5000*(x-1)  , x => 500 * Math.pow(2,x-1) ,1,100,1);






