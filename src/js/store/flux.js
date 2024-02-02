const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			listCharacters: [],
			listPlanets: [],
			listVehicles: [],
			listFavorites: [],
			infoCharacter: {}
		},
		actions: {

			getCharacters: () => {
				fetch("https://www.swapi.tech/api/people/")
					.then((response) => response.json())
					.then((data) => setStore({listCharacters:data.results}));
					// .then((data) => console.log(data));	

			},
			getVehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles/")
					.then((response) => response.json())
					.then((data) => setStore({listVehicles:data.results}));
					// .then((data) => console.log(data));
			},
			getPlanets: () => {
				fetch("https://www.swapi.tech/api/planets/")
					.then((response) => response.json())
					.then((data) => setStore({listPlanets:data.results}));
					// .then((data) => console.log(data));
			},

			getInformation: (type , id) => {
				fetch(`https://www.swapi.tech/api/${type}/${id}`)
					.then((response) => response.json())
					.then((data) => setStore({infoCharacter:data.result}));
					// .then((data) => console.log(data));
			},

			addFavorites: (name) => {
				setStore({listFavorites:getStore().listFavorites.concat(name)});

				
			},

			deleteFavoritos: (elemento) => {
				const store = getStore();
				const updatedFavoritos = store.listFavorites.filter((fav) => fav !== elemento);
				setStore({ listFavorites: updatedFavoritos });
			},

		}
	}
}



export default getState;
