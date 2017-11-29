function showModal(){
    $('#modal1').modal('open');
}

$(document).ready(function(){
    $('.modal').modal();
    $('.loginBtn').click(showModal);
});

