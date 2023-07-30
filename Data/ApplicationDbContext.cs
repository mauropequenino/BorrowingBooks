using BorrowingBooks.Models;
using Microsoft.EntityFrameworkCore;

namespace BorrowingBooks.Data
{
    //Ajuda a conectar e realizar operacoes com  banco de dados
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        //Criar tabela
        public DbSet<EmprestimosModel> Emprestimos { get; set; }
    }
}
