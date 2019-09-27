# Little_Fleet_United
Fake car rental website

// To Run//
Install the "express" node package.

In your shell, type "node server.js".

Then in your browser type "localhost:3000".

Utilizes the Bulma library for CSS/Buttons/Columns, because Bulma is a mobile-first library.

The home page is just a simple landing page with the company name and two buttons.
One button (View Fleet) takes you to the page where you can see two distince columns, one which shows all the rented vehicles, and the other shows the available ones.

The other button (Add Car) takes you to a form page, where you can add in all of the relevant information.  When you hit Submit, it will give you an alert that says everything worked, then add the car to the appropriate column in the View Fleet page, and clear all the fields to add another car.

In the View Fleet page I've tried adding an edit button, but haven't quite cracked it yet.  What SHOULD happen is that you click on the field you want to change, and it would populate it in the edit window, then you can change it in the field, and hit the button and it would change. I think it may have something to do with my template literals and DOM manipulation.

can also find iterations at : https://github.com/DoubleMercury/Little_Fleet_United