# Spring Boot project showing modal-angularjs
Refer - http://angular-ui.github.io/bootstrap/#!#%2Fmodal



Some General Information:

We should do two steps: 
the function to open the dialog and elaborate its results, and the controller/view that will handle the dialog lifem, that will follow the routing setup conventions. The complete documentation can be found on UI-Bootsrap website

Then a controller can be created, to handle the operations on the dialog. 
The $modalInstance is the service that is initialize by the previously declared function inside the $modal service.

we implement a close function, in wich we invoke the $modalInstance.close. This will invoke the 'promise' (the then in the previous script and will set on the scope 

resolve (Type: Object) - Members that will be resolved and passed to the controller as locals; it is equivalent of the resolve property in the router.


Commands to Run :

1. Fork/clone/import the project in your favourite IDE

2. ToggleApplication.java run as Java Application

3. Open your browser and hit, localhost:8080

4. Magic starts now :)

5. Click the pencil icon to launch the Modal

6. Feel free to implement your service layer for data

Rock n Roll
