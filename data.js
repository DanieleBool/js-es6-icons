let icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

// function getCard(array){
//     // dichiaro gli oggetti del mio array che andrò ad usare
//     const {name, prefix, type, family, color} = array;

//     const container = document.getElementById('cont-card');
//     container.innerHTML += 
//     `<div class="icon card text-center py-4 shadow-sm">
// 		<i class="${family} ${prefix + name} text-primary fs-1"></i>
// 		<div class="text-uppercase">${name}</div>
// 	</div>`;
// }

// getCard(icons);

for(let i = 0; i < icons.length; i++){

    const container = document.getElementById('cont-card');
    container.innerHTML += 
    `<div class="card text-center py-3 m-3 shadow-sm">
		<i class="icon ${icons[i].family} ${icons[i].prefix + icons[i].name} fs-1"></i>
		<div class="text-uppercase">${icons[i].name}</div>
	</div>`;

	colore(icons);
}

function colore(array){
	for(let i = 0; i < array.length; i++){
		let icon = document.querySelector('.icon');
		if(array[i].color == 'blue'){
			icon.classList.add('text-primary');
			// icons[i] = icon.classList.add('text-primary');
			// icon.className += "text-primary";
		}else if(array[i].color == 'orange'){
			icon.classList.add('text-secondary');
			// icon.className += "text-primary";
	
		}else{
			icon.classList.add('text-primary');
			// icon.className += "text-primary";
	
		}
	}
}


let select = document.getElementById('select');

select.addEventListener('change', function(){
    select = document.getElementById("tipo").value;
    //cambio(icons) funzione da creare;

});

function cambio(array){
	array.forEach(animal => {
		
	});
}
