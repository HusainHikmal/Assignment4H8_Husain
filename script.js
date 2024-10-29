function handleEdit() {
    document.getElementById("section-form").style.display = ""

    const srcUrl = document.getElementById("image").src;
    const nama = document.getElementById("name").textContent
    const role = document.getElementById("role").textContent
    const availibility = document.getElementById("availibility").textContent
    const usia = document.getElementById("usia").textContent
    const lokasi = document.getElementById("lokasi").textContent
    const pengalaman = document.getElementById("pengalaman").textContent
    const email = document.getElementById("email").textContent


    document.getElementById('form-img').value = srcUrl
    document.getElementById("form-nama").value = nama
    document.getElementById("form-role").value = role
    document.getElementById("form-availibility").value = availibility
    document.getElementById("form-usia").value = usia
    document.getElementById("form-lokasi").value = lokasi
    document.getElementById("form-pengalaman").value = pengalaman
    document.getElementById("form-email").value = email

    
  }


  function handleResume() {
    document.getElementById("section-form").style.display = "none"
  }


  function handleSubmit(event) {
    event.preventDefault()
    
    // get values

    const srcUrl = document.getElementById("image").textContent = document.getElementById("form-img").value;
    if (!document.getElementById("form-img").value) return;  
    const name = document.getElementById("name").textContent = document.getElementById("form-nama").value;
    if (!document.getElementById("form-nama").value) return;  
   const role =  document.getElementById("role").textContent = document.getElementById("form-role").value;
    if (!document.getElementById("form-role").value) return;  
    const availibility =document.getElementById("availibility").textContent = document.getElementById("form-availibility").value;
    if (!document.getElementById("form-availibility").value) return;  
    const usia = document.getElementById("usia").textContent = document.getElementById("form-usia").value;
    if (!document.getElementById("form-usia").value) return;  
    const lokasi = document.getElementById("lokasi").textContent = document.getElementById("form-lokasi").value;
    if (!document.getElementById("form-lokasi").value) return;  
    const pengalaman = document.getElementById("pengalaman").textContent = document.getElementById("form-pengalaman").value;
    if (!document.getElementById("form-pengalaman").value) return;  
    const email = document.getElementById("email").textContent = document.getElementById("form-email").value;
    if (!document.getElementById("form-email").value) return;  



    const Formulir = {
      img : srcUrl,
      name: name,
      role: role,
      availibility: availibility,
      usia: usia,
      lokasi: lokasi,
      pengalaman: pengalaman,
      mail: email
  };
    
    localStorage.setItem("Formulir", JSON.stringify(Formulir));
    
    
    
    document.getElementById("section-form").style.display = "none"
    displayForm()
  }


  function displayForm() {
    // Ambil data dari localStorage
    let Formulir = JSON.parse(localStorage.getItem("Formulir"));

    if (Formulir) {
        const form1 = `
          <h3 id="name">${Formulir.name}</h3>
          <p id="role">${Formulir.role}</p>
        `;
        document.querySelector(".information").innerHTML = form1;

        const form2 = `
        <p id="availibility">${Formulir.availibility}</p>
        <p id="usia">${Formulir.usia}</p>
        <p id="lokasi">${Formulir.lokasi}</p>
        <p id="pengalaman">${Formulir.pengalaman}</p>
        <p id="email">${Formulir.mail}</p>
        `;
        document.querySelector(".Output").innerHTML = form2;

        const form3 = `
        <img id="image" src="${Formulir.img}" alt="" width="220" height="260"  >
        `
        document.querySelector(".pp").innerHTML = form3
    }
}



window.onload = function() {
  displayForm(); 
}



