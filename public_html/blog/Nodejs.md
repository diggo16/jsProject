#Node.js

##Introduction
Node.js is a runtime application where you can create a web server application [1]. To execute 
the code it uses the Chrome V8 engine. The language that you are using is Javascript which is 
a dynamic programming language that is the most used client side language and the second 
fastest growing language on the server side [2]. The Node.js was created mainly for real-time 
applications. It has a two-way connection so the client and server can exchange data freely [3].

##History
Node.js was created by Ryan Dahl and others at Joyent in 2009. At first it only supported 
Linux but now it is a cross platform application. Today it has grown to one of the most used
web technologies and is used by some big names like Yahoo, Uber, New York Times, Dow 
Jones, PayPal, Microsoft, eBay and Walmart [4].

##Design
Node.js is created for real-time web applications. It has a two-way connection so the client 
and server can send data to each other freely. It has an event-driven architecture and a 
non-blocking I/O API. That makes it possible to improve throughput and scalability [4]. The 
architecture uses a single threaded event loop. A con with that is that if an exception occur the 
whole program crashes.The advantage is that it is a simple implementation and you don’t 
need to worry about the server code [5].

###Event-driven architecture
Event-driven architecture is a software architecture pattern that is useful for example for 
real-time web applications. The pattern improve a reaction for an event that is something that 
happens. It can be a problem, an opportunity, a threshold or a deviation [6]. This pattern has 
very loose coupling because the event don’t know what the consequences for the event is [7] [8].

##Javascript tools
There are different tools that can make the work with Node.js easier. One of them is npm.

###npm
npm is a package manager for Node.js. It installs Node.js programs that are available in the 
npm register.

###Chrome V8
V8 is a javascript engine that is written in C++. It is used in for instance Google Chrome [9]. 

###Node compilers
To run the Node.js code you need a compiler that merge the modules to one bundle. Two 
popular node compilers is Browserify and Babelify.

##Programming in node
When you have written some code and want to run the code in a browser there is a few step
you need to do first. If you are using modules you have to install it with help of npm. You also
need to install your compiler in the same way. The last step is to compile the build with your 
compiler then you are set to go. All this you do in a terminal. For example if you are using 
Windows you open the CMD and print the commands there. 

##Sources
1. Wikipedia, https://en.wikipedia.org/wiki/Node.js, [accessed] 2016 january 6
2. W3Tech, 2015 december 1, http://w3techs.com/ , [accessed]  2016 january 6
3. Capan, Tomislav, Toptal, http://www.toptal.com/nodejs/why-the-hell-would-i-use-node-js , [accessed] 2016 january 6
4. Node.js in Open Source projects on Github, Kenneth Lewenhagen, Anders Åkesson,  
http://bth.diva-portal.org/smash/get/diva2:821065/FULLTEXT02.pdf , [accessed] 2016 january 13
5. Understanding the node.js event loop, Mixu, 2011 february 1, 
http://blog.mixu.net/2011/02/01/understanding-the-node-js-event-loop/ , [accessed] 2016 january 13
6. Event-Driven Architecture Overview, Brenda M. Michelson, 2006 February 2, 
http://www.omg.org/soa/Uploaded%20Docs/EDA/bda2-2-06cc.pdf , [accessed] 2016 january 14
7. Event-driven architecture, Wikipedia, https://en.wikipedia.org/wiki/Event-driven_architecture , [accessed] 2016 january 14
8. Approximate Semantic Matching of Heterogeneous Events, Souleiman Hasan, Sean O’Riain, Edward Curry,
http://www.edwardcurry.org/publications/Hasan_DEBS_2012.pdf, [accessed] 2016 january 14
9. Chrome V8, Google, https://developers.google.com/v8/, [accessed] 2016 january 15

 




