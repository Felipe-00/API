function fetchApiData(){
    fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json())
        .then(data => {
            const list = document.querySelector('#fill_list');

            data.map((item) => {
                let li = document.createElement('lista');

                li.setAttribute('id', item.id);
                li.innerHTML = item.title;
                list.appendChild(li);


            })
        })
}

