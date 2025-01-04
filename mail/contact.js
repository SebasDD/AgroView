function sendMessageWhatsapp()  {
    let number = "525579259171"

    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;

     var url = "https://wa.me/"  + number + "/?text=" + "Cliente: " + name +  "%0a" + message + "%0a%0a";
     console.log(url)
     window.open(url, '_blank').focus();

}
