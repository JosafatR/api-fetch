const getProducts = ( url )=>{    
    fetch( url )
        .then( (resolve)=> resolve.json() ) 
        .then( (resolveJSON => { 
            console.log(resolveJSON); 
            for( let product of resolveJSON){
                console.log( product.title, product.rating.rate );
            }
        }))
        .catch( (error)=> console.error(error) );
};



const getUsersUsingAsyncAwait = async ( url ) =>{

    const resolve = await fetch( url );
    const users = await resolve.json(); 
    console.log( users );
  
    console.log(  users.map( user=> user.email  ) );

}
getUsersUsingAsyncAwait("https://reqres.in/api/users?delay=3");


const generateCards= ( users ) => {

    return users.map( user => `    
  <div class="col-12 col-md-4">
    <div class="card" >
        <div class="card-body">
        <h5 class="card-title">${ user.first_name}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">${ user.email}</h6>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>
  </div>
    `  );
}

const printCards = ( cards ) => document.getElementById("user-cards").innerHTML= cards.join("");


const getUsers = async(url) =>{
    const resolve = await fetch( url );
    const requestData = await resolve.json();
    const users = requestData.data; 
   
    printCards(  generateCards( users ) );
}

const handleButton = () =>{
    getUsers(" https://reqres.in/api/users?delay=3");
}