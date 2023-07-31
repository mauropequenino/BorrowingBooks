

$(document).ready(function()
{
    $('#Emprestimos').DataTable
        (
            {
                language:
                {
                    "decimal": "",
                    "emptyTable": "No data available in table",
                    "info": "Exibindo _START_ de _END_ registos",
                    "infoEmpty": "Exibindo 0 de 0 registos",
                    "infoFiltered": "(Filtrado de _MAX_ entradas)",
                    "infoPostFix": "",
                    "thousands": ",",
                    "lengthMenu": "Exibir _MENU_ registos",
                    "loadingRecords": "Carregando...",
                    "processing": "",
                    "search": "Procurar:",
                    "zeroRecords": "Resultados não encontrados!",
                    "paginate": {
                        "first": "Primeiro",
                        "last": "Último",
                        "next": "Próximo",
                        "previous": "Anterior"
                    },
                    "aria": {
                        "sortAscending": ": activate to sort column ascending",
                        "sortDescending": ": activate to sort column descending"
                    }
                }
            }
        );

    setTimeout(function ()
    {
        $(".alert").fadeOut("slow", function ()
        {
            $(this).alert('close');
        })
    }, 5000)
});