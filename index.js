// Problem 1:
// Create a GitHubRepository class with properties userName, fileName, descriptionOfRepository, and code. Create a function that prints all properties. Create an object of the class and use the function.

class GitHub
{
    constructor(username, filename, desofrepo, code)
    {
        this.username = username;
        this.filename = filename;
        this.desofrepo = desofrepo;
        this.code = code;
    }

    printProps()
    {
        console.log(this.username);
        console.log(this.filename);
        console.log(this.desofrepo);
        console.log(this.code);
    }
}

let myRepo = new GitHub("Jesss", "Avarie","Extreme", "0809");

myRepo.printProps();
