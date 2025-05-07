function submitOrder(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const items = document.getElementById("items").value;
    const email = document.getElementById("email").value;
  
    const subject = "Sweet Order from " + name;
    const body = `Hello Suncity Bakers,%0D%0A%0D%0AI would like to order:%0D%0A${items}%0D%0A%0D%0AYou can contact me at: ${email}%0D%0A%0D%0AThank you!`;
    window.location.href = `mailto:suncitybakers@example.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  }
  
  function submitContact(event) {
    event.preventDefault();
    const name = document.getElementById("contactName").value;
    const email = document.getElementById("contactEmail").value;
    const message = document.getElementById("contactMessage").value;
  
    const subject = `Customer Inquiry from ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage:%0D%0A${message}`;
    window.location.href = `mailto:suncitybakers@example.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  }
  