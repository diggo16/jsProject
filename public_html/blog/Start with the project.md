## Start with the project

### Minumum requirements
The thought is that my project shall be a simple chat. 
It will contain:
- Author: a name of the person that wrote the message.
- Message.
- date: The current date when the message was posted.

### Extra requirements
This will only be fulfilled if I have extra time.
- List of every persons that is in the chat.
- Multiple chats in different rooms: There will be different rooms that you can join and chat in.

### Start
The first I did was to make a skeleton to the project that I could build on.
I checked different tutorials and read more about react and redux to achieve my goal.
The simple count application on the advice part in the guild by @Andreas helped me alot to get the project started.

When I had my skeleton my first function was a text that you could change by pushing a button.
That was not so much problem but when I added an array instead I had to research more about arrays in react and redux.
After some research I had all the initial words printed on the page. Then I encountered my first big problem in the project.

### Update and mutation
The new function should add a temporary static word to the array when you pushed the button and show the updated array on the site.
The first part worked and the array updated but it didn't update automatically visually. After some reading on the internet I found 
out that the properties are immutable. In my reducer I pushed the array so I got a hunch that it could be the problem that I was trying
to change the object. After a talk with @DavidWaller we concluded that it was the case. If you add concat and the word to the array in 
the return statement you don't change the original array and then everything worked.

##Other research

### Firebase
When I saw the Firebase suggestion on the course page I thought it could be used in my project and was worth checking out. I checked some tutorials and
examples to get a basic knowledge of what it actually was. To update the database seemed pretty easy but to setup the firebase to the project you needed to
add quite a bit. I didn't know how to connect the firebase to the project and thought it would take some time to learn.
I guess you also need to have the app on a server to check if the login works because you login through Facebook or similar.

### ECMA 6
The script construction in ECMA 6 is quite different if you compare to basic javascript and other langauges.
This is the first time I have seen three dots and an array so I had to read up what it did. I have seen arrow functions before in java 8 so I knew what it does but
never used it myself.

### Vlogs
I think it is good to have some "lecture" material that explain a problem that several people had. They are not that long so you can easy take time to watch them through.
It helped me get either more knowledge or to solve a solution.

###Other
I have also checked the slack channel, advice section in the guild and a small overview of some projects. 

## Next
Next step is to print the words in a nice list instead of just after each other and then make it add a user input word instead of a static one.