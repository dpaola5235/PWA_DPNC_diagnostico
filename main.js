$(document).ready(function(){
  consulta();
});

function consulta() {
  fetch("https://reqres.in/api/users").then(
    response => response.json()
  ).then(resJson => {
    let cards = $('#registros')
    resJson.data.forEach(element => {
      let card = $(`<div class="col-4" ><div class="card" style="width: 18rem;" id="estilosCard">
            <img src="${element.avatar}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${element.first_name + " " + element.last_name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${element.email}</h6>
            </div>
          </div>
          </div>`);
      cards.append(card)
      /*let h5 = document.createElement('h5')
      h5.textContent = element.first_name;
      h5.setAttribute('class','card-title')
      let h6 = document.createElement('h6');
      h6.setAttribute('class','card-subtitle mb-2 text-muted');
  
      let p = document.createElement('p');
      p.setAttribute('class','card-text')
      console.log(element);
      cards.append(h5)*/
    });
  }

  )
}

function guardar() {
  let data = {
    name: document.getElementById("name").value,
    job: document.getElementById("job").value
  }

  fetch('https://reqres.in/api/users', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json; charset=UTF-8" }

  })
    .then(response => response.json())
    .then(data => {
      document.getElementById("forms").reset()
      //$("#exampleModal").toggle();
      
      console.log(data)
      window.alert("Registro correcto");

    })
}