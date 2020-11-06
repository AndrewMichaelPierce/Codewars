
squareDigits=n=>parseInt([...Math.abs(n)+''].map(Number).map(x=>x**2).join(''));
squareDigits=n=>+[...n+''].map(Number).map(x=>x**2).join('');
