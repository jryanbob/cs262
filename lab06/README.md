# CS 262 - Lab 6

This lab is based on [this](https://cs.calvin.edu/courses/cs/262/kvlinden/06hci/lab.html)

* Fetched google book data then displayed it

Answers to the lab question: 
1. What do the hooks in this code do?
* The hooks in this code create the isLoading and data states as well as allowing us to update them later. 
2. Modify the URL to some invalid value and explain how the code responds.
* The code implements a try/catch block for the fetch, so when the fetch fails, the error is caught, and an error message is sent to the console (which can be seen from the developer view of the web browser)

