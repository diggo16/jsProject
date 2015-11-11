## Demo

### Introduction
This is a review of a demo web application named "Superhero battler 2000!" that uses npm, react, react router, redux and browserify.

### Link
Github: https://github.com/krawaller/riastart2015
Run: http://blog.krawaller.se/riastart2015/#/?_k=vmfg1n

### Getting started
- Open the terminal
- Go to the folder where the index file is in the terminal
- Run "npm install" to install the neccessary packages
- Run "npm run build" to create a js file that runs the application (run this step everytime you update the code) 

### Functions
- Kill "person" button. Every hero has a button to try to kill another hero that is alive.
- Duck button. Dodge the other heroes attacks.
- Hero profile. Click on the hero's name to check the profile with short information about him.

### Understanding the code
In the beginning it was hard to understand the code when you haven't programmed in react before.
It is a different approach than normal javascript with more complex connections to each other.
When you look at one component you understand quite fast what it was and did.
The hard part was to find where it was used.
If you give it some time you can at least understand some of the connections and how it work.

### Changing the code
When I looked at the program to see something you can add I come up with the idea to add a death counter in
the profile like the kill counter. First a managed to add a label for the deaths and
after a while a counter that updated itself. The problem was that it added a death
for every person that tried to kill him. My solution was to add a new function that
run when a person died instead of adding it when he was killed. I tried to implement
the solution that didn't manage to make it work.

### What I learned
- How a react application looks and more knowledge of how it works. 
-  How you can initialize and start a react application with browserify