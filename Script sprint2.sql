-- Augusto ( criação da tabela funcionário )
create database Sprint2;
use sprint2;
create table Funcionário (
idFuncionário int primary key auto_increment,
NomeFuncionário varchar(45),
Cargo varchar(45),
CPF char(11),
TelefoneFixo char(10),
celular char(11)) auto_increment = 1;

insert into Funcionário ( nomefuncionário, cargo, cpf, telefonefixo, celular ) values
('Joaquim Alves', 'Gerente', 34576532124, 1125412112, 11988256612),
('João Siqueira', 'Monitor', 24564578677, 1125467543, 11987456754),
('Murilo Pinto', 'Estagiário', 65647871231, 1145663433, 11934587766),
('Maicon Douglas', 'Líder', 77838342471, 1133798654, 11997965435),
('Brenda Rosa', 'Monitora', 36345479888, 1165564489, 11909066784),
('Márcia Teixeira', 'Estagiária', 71245699233, 1123234871, 11914234567);

select * from funcionário;