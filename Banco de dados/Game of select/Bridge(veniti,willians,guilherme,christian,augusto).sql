create  database dia_g;
use dia_g;
-- MUNDO DE DAYLON
create table Daylon(
Rd int primary key auto_increment,
nome varchar(45),
raça varchar(45),
check(raça = 'Elfo'or raça = 'Anão' or raça = 'Aasimar'),
classe varchar(45),
maestria decimal(10,2),
check(maestria between 0 and 100)
);

create table Runas(
idRuna int primary key auto_increment,
runa varchar(45),
descript text,
maestria decimal(10,2),
fkDaylon int,
foreign key (fkDaylon) references Daylon(Rd)
);

insert into runas values
(null,'kong','Runa da força',''),
(null,'Wyrm','Runa da resistência',''),
(null,'Dod','Runa do foco',''),
(null,'Ise','Runa da destreza',''),
(null,'Uvar','Runa elétrica',''),
(null,'Fjell','Runa de fogo','');


-- MUNDO DE AFALON
create table Afalon(
idRa int primary key primary key auto_increment,
nome varchar(45),
raça varchar(45),
classe varchar(45),
maestria decimal(10,2),
fkGems int,
foreign key (fkGems) references Gems(idGema)
);

create table Gems(
idGema int primary key auto_increment,
tipoGema varchar(45) unique,
descriçao varchar(45),
maestria decimal(10,2)
);

select*from afalon;
select*from daylon;
select*from runas;
select*from gems;

insert into daylon values
(null, 'Aragorn', 'Elfo','ladino','82'),
(null, 'Angrod', 'Elfo','Druida','84'),
(null, 'Dvalinn', 'Anão','Ferreiro','99'),
(null, 'Andvari', 'Anão','Ferreiro','58'),
(null, 'Araquiel', 'Aasimar','Guardião','77'),
(null, 'Bethor', 'Aasimar','Xamã','49');