create database BDmascotas;
use BDmascotas;

create table Cliente(
cedulaCliente int (11) primary key,
nombreCliente varchar (15),
apellidoCliente varchar (15),
direccionCliente varchar (15),
telefono int (10),
idMascotaFK int (11)
);

create table Producto (
codigoProducto int (11) primary key,
nombreProducto varchar (15),
marca varchar(15),
precio float,
cedulaClienteFK int (11)
);

create table Mascota(
idMascota int (11) primary key,
nombreMascota varchar(15),
generoMascota varchar(15),
razaMascora varchar(15),
cantidad int (10)
);

create table Mascota_vacuna(
codigoVacunaFK int (11),
idMascotaFK int(11),
enfermedad varchar(15)
);

create table Vacuna(
codigoVacuna int(11) primary key,
nombreVacuna varchar (11),
dosisVacuna int(10),
enfermedad varchar(15)
);

alter table Cliente 
add constraint FKidMascota
foreign key (idMascotaFK)
references Mascota(idMascota);

alter table Producto 
add constraint FKcedulaCliente
foreign key (cedulaClienteFK)
references Cliente(cedulaCliente);

alter table Mascota_vacuna 
add constraint codvac
foreign key (codigoVacunaFK)
references Vacuna(codigoVacuna);


alter table Mascota_vacuna 
add constraint masvac
foreign key (idMascotaFK)
references Mascota(idMascota);

describe Mascota_vacuna;
describe Vacuna;
describe Mascota;

alter table Producto 
add cantidadProducto int not null;

alter table Mascota 
change column cantidad cantidadMascota int(10);

alter table Mascota_vacuna rename to detalleVacuna;
