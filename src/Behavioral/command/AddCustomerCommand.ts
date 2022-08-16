import { CustomerService } from "./CustomerService";
import { ICommand } from "./ICommand";

export class AddCustomerCommand implements ICommand{
    service : CustomerService

    constructor(service : CustomerService){
        this.service = service
    }

    execute(): void {
        this.service.addCustomer()    
    }
}