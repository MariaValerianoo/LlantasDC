create database dbLlantas_dc;
use dbLlantas_dc;

create table Usuario (
idUsuario int (15) primary key not null,
nombreUsuario varchar(20) not null,
apellidoUsuario varchar (20) not null,
telefonoUsuario int(11) not null,
correoUsuario varchar(35) not null
);

create table Cliente (
RutCliente varchar (15) primary key not null,
NombreTercero varchar (100) not null,
TipoIdentificacion varchar (7) not null,
dirreccionCliente varchar (60) not null,
ciudadCliente varchar(15) not null,
TelefonoCliente int(11) not null,
nombreContacto varchar(50)
);

create table Producto (
referenciaProducto varchar (20) primary key not null,
dimensionProducto varchar (15) not null,
diseñoProducto varchar (18) not null,
marca varchar(15),
precio float not null,
cantidad int (5) not null
);

create table Venta (
numorden int auto_increment primary key not null,
fechacompra date not null,
totalcompra int not null,
idusuariofk int not null,
rutclientefk varchar (15) not null,
numfacturaFK int not null,
metodoPago varchar (20) not null,
idContenedorFK int
);

create table detalleVenta (
referenciaProductoFK varchar (20),
numOrdenFK int,
cantidad int (5)
);

create table Contenedor(
idContenedor int auto_increment primary key not null,
FacturaContenedor varchar (20) not null,
naviera varchar (20) not null,
agenteAduanera varchar (25) not null,
fechaLlegada date
);

alter table Venta 
add constraint ventausa
foreign key (idUsuarioFK)
references Usuario(idUsuario);

alter table Venta 
add constraint ventacli
foreign key (rutClienteFK)
references Cliente(rutCliente);

alter table detalleVenta 
add constraint prodetalle
foreign key (referenciaProductoFK)
references Producto(referenciaProducto);

alter table detalleVenta
add constraint ventadetalle
foreign key (numOrdenFK)
references Venta(numOrden);

alter table Venta 
add constraint ventaconte
foreign key (idContenedorFK)
references contenedor(idContenedor);

alter table Usuario change telefonoUsuario telefonoUsuario int (10);

describe Usuario;
select* from Usuario;
alter table usuario change telefonoUsuario telefonoUsuario int(10) not null;
insert into Usuario values (36306093,'Jaqueline','Bocanegra',3107626827,'jaquelinebb65@gmail.com'),(7720166,'Breyner','Solano',3013077791,'superbrey@gmail.com');

alter table Cliente change NombreTercero NombreTercero varchar(100) not null;
alter table Cliente change CiudadCliente CiudadCliente varchar (25) not null;
alter table Cliente change NombreContacto NombreContacto varchar (100);



describe Cliente;
insert into Cliente values 
('900769308-9','A&E CONTAINER S.A.S','NIT','CL 10 N 14 A 85 SUR TO 9 AP 733','Mosquera',6018938608,'A&E CONTAINER S.A.S'),
('817001773-3','A.I.C.','NIT','Cra. 36c #5B2-32','Cali',03100000000,''),
('830078512-6','ACH Colombia S.A.','NIT','Tv. 23 # 97-73','Bogotá',6017444686,''),
('830027461-0','ADDEC S.A.S','NIT','CR 2 4 88','Mosquera',6018295603,'ADDEC SAS'),
('800138188-1','Administradora de Fondos de Pensiones y Cesantía Protección S.A.','NIT','Calle 49 No. 63 - 100','Bogotá',03100000000,''),
('3242138-7','ADOLFO MORA GIL','Cédula','CL 6 3 20','Madrid',3108119206,'ADOLFO MORA GIL'),
('1090375435-8','ADRIANA JIMENEZ PEREZ','Cédula','K D X 30 VDA PORVENIR','El Zulia',3202599901,'ADRIANA JIMENEZ PEREZ'),
('901255510-8','AGENCIA DE ADUANAS MAG CUSTOMS SAS','NIT','CR 28B 78 77 OFC 401','Bogotá',6016298190,'AGENCIA DE ADUANAS MAG CUSTOMS SAS '),
('900453866-1','AGRETRANS JAS SAS','NIT','CRA 123 13 21 IN  6 1','Bogotá',6019192757,'AGRETRANS JAS SAS'),
('901408098-2','AGUA POTABLE VELASQUEZ SAS','NIT','TV 39 A 38 A 64 SUR','Bogotá',3108501140,'AGUA POTABLE VELASQUEZ SAS'),
('900298456-9','AIRGAS DE COLOMBIA SAS','NIT','TV 72D BIS 42C 62 SUR','Bogotá',6014929836,'AIRGAS DE COLOMBIA SAS'),
('79791143-5','ALEJANDRO ALARCON DIAZ','Cédula','CL 75 70 F 38 LC 5','Bogotá',3213153531,'ALEJANDRO ALARCON DIAZ'),
('1056908524-0','ALEX ANTONIO BARRERA CASTRO','Cédula','DG 49 A 53 A 48','Bogotá',3168262346,'ALEX ANTONIO BARRERA CASTRO'),
('7063136-9','ALEXIS ALFONSO RINCON','Cédula','CL 5 A SUR 13 57','Bogotá',3208004142,'ALEXIS ALFONSO RINCON'),
('860503617-3','ALFA','NIT','Av. calle 24A #59','Bogotá',03100000000,''),
('19443263-0','ALFONSO EDUARDO N NIETO MORA','Cédula','CR 15   4   44 SUR BRR SAN ANTONIO','Bogotá',3112232207,'ALFONSO EDUARDO N NIETO MORA'),
('830113831-0','Aliansalud','NIT','Cr 8 38 - 31','Bogotá',03100000000,''),
('901240125-1','ALIANZA TRANSPORTADORA PREMIUM SAS','NIT','CR 96 I 15 C 70','Bogotá',3125623371,''),
('901818342-4','ALMACEN Y TALLER CHITARAQUE S.A.S','NIT','KILOMETRO 0.2 VIA SIBERIA FUNZA','Tenjo',3105783667,'ALMACEN Y TALLER CHITARAQUE S.A.S'),
('79128266-0','ALONSO RODRIGUEZ GUERRERO','Cédula','CRA 104 15A 38 BL 6 CA 21','Bogotá',3214920357,'ALONSO RODRIGUEZ GUERRERO'),
('19213923-7','ALVARO DEL NIÑO JESUS TORRES GUERRERO','Cédula','CL 77 81 36 P 2','Bogotá',6014300837,'ALVARO DEL NIÑO JESUS TORRES GUERRERO'),
('1000685925-8', 'ALVARO JOSE MORENO SUAREZ', 'Cédula', 'CR 113 16 H 37', 'Bogotá',6013203668477,'ALVARO JOSE MORENO SUAREZ'),
('818000140-0', 'Ambuq Ars', 'NIT', 'Cra. 51 #79', 'Barranquilla',0310000000,' '),
('830082138-1', 'AMERICANA DE TRACTOMULAS SAS', 'NIT', 'CLL 2 SUR 51 38', 'Villavicencio',6086689272,'AMERICANA DE TRACTOMULAS SAS'),
('900909223-3', 'ANALYTICS & MEDIA S.A.S', 'NIT', 'CL 64 1 15 TO 3 AP 701', 'Bogotá',6013217766836,'ANALYTICS & MEDIA S.A.S'),
('839000495-6', 'Anas Wayuu', 'NIT', 'Carrera 16 No. 16 - 31', 'Riohacha',0310000000,' '),
('52496493-5', 'ANDREA CAROLINA GALINDO MARTINEZ', 'Cédula', 'CRA 68 A 24B 10', 'Bogotá',6013133915947,'ANDREA CAROLINA GALINDO MARTINEZ'),
('1020841674-6', 'ANDRES FELIPE DIAZ GOMEZ','Cédula','CRA 17 No. 140 - 36', 'Bogotá',6013118176765,'ANDRES FELIPE DIAZ GOMEZ'),
('1016107062-7','ANDRES FELIPE GAMBOA SUAREZ', 'Cédula', 'CR 10 1 89 CONJ SAN MIGUEL CA 39','Bogotá',6013106398541,'ANDRES FELIPE GAMBOA SUAREZ'),
('46455073-8', 'ANGELA DEL PILAR BECERRA DIAZ', 'NIT', 'CALLE 14 No. 38B 17', 'Bogotá',3016860489,'ANGELA DEL PILAR BECERRA DIAZ'),
('900147238-2','Aportes en Línea S.A.','NIT', 'Carrera 13 No 26 A - 47','Bogotá',6013078333,''),
('901755502-4', 'AQUAFINA SAS','NIT', 'CR 12 A NO. 19 32 SUR','Soacha',6013004919819,'MARIA DEL ROSARIO QUIROGA DE MANCERA'),
('860506531-2', 'ARAS SAS', 'NIT', 'CR 10 28 49','Bogotá',6013410130,'ARAS SAS'),
('900463696-7','AREA 8 S A S EN LIQUIDACION', 'NIT', 'CL 7 B 70 B 48 OF 101 P 1','Bogotá',3103432614,'AREA 8 S A S EN LIQUIDACION'),
('899999107-9','Ars Convida','NIT','Carrera 58 No. 9-97','Bogotá',0310000000,' '),
('800042471-8','Arus S.A','NIT', 'Cl. 19 #43g-155','Bogotá',6017424488,' '),
('79618154-7','ASDRUBAL JIMENEZ ARDILA','Cédula','CL 42 D SUR 79 F 26','Bogotá',6013133632839,'ASDRUBAL JIMENEZ ARDILA'),
('900935126-7','Asmet Salud','NIT','Cra. 7 #35-23','Bogotá',0310000000,' '),
('900339917-1','ASOCIACION DE PRODUCTORES DE LECHE Y AGROPECUARIOS DE LAS VEREDAS DE VILLANUEVA QUEBRADA GRANDE Y CUCUBO DE SANTA R','NIT','CR 8 8 13','Santa Rosa De Viterbo',6013108034004,'ASOCIACION DE PRODUCTORES DE LECHE Y AGROPECUARIOS'),
('830501198-0','ASODATOS S.A.S','NIT','CALLE 33 6B 24 PISO 9','Bogotá',6017435544,'ASODATOS S.A.S '),
('800226061-2','Asofondos de Colombia','NIT','Cl 72 8-24 Of 901','Bogotá',0310000000,' '),
('900319291-2','Asopagos S A','NIT','calle 31 No. 13 51','Bogotá',6014875111,''),
('901301935-1','AVANCE MC SAS ','NIT','CR 36 10 24','Bogotá',3115214756,'AVANCE MC SAS'),
('900446470-8','AVATRANS SAS','NIT','CLL 129C  57A 57 CA 57','Bogotá',3105583580,'AVATRANS SAS'),
('51593283-7','AZUCENA DEL PILAR ARIAS AVILA','NIT','CALLE 5C No. 34A - 18','Bogotá',3105612250,'AZUCENA DEL PILAR ARIAS AVILA'),
('800037800-8','Banco Agrario de Colombia S.A.','NIT','Cra. 8 No. 15-43','Bogotá',6015948500,''),
('860007335-5','Banco Caja Social S.A.','NIT','Cra. 7 No. 77-65','Bogotá',3077060,''),
('860051135-4','Banco Citibank','NIT','N/A','Bogotá',6057000,''),
('860035827-5','banco comercial AV Villas s.a.s','NIT','Carrera 86 No. 6 - 37','Bogotá',3363199,''),
('890203088-9','Banco Cooperativo Coopcentral','NIT','Calle 116 No. 23-06','Bogotá',6017431088,''),
('860002964-4','Banco de bogotá','NIT','CL 36 No 7 - 47 P 15','Bogotá',0310000000,'');

select* from Cliente;

describe Producto;
insert into Producto values 
('ecoplus C2','21575/R17.5','direccional','XBRI',1140000.0,100),
('xforza P1','235/75R17.5','tracción','XBRI',1146000.0,124),
('ecoway P1','235/75R17.5','direccional','XBRI',600000.0,80),
('xforza Z1','29580R22.5','traccion','XBRI',1145000.0,124),
('mix wokrs Z2','29580R22.5','traccion','XBRI',1133000.0,44),
('forza plus','29580R22.5','traccion','XBRI',1120000.0,244),
('xforza','29580R22.5','traccion','XBRI',1000000.0,91),
('ws806','29580R22.5','traccion','XBRI',1250000.0,40),
('ecoplus P2','29580R22.5','direccional','XBRI',925000.0,254),
('xcurve Z1','29580R22.5','direccional','XBRI',986000.0,60),
('mix wokrs Z1','29580R22.5','mixto','XBRI',989000.0,40),
('zigzag Z6','29580R22.5','direccional','XBRI',1100000.0,40),
('forza block P1','12R22.5','tracción severa','XBRI',1100000.0,50),
('forza block P2','12R22.5','tracción mixta','XBRI',1300000.0,20);
select * from Producto;

describe Contenedor;
insert into Contenedor values
('','CO-230713-017CN','Maerks','CARGO LOGISTIC','2023-07-03'), 
('','CO-230814-024CN','MAERKS','CARGO LOGISTIC','2023-08-14'),
('','CO 230912-002CN','MAERKS','CARGO LOGISTIC','2023-12-06'),
('','CO 230912-001CN','MAERKS','CARGO LOGISTIC','2023-12-20'),
('','CO 230912-002CN','MAERKS','CARGO LOGISTIC','2023-12-28'),
('','CO 231011-011CN','Yang ming','CARGO LOGISTIC','2024-01-01'),
('','CO-23116-012CN','MAERKS','CARGO LOGISTIC','2024-02-14'),
('','CO-231116-011CN','WAN HAI','CARGO LOGISTIC','2024-03-14'),
('','CO-240115-007CN','CARGO LOGISTIC','Cargo logistoc','2024-04-06'),
('','CO-240215-007CN','MAERKS','CARGO LOGISTIC','2024-04-24'),
('','CO-240320-004CN','ROLCO SHIPPING','CARGO LOGISTIC','2024-06-29'),
('','CO-240517 007CN','WAN HAI','CARGO LOGISTIC','2024-07-09'),
('','CO-240405 001CN','WAN HAI','CARGO LOGISTIC','2024-07-09'),
('','CO-240510-007CN','MAERKS','CARGO LOGISTIC','2024-08-04'),
('','C0-2345','maerks','cargo logistic','2024-08-04'); 
select * from Contenedor;

alter table venta drop numfacturaFK;

insert into venta (numOrden, fechacompra, totalcompra, idusuariofk, rutclientefk, metodoPago, idContenedorFK)
values 
('','2024-01-01', 5000000, 36306093, '900769308-9', 'Tarjeta de crédito', 1),
('','2024-01-02', 2500000, 36306093, '817001773-3', 'Efectivo', 2),
('','2024-01-03', 1500000, 7720166, '830078512-6', 'Tarjeta de débito', 3),
('','2024-01-04', 3000000, 7720166, '830027461-0', 'Transferencia', 4),
('','2024-01-05', 4500000, 36306093, '800138188-1', 'Tarjeta de crédito', 5),
('','2024-01-06', 6000000, 7720166, '3242138-7', 'Efectivo', 6),
('','2024-01-07', 2000000, 36306093, '1090375435-8', 'Transferencia', 7),
('','2024-01-08', 5500000, 7720166, '900453866-1', 'Tarjeta de débito', 8),
('','2024-01-09', 3500000, 36306093, '901408098-2', 'Tarjeta de crédito', 9),
('','2024-01-10', 1200000, 7720166, '900298456-9', 'Efectivo', 10),
('','2024-01-11', 1700000, 36306093, '79791143-5', 'Transferencia', 11),
('','2024-01-12', 2100000, 7720166, '1056908524-0', 'Tarjeta de débito', 12),
('','2024-01-13', 4500000, 36306093, '7063136-9', 'Efectivo', 13),
('','2024-01-14', 5000000, 7720166, '860503617-3', 'Tarjeta de crédito', 14),
('','2024-01-15', 7000000, 36306093, '19443263-0', 'Transferencia', 13),
('','2024-01-16', 3000000, 7720166, '830113831-0', 'Tarjeta de débito', 4),
('','2024-01-17', 1000000, 36306093, '901240125-1', 'Efectivo', 3),
('','2024-01-18', 2500000, 7720166, '901818342-4', 'Tarjeta de crédito', 8),
('','2024-01-19', 1100000, 36306093, '79128266-0', 'Transferencia', 5),
('','2024-01-20', 4000000, 7720166, '19213923-7', 'Tarjeta de débito', 1),
('','2024-01-21', 5500000, 36306093, '1000685925-8', 'Tarjeta de crédito', 8),
('','2024-01-22', 2200000, 7720166, '818000140-0', 'Transferencia', 6),
('','2024-01-23', 1900000, 36306093, '830082138-1', 'Efectivo', 7),
('','2024-01-24', 4800000, 7720166, '900909223-3', 'Tarjeta de débito', 12),
('','2024-01-25', 6500000, 36306093, '839000495-6', 'Transferencia', 11),
('','2024-01-26', 3300000, 7720166, '52496493-5', 'Tarjeta de crédito', 13),
('','2024-01-27', 4500000, 36306093, '1020841674-6', 'Efectivo', 10),
('','2024-01-28', 2900000, 7720166, '1016107062-7', 'Transferencia', 2),
('','2024-01-29', 5100000, 36306093, '46455073-8', 'Tarjeta de débito', 3),
('','2024-01-30', 6000000, 7720166, '900147238-2', 'Tarjeta de crédito', 14),
('','2024-02-01', 3700000, 36306093, '901755502-4', 'Transferencia', 9),
('','2024-02-02', 8000000, 7720166, '860506531-2', 'Efectivo', 6),
('','2024-02-03', 2700000, 36306093, '900463696-7', 'Tarjeta de débito', 5),
('','2024-02-04', 3800000, 7720166, '899999107-9', 'Tarjeta de crédito', 4),
('','2024-02-05', 5000000, 36306093, '800042471-8', 'Transferencia', 2),
('','2024-02-06', 6500000, 7720166, '79618154-7', 'Tarjeta de crédito', 1),
('','2024-02-07', 2100000, 36306093, '900935126-7', 'Efectivo', 8),
('','2024-02-08', 4300000, 7720166, '900339917-1', 'Tarjeta de débito', 10),
('','2024-02-09', 3200000, 36306093, '830501198-0', 'Transferencia', 9),
('','2024-02-10', 4700000, 7720166, '800226061-2', 'Tarjeta de crédito', 4),
('','2024-02-11', 1400000, 36306093, '830027461-0', 'Efectivo', 1),
('','2024-02-12', 1100000, 7720166, '830113831-0', 'Tarjeta de débito', 4),
('','2024-02-13', 5500000, 36306093, '901240125-1', 'Tarjeta de crédito', 3),
('','2024-02-14', 2100000, 7720166, '901818342-4', 'Transferencia', 6),
('','2024-02-15', 3900000, 36306093, '79128266-0', 'Tarjeta de débito', 5),
('','2024-02-16', 2000000, 7720166, '19213923-7', 'Efectivo', 9),
('','2024-02-17', 4200000, 36306093, '1000685925-8', 'Tarjeta de crédito', 11),
('','2024-02-18', 3100000, 7720166, '818000140-0', 'Transferencia', 12),
('','2024-02-19', 2400000, 36306093, '830082138-1', 'Tarjeta de débito', 13),
('','2024-02-20', 5000000, 7720166, '900909223-3', 'Tarjeta de crédito', 14);
select* from venta;

insert into detalleVenta (referenciaProductoFK, numOrdenFK, cantidad)
values ('ecoplus C2', 1, 10),('xforza P1', 2, 15),('ecoway P1', 3, 5),('xforza Z1', 4, 8),('mix wokrs Z2', 5, 6),
('forza plus', 6, 12),('xforza', 7, 7),('ws806', 8, 4),('ecoplus P2', 9, 10),('xcurve Z1', 10, 9),('mix wokrs Z1', 11, 8),
('zigzag Z6', 12, 11),('forza block P1', 13, 6),('forza block P2', 14, 5),('ecoplus C2', 15, 10),('xforza P1', 16, 15),
('ecoway P1', 17, 5),('xforza Z1', 18, 8),('mix wokrs Z2', 19, 6),('forza plus', 20, 12),('xforza', 21, 7),
('ws806', 22, 4),('ecoplus P2', 23, 10),('xcurve Z1', 24, 9),('mix wokrs Z1', 25, 8),('zigzag Z6', 26, 11),('forza block P1', 27, 6),
('forza block P2', 28, 5),('ecoplus C2', 29, 10),('xforza P1', 30, 15),('ecoway P1', 31, 5),('xforza Z1', 32, 8),
('mix wokrs Z2', 33, 6),('forza plus', 34, 12),('xforza', 35, 7),('ws806', 36, 4),('ecoplus P2', 37, 10),
('xcurve Z1', 38, 9),('mix wokrs Z1', 39, 8),('zigzag Z6', 40, 11),('forza block P1', 41, 6),('forza block P2', 42, 5),
('ecoplus C2', 43, 10),('xforza P1', 44, 15),('ecoway P1', 45, 5),('xforza Z1', 46, 8),('mix wokrs Z2', 47, 6),('forza plus', 48, 12),
('xforza',49, 7),('xforza',50, 7);

/*consultas basicas por tablas*/
select * from cliente;
select * from usuario;
select facturaContenedor from Contenedor;
select referenciaProductoFK, cantidad from detalleVenta;
select * from Venta;
select dimensionProducto, precio from Producto;


/*consultas especificas por tablas*/
-- Cliente
select * from cliente where nombreTercero = 'Asmet Salud';
select * from cliente where ciudadCliente = 'barranquilla';
select count(*) as 'Numero de clientes registrados' from cliente;
select * from cliente where telefonocliente like '%78%';
select * from cliente where dirreccioncliente = 'Cra. 7 No. 77-65';
select * from cliente where rutcliente not like '%9';
select * from cliente where rutcliente = '1000685925-8';


-- Usuario
select * from usuario where nombreUsuario = 'nombre_usuario';
select * from usuario where correoUsuario = 'email_usuario';
select count(*) as 'Total de usuarios registrados' from usuario;
select * from usuario order by apellidoUsuario asc;
select * from usuario where telefonoUsuario like '3%';
select * from usuario where idusuario = 'idusuario';
select * from usuario where telefonoUsuario like '3%';
select * from usuario where telefonoUsuario not like '8%';


-- 	Contenedor 
select * from contenedor where naviera = 'MAERKS';
select * from contenedor where fechaLlegada between '2024-01-01' and '2024-10-08';
select * from Contenedor where facturaContenedor like '%23%';
select FacturaContenedor from Contenedor where idContenedor >=10;
select count(*) as'Numero de contenedores pedidos' from Contenedor;
select * from Contenedor order by fechaLlegada desc;
select fechaLlegada from Contenedor where facturaContenedor like '%24%';

-- DetalleVenta
select * from detalleVenta where cantidad >= 10;
select * from detalleVenta where referenciaProductoFK = 'ecoplus C2';
select numOrdenFK from detalleVenta where cantidad<= 5;
select referenciaProductoFK from detalleVenta where cantidad >=12;
select * from detalleVenta where referenciaProductoFK like '%P1%';
select * from detalleVenta where numOrdenFK >= 8;
select numOrdenFK, cantidad from detalleVenta where referenciaProductoFK= 'forza plus';
-- Venta
select * from Venta where metodoPago = 'Transferencia';
select * from Venta order by totalCompra desc;
select * from Venta where fechaCompra between '2024-01-01' and '2024-01-31';
select* from Venta where rutClienteFK = '900769308-9';
select * from Venta where metodoPago like '%Tarjeta%';
select * from Venta where idUsuarioFK = 36306093;
select numOrden, fechaCompra, totalCompra from Venta where rutClienteFK = '900769308-9';

-- Producto  
select * from Producto where cantidad < 50;
select * from Producto where dimensionProducto = '29580R22.5';
select * from Producto where marca = 'XBRI';
select * from Producto where diseñoProducto = 'tracción';
select * from Producto where marca = 'XBRI' and cantidad > 100;
select * from Producto where diseñoProducto like '%mixto%';
select * from Producto where precio between 900000 and 1200000;


/*modificaciones por tabla*/
-- Cliente
update cliente set nombreTercero = 'danna' where rutCliente = '9-1028481760';
update cliente set direccionCliete = 'calle 105' where rutcliente = '9-1028481760';
update cliente set telefono = '3024778127' where rutcliente  = '9-1028481760';
update cliente set ciudadcliente = 'tunja' where rutcliente = '9-1028481760';
update cliente set NombreContacto = 'Pedro Perez' where rutcliente = '9-1028481760';

-- Usuario
update usuario set nombreUsuario = 'danna' where idusuario = 1028481760;
update usuario set correoUsuario = 'fghj@gmail.com' where idusuario = 1028481760;
update usuario set telefonoUsuario = 'nuevo_telefono' where idusuario = 1028481760;
update usuario set apellidoUsuario = 'nueva_direccion' where idusuario = 1028481760;
update usuario set idusuario=1014661499 where telefonoUsuario= 3103305802;

-- Contenedor 
select* from Contenedor;
update Contenedor set naviera = 'MAERKS' where idContenedor = 1;
update Contenedor set fechaLlegada = '2023-07-13' where idContenedor = 1;
update Contenedor set naviera = 'YANG MING' where idContenedor = 6;
update Contenedor set agenteAduanera = 'CARGO LOGISTIC' where idContenedor = 9;
update Contenedor set fechaLlegada = '2024-08-14' where idContenedor = 14;

-- DetalleVenta
update detalleVenta set cantidad = 11 where numOrdenFK=6;
update detalleVenta set referenciaProductoFK = 'ecoplus C2' where numOrdenFK = 8;
update detalleVenta set cantidad = 20 where numOrdenFK = 19;
update detalleVenta set referenciaProductoFK = 'WS806' where numOrdenFK = 4;
update detalleVenta set cantidad = 16 where numOrdenFK = 23;
-- Venta
update producto as p
inner join detalleventa as v on p.referenciaProducto = v.referenciaProductofk
set p.cantidad = p.cantidad - v.cantidad
where v.numOrdenFK = 1;
update Venta set metodoPago = 'Transferencia' where numOrden = 1;
update Venta set rutClienteFK = '817001773-3' where numOrden = 6;
update Venta set totalCompra = totalCompra + 500000 where rutClienteFK = '900769308-9';
update Venta set fechaCompra = '2024-02-01' where numOrden = 3;
update Venta set idContenedorFK = 3 where numOrden > 20;
-- Producto 
update Producto set precio = 1200000 where referenciaProducto = 'forza plus';
update Producto set cantidad = 150 where referenciaProducto = 'xforza Z1';
update Producto set dimensionProducto = '30580R22.5' where referenciaProducto = 'zigzag Z6';
update Producto set diseñoProducto = 'mixto' where referenciaProducto = 'ecoplus C2';
update Producto set marca = 'Pirelli' where referenciaProducto = 'xforza P1';


/*Eliminaciones por tabla*/
-- Cliente
delete from cliente where rutcliente = 50;
delete from usuario where idUsuario= 3;

-- Contenedor 
delete from Contenedor where idContenedor= 15;

-- detalleVenta 
delete from detalleVenta where numOrdenFK = 50;

-- Venta 
delete from Venta where fechaCompra < '2024-01-01';

-- Producto 
delete from Producto where precio < 500000;


/*Consultas multitablas*/

-- Consultar la compra de un cliente especifico 
select c.nombreTercero, p.referenciaProducto, p.dimensionProducto, p.diseñoProducto, v.totalCompra, d.cantidad
from Venta v
inner join cliente c on v.rutClienteFK = c.rutCliente
inner join detalleVenta d on v.numOrden = d.numOrdenFK
inner join producto p on d.referenciaProductoFK =  p.referenciaProducto
where rutCliente = '900298456-9';


/*subconsultas*/

-- Cliente con la mayor compra
select v.rutclientefk, v.totalCompra, c.NombreTercero, c.RutCliente
from venta v
inner join cliente c on v.rutClientefk=c.rutCliente
where v.totalCompra = (
    select MAX(v.totalCompra)
    from venta v
    where v.rutClientefk = v.rutClientefk
);

/*Procedimientos*/
-- 1
DELIMITER //
CREATE PROCEDURE registrarVenta (numOrden int,fechaCompra date,totalCompra int,idUsuarioFK int,rutClienteFK varchar(15),metodoPago varchar(20),idContenedorFK int)
BEGIN 
insert into Venta values ( numOrden, fechaCompra, totalCompra, idUsuarioFK, rutClienteFK, metodoPago, idContenedorFK);
END //
DELIMITER ;

call registrarVenta(' ', '2024-01-16', 5110000, 36306093, '900769308-9', 'tarjeta', 4);

describe contenedor;
-- 2
DELIMITER //
CREATE PROCEDURE registrarContenedor (idContenedor int,facturaContenedor varchar(20),naviera varchar(20),agenteAduanera varchar(25),fechallegada date)
BEGIN 
insert into Contenedor values ( idContenedor ,facturaContenedor ,naviera ,agenteAduanera ,fechallegada );
END //
DELIMITER ;

call registrarContenedor(' ', '2024-01-16', 5110000, 36306093, '900769308-9', 'tarjeta', 4);

-- 3
DELIMITER //
CREATE PROCEDURE registrarCliente (rutCliente int,NombreTercero varchar(100),TipoIdentificacion varchar(7),dirreccionCliente varchar(60),CiudadCliente varchar(25),TelefonoCliente int,NombreContacto varchar(100))
BEGIN 
insert into Cliente values (rutCliente ,NombreTercero ,TipoIdentificacion ,dirreccionCliente ,CiudadCliente ,TelefonoCliente ,NombreContacto );
END //
DELIMITER ;

call registrarCliente('9-1028481760', 'Maria Valeriano', 'Cedula', 'Calle 10', 'bogota', 3103305802, 'Maria Valeriano');

-- 4
DELIMITER //
CREATE PROCEDURE registrarProducto (referenciaProducto varchar(20),dimensionProducto varchar(15),diseñoProducto varchar(18),marca varchar(15),precio float, cantidad int)
BEGIN 
insert into Producto values ( referenciaProducto ,dimensionProducto ,diseñoProducto ,marca ,precio , cantidad  );
END //
DELIMITER ;

call registrarProducto(' ', '2024-01-16', 5110000, 36306093, '900769308-9', 'tarjeta', 4);

-- 5 Registrar Detalle Venta
DELIMITER //
CREATE PROCEDURE registrarDV (referenciaProductoFK varchar(20),numOrdenFK int,cantidad int)
BEGIN 
insert into Producto values ( referenciaProductoFK (20),numOrdenFK ,cantidad   );
END //
DELIMITER ;

call registrarDV(' ', '2024-01-16', 5110000, 36306093, '900769308-9', 'tarjeta', 4);
 -- 5 Registrar Usuario
DELIMITER //
CREATE PROCEDURE registrarUsuario (idUsuario int ,nombreUsuario varchar(20),apellidoUsuario varchar (20),
telefonoUsuario int(11) ,
correoUsuario varchar(35) )
BEGIN 
insert into usuario values ( idUsuario,nombreUsuario,apellidoUsuario,telefonoUsuario,correoUsuario);
END //
DELIMITER ;

call registrarUsuario(1028481760, 'Maria', 'Valeriano', 3103305802, 'maria@gmail.com');