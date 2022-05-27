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
    [Range(1888, 9999, ErrorMessage = "Please enter 4 digit car year.")]
    public int Year { get; set; }
}