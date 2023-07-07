using hospitalbigbang.Data;
using hospitalbigbang.Models;
using hospitalbigbang.Repository.Interface;
using hospitalbigbang.Repository.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddScoped<IBaseRepo<string, User>, UserRepo>();
builder.Services.AddScoped<ITokenGenerate, TokenService>();
builder.Services.AddScoped<UserService>();
builder.Services.AddScoped<IPatient,PatientServices>();
builder.Services.AddScoped<IUser,UsersService>();
builder.Services.AddCors(opts =>
{
    opts.AddPolicy("AngularCORS", options =>
    {
        options.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin();
    });
});
builder.Services.AddDbContext<hospitalContext>(optionsAction: options => options.UseSqlServer(builder.Configuration.GetConnectionString(name: "AdminSkill")));



var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("AngularCORS");

app.UseAuthorization();

app.MapControllers();

app.Run();
