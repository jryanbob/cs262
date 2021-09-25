# CS 262 - Lab 4

This lab is based on [this](https://cs.calvin.edu/courses/cs/262/kvlinden/04analysis/lab.html)

* worked on multi page applications, and moving through pages in those apps

Lab Questions:

1. What React construct is used to implement separate pages of an application (cf. separate webpages on the Web)?

* Navigator Stack

2. What is the React Navigation concept that is analogous to a URL/URI on the Web?

* Navagation prop

3. The onPress event handler for the home screen component is specified as () => navigation.navigate('Details'). Can we just say navigation.navigate('Details')? Why or why not?

* No, only an anonamous function can be passed as a paramter 

4. Explain how the hard-coded movie list is presented as a list of titles on the homepage.

* each review contains a title, a rating, a key and a description.  The home screen simply displays the title of the review (item.title)

5. Explain how the details screen presents the details of a single movie.

* when the user clicks on a specific movie title in the HomeScreen, the review for that movie is passed to the DetailsScreen (navigation.navigate('Details', item).  The DetailsScreen is then able to access that specific movie's information.
