import { AddCustomerCommand } from "./AddCustomerCommand"
import { Button } from "./Button"
import { CustomerService } from "./CustomerService"

export const commandClient = ()=>{
    const service = new CustomerService()
    const customerAddCommand = new AddCustomerCommand(service)
    const btn = new Button()
    btn.onClick(customerAddCommand)
}