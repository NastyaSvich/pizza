function deleteOrder(i){
    let articul = document.getElementById(`order${i}`).dataset.id;
    DelOneOrder(articul)
    document.getElementById(`td${i}`).style.display = 'none';
}

setTimeout(function(){
   window.location.reload(1);
}, 30000);
