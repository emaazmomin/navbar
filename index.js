let burger = document.getElementById('burger');
    burger.addEventListener('mousedown', e => {
        let show = document.getElementById('burger-clicked');
        let sideLists = document.getElementById('ul-burger');
        let cancel = document.getElementById('cancel-logo');
        cancel.classList.toggle('show');
        sideLists.classList.toggle('show');
        show.classList.remove('hide');
        show.classList.toggle('show');
    });


    let cancel = document.getElementById('can-border');
    cancel.addEventListener('mousedown', e => {
        let hide = document.getElementById('burger-clicked');
        let sideLists = document.getElementById('ul-burger');
        let cancel = document.getElementById('cancel-logo');
        // if(hide.className == 'show'){
        sideLists.classList.remove('show');
        // sideLists.classList.toggle('hide');
        cancel.classList.remove('show');
        hide.classList.remove('show');
        hide.classList.toggle('hide');
    });


    let search = document.getElementById('search-inp');
    search.addEventListener('blur',e=>{
        document.getElementById('search-sug').style.display = 'none'
    });
    search.addEventListener('mousedown',e=>{
        document.getElementById('search-sug').style.display = 'flex'
    })