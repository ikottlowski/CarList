using System.ComponentModel.DataAnnotations;

namespace CarList.Api.Data.Models;
public class Car
{
    [Key]
    public int CarId { get; set; }
    [Required]
    public string? Make { get; set; }
    [Required]
    public string? Model { get; set; }
    [Required]
    public int Year { get; set; }
}