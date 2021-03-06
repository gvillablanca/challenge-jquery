$(document).ready( function(){

	$('.js-back').hide();//oculta flecha de back en index
	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
    renderActivities(activitiesArray);
});

//funcion para agregar texto nuevas recetas al parrafo en index (funciono solo llamando la funcion)
function printNews(){
	$('#new-recipes').text('NUEVAS RECETAS');
}
printNews();


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	for(var i = 0; i<recipesArray.length; i++){
		if(recipesArray[i].highlighted === true){
			renderRecipe(recipesArray[i]);
		}		
	}
    console.log('Recipes: ', recipesArray);	
}


/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
    $('.list-recipes').append(
        "<div> <h2 class='title-recipe'>" + recipe.title + "</h2>" + 
            "<span class='author-recipe'> <strong>" + recipe.source.name + "</strong></span>" + 
                "<img src='img/recipes/640x480/" + recipe.name + ".jpg' alt='...' >" + 
        "</div>" );

	console.log('Voy a pintar la receta: ', recipe);   
}

/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {

	console.log('Activities: ', activitiesArray);
    

    for(var i = 0; i < activitiesArray.length; i++){
        renderActivity(activitiesArray[i]);
        
    }
    if(activitiesArray.length > 0){
        $('.wrapper-message').hide();
    }
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


