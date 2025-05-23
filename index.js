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
 const froyo = {
  vanilla: 3,
  strawberry: 1,
  coffee: 2,
 }
 
// Milestones
// You can check your progress against these milestones if you would like some guidance on what to do next.
  // referred to youtube class recordings + previous workshops/demos

// Have you created an HTML file to live serve?
    // yes

// Is the HTML file connected to a JS file?
    // yes

// Can you prompt the user for froyo flavors and store their input?
    // yes

    const userInputString = prompt(                            
      "please enter your favorite froyo flavors, seperated by commas!",  
      "vanilla, vanilla, vanilla, strawberry, coffee, coffee",
    );



// Can you parse the user input into an array of froyo flavors?
      function convertStringToFlavors(commaSeparatedFlavors) {   // key word function  // based on name, they want to convert string to numbers (commaSeperatedNumbers)
        const strings = commaSeparatedFlavors.split(",");   // it knows the next thing is a new value.("separator")  .split makes array - turns a single string into an array of strings
        const froyo = [];               // empty array
        for (const s of strings) {        // s=string of strings
          const froyo = parseInt(s);     // parseInt - built in java function that converts to number then (s = value of the index location) 
          froyo.push(flavor);           // (s)pushes to (number)
        }
        return flavors;
      }
        console.log(flavors);

// Can you build an object to track which flavors you have counted so far?
      let total = 0;
        for(froyoFlavor in froyo) {                         //  froyo is object
          const voteCount = froyo[froyoFlavor];
            total = total + voteCount;
          }
        console.log(total);

// How should that object be updated as you iterate through the array of flavors?

// Are you using functions to organize your code?


// Do your variables and functions have meaningful names?


// Is your code formatted?

// Submission
// Please submit the link to your public GitHub repository.