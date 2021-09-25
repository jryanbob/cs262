# CS 262 - Lab 4

This lab is based on [this](https://cs.calvin.edu/courses/cs/262/kvlinden/04analysis/lab.html)

* worked on multi page applications, and moving through pages in those apps

Lab Questions:

Explain how the hard-coded movie list is presented as a list of titles on the homepage.

* each review contains a title, a rating, a key and a description.  The home screen simply displays the title of the review (item.title)

Explain how the details screen presents the details of a single movie.

* when the user clicks on a specific movie title in the HomeScreen, the review for that movie is passed to the DetailsScreen (navigation.navigate('Details', item).  The DetailsScreen s then able to access that specific movies information.
