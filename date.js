fuction validate(){
    var Name = document.marry_daug.Name;
    var Email = document.marry_daug.Email;
    var Address = document.marry_daug.Address;
    var number = document.marry_daug.number;
                if(Name.value.length <=0){
        alert("Name is required");
        Name.focus();
        return false;
    }
        if(Email.value.length <=0){
        alert("Email is required");
        Email.focus();
        return false;
    }
if(Address.value.length <=0){
        alert("Address is required");
        Address.focus();
        return false;
    }
    if(Number.value.length <=0){
        alert("Number is required");
        Number.focus();
        return false;
    }
        if(Description.value.length <30){
        alert("Name is required");
        Name.focus();
        return false;
    }
return false;
}
fuction myOnClickFn(){
   document.location.href="file:///C:/Users/pc/Desktop/pg.html"