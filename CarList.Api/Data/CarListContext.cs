using CarList.Api.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace CarList.Api.Data;

public class CarListContext : DbContext
{
    public CarListContext(DbContextOptions<CarListContext> options)
        : base(options)
    {
    }

    public DbSet<Car> Cars { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Car>().ToTable("Car").HasData(
            new Car { CarId = 1, Make = "Benz", Model = "Motorwagen", Year = 1888 },
            new Car { CarId = 2, Make = "Ford", Model = "Model A", Year = 1927 },
            new Car { CarId = 3, Make = "Oldsmobile", Model = "6", Year = 1928 }
        );
    }
}
