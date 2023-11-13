document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('search');
    
    searchButton.addEventListener('click', function (event) {
        event.preventDefault();
        
        fetchSuperheroData();
    });
});

function fetchSuperheroData() {
    const apiUrl = 'http://localhost:8888/superheroes.php';
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                showAlert(this.responseText);
            } else {
                showAlert('Error occurred while fetching data');
            }
        }
    };

    xhr.open('GET', apiUrl);
    xhr.send();
}

function showAlert(message) {
    alert(message);
}
