using System.Collections.Generic;
using CarList.Api.Data;
using CarList.Api.Data.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CarList.Api.Controllers;

[ApiController]
[Route("[controller]")]
public class CarController : ControllerBase
{
    private CarListContext _context { get; }
    public CarController(CarListContext context)
    {
        this._context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Car>>> GetAllCars()
    {
        return Ok(await _context.Cars.ToListAsync());
    }

    // [HttpGet("{carId}")]
    // public ActionResult<Car> GetCarById([FromRoute] int carId)
    // {
    //     return Ok();
    // }

    [HttpPost]
    public async Task<ActionResult<Car>> AddCar([FromBody] Car car)
    {
        _context.Cars.Add(car);
        await _context.SaveChangesAsync();

        return Ok(car);
    }

    // [HttpPut]
    // public ActionResult<Car> UpdateCar([FromBody] Car updatedCar)
    // {
    //     return Ok();
    // }
}
