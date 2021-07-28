export class User{
    id: number ;
    firstName: string ;
    lastName: string ;
    pdpPath: string ;

    constructor(id = 0, firstName = "", lastName = "", pdpPath = ""){
        this.id = id ;
        this.firstName = firstName ;
        this.lastName = lastName ;
        this.pdpPath = pdpPath ;
    }
}