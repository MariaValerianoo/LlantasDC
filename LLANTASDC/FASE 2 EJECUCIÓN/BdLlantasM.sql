create database llantasdc;
use llantasdc;

create table usuario(
idusuario int(15) primary key not null,
nombreusuario varchar(20) not null,
apellidousuario varchar(20) not null,
telefono int(11) not null,
correousuario varchar(35) not null
);
create table cliente(
rutCliente varchar(15) primary key not null,
nombretercero varchar(100) not null,
tipoidentificacion varchar(7) not null,
direccionCliente varchar(50) not null,
ciudadcliente varchar(25) null,
telefono int(11) not null,
nombreContacto varchar(100) null
);
create table producto(
referenciallanta varchar(20) primary key not null,
marca varchar(15) not null,
dimension varchar(15)not null,
diseño varchar(18)not null,
precio float not null,
cantidad int (5) not null
);
create table venta(
    numorden int auto_increment primary key not null,
    fechacompra date not null,
    totalcompra int not null,
    idusuariofk int not null,
    rutclientefk varchar(15) not null,
    metodopago varchar(20) not null,
    idcontenedorfk int null,
    numfacturafk int null
);
create table detalleVenta(
referenciallantafk varchar(20) not null,
numordenfk int not null,
cantidad int(7) not null
);
create table contenedor(
idcontenedor int auto_increment primary key,
numfacCon varchar(20) not null,
naviera varchar(20) not null,
agenteaduanero varchar(25) not null
);
alter table venta
add constraint ventasar
foreign key(idusuariofk)
references usuario(idusuario);

alter table venta
add constraint fgh
foreign key(rutclientefk)
references cliente(rutcliente);

alter table venta
add constraint fkventa
foreign key(idcontenedorfk)
references contenedor(idcontenedor);

alter table detalleventa
add constraint fkdeta
foreign key(referenciallantafk)
references producto(referenciallanta);

alter table detalleventa
add constraint detafk
foreign key(numordenfk)
references venta(numorden);

insert into usuario (idusuario, nombreusuario, apellidousuario, telefono, correousuario) 
values (36306093, 'Jaqueline', 'Bocanegra', 3107626827, 'jaquelinebb65@gmail.com'),
       (7720166, 'Breyner', 'Solano', 3103077791, 'superbrey@gmail.com');

insert into cliente (rutcliente, nombretercero, tipoidentificacion, direccioncliente, ciudadcliente, telefono,nombrecontacto) 
values('900769308-9','A&E CONTAINER S.A.S','NIT','CL 10 N 14 A 85 SUR TO 9 AP 733','Mosquera',6018938608,'A&E CONTAINER S.A.S'),
('817001773-3','A.I.C.','NIT','Cra. 36c #5B2-32','Cali',03100000000,''),
('830078512-6','ACH Colombia S.A.','NIT','Tv. 23 # 97-73','Bogotá',7444686,''),
('830027461-0','ADDEC S.A.S','NIT','CR 2 4 88','Mosquera',6018295603,'ADDEC SAS'),
('800138188-1','Administradora de Fondos de Pensiones y Cesantía Protección S.A.','NIT','Calle 49 No. 63 - 100','Bogotá',03100000000,''),
('3242138-7','ADOLFO MORA GIL','Cédula','CL 6 3 20','Madrid',3108119206,'ADOLFO MORA GIL'),
('1090375435-8','ADRIANA JIMENEZ PEREZ','Cédula','K D X 30 VDA PORVENIR','El Zulia',320259990,'ADRIANA JIMENEZ PEREZ'),
('901255510-8','AGENCIA DE ADUANAS MAG CUSTOMS SAS','NIT','CR 28B 78 77 OFC 401','Bogotá',6016298190,'AGENCIA DE ADUANAS MAG CUSTOMS SAS '),
('900453866-1','AGRETRANS JAS SAS','NIT','CRA 123 13 21 IN  6 1','Bogotá',6019192757,'AGRETRANS JAS SAS'),
('901408098-2','AGUA POTABLE VELASQUEZ SAS','NIT','TV 39 A 38 A 64 SUR','Bogotá',6013108501140,'AGUA POTABLE VELASQUEZ SAS'),
('900298456-9','AIRGAS DE COLOMBIA SAS','NIT','TV 72D BIS 42C 62 SUR','Bogotá',0314929836,'AIRGAS DE COLOMBIA SAS'),
('79791143-5','ALEJANDRO ALARCON DIAZ','Cédula','CL 75 70 F 38 LC 5','Bogotá',3213153531,'ALEJANDRO ALARCON DIAZ'),
('1056908524-0','ALEX ANTONIO BARRERA CASTRO','Cédula','DG 49 A 53 A 48','Bogotá',3168262346,'ALEX ANTONIO BARRERA CASTRO'),
('7063136-9','ALEXIS ALFONSO RINCON','Cédula','CL 5 A SUR 13 57','Bogotá',3208004142,'ALEXIS ALFONSO RINCON'),
('860503617-3','ALFA','NIT','Av. calle 24A #59','Bogotá',03100000000,''),
('19443263-0','ALFONSO EDUARDO N NIETO MORA','Cédula','CR 15   4   44 SUR BRR SAN ANTONIO','Bogotá',3112232207,'ALFONSO EDUARDO N NIETO MORA'),
('830113831-0','Aliansalud','NIT','Cr 8 38 - 31','Bogotá',03100000000,''),
('901240125-1','ALIANZA TRANSPORTADORA PREMIUM SAS','NIT','CR 96 I 15 C 70','Bogotá',3125623371,''),
('901818342-4','ALMACEN Y TALLER CHITARAQUE S.A.S','NIT','KILOMETRO 0.2 VIA SIBERIA FUNZA','Tenjo',3105783667,'ALMACEN Y TALLER CHITARAQUE S.A.S'),
('79128266-0','ALONSO RODRIGUEZ GUERRERO','Cédula','CRA 104 15A 38 BL 6 CA 21','Bogotá',321492035,'ALONSO RODRIGUEZ GUERRERO'),
('19213923-7','ALVARO DEL NIÑO JESUS TORRES GUERRERO','Cédula','CL 77 81 36 P 2','Bogotá',6014300837,'ALVARO DEL NIÑO JESUS TORRES GUERRERO'),
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
('800226061-2','Asofondos de Colombia','NIT','Cl 72 8-24 Of 901','Bogotá',0310000000,' ');

select*from cliente;
update cliente set telefono=3202599901 where rutcliente='1090375435-8';
update cliente set telefono=3214920357 where rutcliente='79128266-0';
update cliente set telefono=6017444686 where rutcliente='830078512-6';
update cliente set telefono=6014929836 where rutcliente='900298456-9';

alter table cliente change column telefono telefono int(15);
select*from cliente;