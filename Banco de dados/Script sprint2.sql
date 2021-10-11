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

-- Christian(criação da tabela empresa)

create table empresa(
    idEmpresa int primary key auto_increment,
    nomeEmpresa varchar(80),
    email varchar(45),
    cnpj char(14),
    telefone char(10),
    data_criaçao date,
    senha varchar(20)
);

insert into empresa (nomeEmpresa, email, cnpj, telefone, data_criaçao, senha) values
('EasyParking', 'easy@estacionamento.com.br', '00001234567899', '99999-9999', '2021-09-10', 'easy123'),
('Park Plus', 'parkplus@estacionamento.com.br', '00009876543211', '12345-5432', '2021-10-01', 'plus0000'),
('HaVagas?', 'havagas@estacionamento.com.br', '00006547893215', '65415-4125', '2021-06-31', 'vagas999'),
('vagas ja', 'vagasja@estacionamento.com.br', '000032165474163', '45612-0176', '2021-07-28', '1234vagas');

select * from empresa;

-- Willians(Criação da tabela estacionamento)

create table estacionamento(
 idEstacionamento int primary key auto_increment,
 nome VARCHAR(80),
 rua VARCHAR(80),
 numero VARCHAR(10),
 bairro VARCHAR(50),
 cep CHAR(8),
 qtdVagas VARCHAR(10)
 );

insert into estacionamento (nome,rua,numero,bairro,cep,qtdVagas) values
('EasyParking','Consuelo Corner','807','Vergel do Lago','13092150','42'),
('Park Plus','Mertz Vista','215','Jardim Apipema','40155200','81'),
('HaVagas','Alverta Village','528','Bonsucesso','78931000','78'),
('vagas ja','Chauncey Valleys','365','Park dos Buritis','20521110','69');

select * from estacionamento;