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
('Márcia Teixeira', 'Estagiária', 71245699233, 1123234871, 11914234567),
('Gabriel Fernandez', 'Estagiário', 73345625253, 1123234567, 11989766347),
('Fernanda Barbosa', 'Líder', 66245625563, 1175734871, 11972334547),
('Gabriel Silva', 'Líder', 67745625665, 1122734231, 11922366547),
('Natan', 'Gerente', 11745525345, 1125534791, 11951367587),
('Genésio', 'Gerente', 67745625665, 1122734231, 11922366547),
('Anastácia', 'Monitora', 99745235775, 1131534771, 11945366549),
('Junior', 'Estagiário', 91275235345, 1195234851, 11959266219),
('Beatriz', 'Estagiária', 95385238995, 1132224741, 11942786579),
('Jeniffer', 'Estagiária', 11745145788, 1135637781, 11988321569),
('Alisson', 'Estagiário', 44742232695, 1131884274, 11943876316);

select * from funcionário;