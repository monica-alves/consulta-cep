// primeiro modo de fazer:
//
//$("#cep").on("change", function(){
//     var numCep = $("#cep").val();
//     var url = "https://viacep.com.br/ws/"+numCep+"/json";

//     $.ajax({
//         url: url,
//         type: "get",
//         dataType: "json",
//         success: function(dados){
//             $("#logradouro").val(dados.logradouro);
//             $("#localidade").val(dados.bairro);
//             $("#uf").val(dados.uf);
            
//         }
//     })
// })

//segundo modo de fazer:

$("#cep").on({
    blur: function(){
    var numCep = $("#cep").val();
    var url = "https://viacep.com.br/ws/"+numCep+"/json";

    $.ajax({
        url: url,
        type: "get",
        dataType: "json",
        success: function(dados){
            console.log(dados);
            $("#logradouro").val(dados.logradouro);
            $("#localidade").val(dados.bairro);
            $("#uf").val(dados.uf);
            
             }
        })
    }
})