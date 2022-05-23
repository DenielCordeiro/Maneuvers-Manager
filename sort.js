// array de string  

var frutas = ['Maça','Pera','Banana','Amora'];
 
frutas.sort();
 
RESULTADO = ["Amora", "Banana", "Maça", "Pera"];



// array de ojetos

var frutas = [{
	nome : 'Banana'
},
{
	nome : 'Maça'
},
{
	nome : 'Pera'
},
{
	nome : 'Amora'
}];
 
frutas.sort(function (a, b) {
	
	return (a.nome > b.nome) ? 1 : ((b.nome > a.nome) ? -1 : 0);
 
});
 
