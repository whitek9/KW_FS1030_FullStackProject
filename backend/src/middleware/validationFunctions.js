// Below is a list of individual field validation functions that are used in the main validation function - more can be added below and then called in the main function "validationCheck" if additional fields have to be validated (e.g. first/last names, address, etc.)

const nameCheck = (validationObj) => {
    if (typeof validationObj.name != 'string') {
        
        return 'name'  
    }
}

const emailCheck = (validationObj) => {
    
    let emailRegex = new RegExp(/^[a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/g)
    
    if (!emailRegex.test(validationObj.email)) {

        return 'email'
    }
}

const phoneNumberCheck = (validationObj) => {
    
    let phoneNumberRegex = new RegExp("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$")

    if (!phoneNumberRegex.test(validationObj.phoneNumber)) {
       
        return 'phoneNumber'
    }
}

const messageContentCheck = (validationObj) => {
    if (typeof validationObj.content != 'string') {
        
        return 'content'
    }
}

const passwordCheck = (validationObj) => {
    // Password requirements were not defined other than minimum 8 characters. Regex below allows capitalized letters, numbers and some special characters (no minimum requirement), with a minimum length of 8
    let passwordRegex = new RegExp("^[A-Za-z0-9@$!%*?&]{8,}$")

    // Added 'undefined' check since the first check was running the regex test on 'undefined' as a string and letting it pass, sending through the object without a password. I think this is limitation of my validation architecture, but I think is still cleaner/more dynamic than what I submitted with Part 2.
    if (!passwordRegex.test(validationObj.password) || validationObj.password == undefined) {
       
        return 'password'
    }
}

// Below is the propertyIncorrectCheck function, which can validate any number of properties in the list above - simply add in a check in this function to see if the property is present, and call the relevant function above with the validation rules

export const validationCheck = (entry, requiredFields) => {

    let incorrectProperties = []

    if (requiredFields.indexOf('name') > -1 && nameCheck(entry) != null) {
        incorrectProperties.push(nameCheck(entry))
    }

    if (requiredFields.indexOf('email') > -1 && emailCheck(entry) != null) {
        incorrectProperties.push(emailCheck(entry))
    }

    if (requiredFields.indexOf('phoneNumber') > -1 && phoneNumberCheck(entry) != null) {
        incorrectProperties.push(phoneNumberCheck(entry))
    }
   
    if (requiredFields.indexOf('content') > -1 && messageContentCheck(entry) != null) {
        incorrectProperties.push(messageContentCheck(entry))
    }

    if (requiredFields.indexOf('password') > -1 && passwordCheck(entry) != null) {
        incorrectProperties.push(passwordCheck(entry))
    }    

    return incorrectProperties
}

// Below is a function that can check for a missing entry based on a searchValue property string (e.g. "email", "id", or "name") and a checkValue (e.g. req.body.email)

export const missingEntryCheck = (array, searchValue, checkValue) => {
    
    return array.find(user => user[searchValue] == checkValue)
    
}




