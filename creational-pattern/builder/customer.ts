interface ICustomer {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

interface ICustomerBuilder {
  setFirstName(firstName: string): ICustomerBuilder;
  setLastName(lastName: string): ICustomerBuilder;
  setEmail(email: string): ICustomerBuilder;
  setPhoneNumber(firstName: string): ICustomerBuilder;
  build(): ICustomer;
}

class Customer implements ICustomer {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public phoneNumber: string
  ) {}
}

class CustomerBuilder implements ICustomerBuilder {
  private firstName: string = "";
  private lastName: string = "";
  private email: string = "";
  private phoneNumber: string = "";

  public setFirstName(firstName: string): ICustomerBuilder {
    this.firstName = firstName;
    return this;
  }

  public setLastName(lastName: string): ICustomerBuilder {
    this.lastName = lastName;
    return this;
  }

  public setEmail(email: string): ICustomerBuilder {
    this.email = email;
    return this;
  }

  public setPhoneNumber(phoneNumber: string): ICustomerBuilder {
    this.phoneNumber = phoneNumber;
    return this;
  }

  public build(): ICustomer {
    return new Customer(
      this.firstName,
      this.lastName,
      this.email,
      this.phoneNumber
    );
  }
}

class CustomerDirector {
  constructor(private readonly builder: ICustomerBuilder) {}

  public buildMinimalCustomer(
    firstName: string,
    lastName: string,
    email: string
  ) {
    return this.builder
      .setFirstName(firstName)
      .setLastName(lastName)
      .setEmail(email)
      .build();
  }

  public buildFullCustomer(
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string
  ) {
    return this.builder
      .setFirstName(firstName)
      .setLastName(lastName)
      .setEmail(email)
      .setPhoneNumber(phoneNumber)
      .build();
  }
}

const buildCustomer: ICustomerBuilder = new CustomerBuilder();
const directCustomer: CustomerDirector = new CustomerDirector(buildCustomer);
const customer: ICustomer = directCustomer.buildMinimalCustomer(
  "John",
  "Doe",
  "john.doe@example.com"
);

console.log(customer);

const fullCustomer: ICustomer = directCustomer.buildFullCustomer(
  "John",
  "Doe",
  "john.doe@example.com",
  "+910000000000"
);

console.log(fullCustomer);
