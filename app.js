window.onload = function () {
  const searchBtn = document.getElementById("searchBtn");
  const aliasInput = document.getElementById("alias");
  const heading3 = document.querySelector("h3");
  const heading4 = document.querySelector("h4");
  const paragraph = document.querySelector("p");
  const resultContainer = document.getElementById("result");
  var httpReq = new XMLHttpRequest();

  searchBtn.addEventListener('click',  event => {
      event.preventDefault();
      var url = "superheroes.php";
      httpReq.onreadystatechange = handleSuperheroLoad;
      httpReq.open('GET', url + "?query=" + encodeURLComponent(aliasInput.value));
      httpReq.send();
  });

  function handleSuperheroLoad() {
      if (httpReq.readyState === XMLHttpRequest.DONE) {
          if (httpReq.status === 200) {
              if (aliasInput.value == "") {
                  var response = httpReq.responseText;
                  resultContainer.innerHTML = response;
                  heading3.innerHTML = "";
                  heading4.innerHTML = "";
                  paragraph.innerHTML = "";
              } else {
                  if (aliasInput.value != "") {
                      var response = httpReq.responseText;
                      var responseSplit;
                      if (response != "") {
                          responseSplit = response.split("<p>");
                          heading3.innerHTML = responseSplit[3];
                          heading4.innerHTML =  "A.K.A " + responseSplit[2];
                          paragraph.innerHTML = responseSplit[4];
                          resultContainer.innerHTML = "";
                      } else {
                          resultContainer.innerHTML = "Superhero not found";
                          heading3.innerHTML = "";
                          heading4.innerHTML = "";
                          paragraph.innerHTML = "";
                      }
                  }
              }
          } else {
              alert("A problem with the request occurred.");
          }
      }
  }
}
