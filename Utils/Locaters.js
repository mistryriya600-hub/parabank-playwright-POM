export const locators = {
    Registration :{
        Registration_Link : "//*[text()='Register']",
        firstNameInput :"//input[@id='customer.firstName']",
        lastNameInput : "//input[@id='customer.lastName']",
        addressInput : "//input[@id='customer.address.street']",
        cityInput : "//input[@id='customer.address.city']",
        stateInput : "//input[@id='customer.address.state']",
        zipCodeInput : "//input[@id='customer.address.zipCode']",
        phoneInput : "//input[@name='customer.phoneNumber']",
        ssnInput : "//input[@id='customer.ssn']",
        usernameInput : "//input[@id='customer.username']",
        passwordInput : "//input[@id='customer.password']",
        confirmPasswordInput : "//input[@id='repeatedPassword']",
        registerBtn : "//input[@value='Register']",
        logout : "//a[normalize-space()='Log Out']",

    },

    Login:{
        Username_Input : "//*[@name='username']",
        Password_Input : "//*[@type='password']",
        login_btn : "//input[@value='Log In']",
    },

    NewAccount:{
        New_Open_Account_link : "//a[normalize-space()='Open New Account']",
        Account_Type_Opt : "//*[@id='type']",
        Account_Number_opt : "//*[@id='fromAccountId']",
        Open_New_Account_btn : "//*[@value='Open New Account']",
    },
}