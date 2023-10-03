
export const ValidateSignUp=(formData) =>{

    const messages ={
       //message to display whether the email is in a valid format
       EMAIL_EMPTY : "Email must be in a valid format and cannot be empty!",

       MOBILE_NO_EMPTY : "Enter a valid mobile number!",
       
       //message to display when special characters are enetered
       SPECIAL_CHARS: "Text fields cannot be empty or cannot contain any special characters/symbols!",
       PASSWORD_RULES: "Please match the given guidelines when creating a password!",

    };
    // Matches any character that is not a letter, number, a slash, brackets or whitespace
    const specialCharsRegex = /[^A-Za-z0-9\s(),./]/;

    const output ={
            status : false,
            message : null
    };

    // Password validation
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d.*\d.*\d)(?=.*[!@#$%^&*()_+]).{8,}$/;

  if (!passwordRegex.test(formData.password)) {
    output.message = messages.PASSWORD_RULES;
    output.status = false;
    return output;
  }
  
    if(formData.name.length < 0 || specialCharsRegex.test(formData.name))
    {
        output.message = messages.SPECIAL_CHARS;
        output.status = false;
        return output;
    
    }

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
    {
        output.message = messages.EMAIL_EMPTY;
        output.status = false;
        return output;
    } 

    if((formData.mobileno.length < 10) || (formData.mobileno.length > 12))
    {
        output.message = messages.MOBILE_NO_EMPTY;
        output.status = false;
        return output;
    }

    if(formData.address.length < 0 || specialCharsRegex.test(formData.address))
    {
        output.message = messages.SPECIAL_CHARS;
        output.status = false;
        return output;
    
    }
    
    else
    {
        output.status = true;
        return output;
    }
 
};