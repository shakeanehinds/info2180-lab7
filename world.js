window.onload = function() {
    const input = document.querySelector('#country');
    const lookup = document.querySelector('#lookup');
    const display = document.querySelector('#result');
    const check = document.getElementById('all');
    
    lookup.addEventListener('click', getCountryInfo);
    
    
    function getCountryInfo(e) {
        e.preventDefault();
        let val;
        val = `country=${input.value}`;
        if (check.checked == true) {
            val = 'all=true';
        }
        
        
        const http = new XMLHttpRequest();
        http.onreadystatechange = function() {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    display.innerHTML = this.responseText;
                } else {
                    alert("There was an error.");
                }
            }
        };
        http.open('GET',`./world.php?${val}`, true);
        http.send();
    }
    
};