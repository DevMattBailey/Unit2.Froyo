// console.log('hello')

// Froyo
// As you pick out a flavor at your favorite local frozen yogurt shop, 
// you overhear the management team discussing how they would like a way 
// for customers to order online. You make small talk and offer your services 
// to help them build a web app.

// Instructions
// Build a website according to this user story:

// Upon opening the website, a visitor receives a prompt to enter a list 
// of comma-separated froyo flavors. They type vanilla,vanilla,vanilla,strawberry,coffee,coffee. 
// In the browser console, they are able to see how many of each flavor they have ordered. 
// In this case, they observe that they have ordered three vanilla, two coffee, and one strawberry.
  //
//  const froyo = {
//   vanilla: 3,
//   strawberry: 1,
//   coffee: 2,
//  }

//  const froyo = [
//   {
//     flavor: 'vanilla',
//     orders: 3
//   },
//   {
//     flavor: 'strawberry',
//     orders: 1
//   },
//   {
//     flavor: 'coffee',
//     orders: 2
//   }
//  ] ;
//  console.log(froyo)
  // console.log(froyo[2].orders)

const Orders = {};
    const userOrderInput = prompt(                            
      "please submit your order one by one",  
      "vanilla, vanilla, vanilla, strawberry, coffee, coffee",
      );
    const favsArray = userOrderInput.split(',');
    console.log(favsArray);
  const froyo = {userOrderInput};

  // function convertOrderInputToOrderCount(userOrderInput) {
    
  // }
  // for (const IndividualOrder of strings) {
  //   const OrderCount = parseInt(s);
  //   Orders.push(orders)
  // }


// Milestones
// You can check your progress against these milestones if you would like some guidance on what to do next.
  // referred to youtube class recordings + previous workshops/demos

// Have you created an HTML file to live serve?
    // yes

// Is the HTML file connected to a JS file?
    // yes

// Can you prompt the user for froyo flavors and store their input?
    // yes 

    // const userInput = prompt(                            
    //   "please enter your favorite froyo flavors, seperated by commas!",  
    //   "vanilla, vanilla, vanilla, strawberry, coffee, coffee",
    // );

// Can you parse the user input into an array of froyo flavors?

// for(let i = 0; i < froyo.length; i++) {
//   const favorite = froyo[i];
//   // console.log(favorite.flavor)
// }
// for(key in froyo) {
//   // console.log(froyo[key]);
// }

// Can you build an object to track which flavors you have counted so far?
        // keep track of the total starting at 0
        // go through each order
        // add the order to the total
        // return the total

function getSumOfOrders(Orders) {
  const total = 0;
for(let i = 0; i < favsArray.length; i++) {
} 
}


    // const Orders = {};
    // const userOrderInput = prompt(                            
    //   "please submit your order one by one",  
    //   "vanilla, vanilla, vanilla, strawberry, coffee, coffee",
    //   );
    // const favsArray = userOrderInput.split(',');
    // console.log(favsArray);


// How should that object be updated as you iterate through the array of flavors?
      // check if it already exists in the object
        // if it doesn't exist
          // add the key with a count of 1 
        // if it already exists
          // add one to the value 

// Are you using functions to organize your code?


// Do your variables and functions have meaningful names?


// Is your code formatted?

// Submission
// Please submit the link to your public GitHub repository.
