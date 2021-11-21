create database projeto_pi;

use projeto_pi;
-- tabela de cadastro 
create table cadastro ( id int auto_increment primary key, nome varchar (40), 
nome_estacionamento varchar(40), 
endereço varchar(30), 
numero int ,
telefone varchar (11),
email varchar (30),
cnpj varchar (20),
data_criação datetime);
select * from cadastro;
-- tabela para os carros que vão entrar no estacionamento 
create table estacionamento (id int auto_increment primary key, placa varchar (7),
 vagas varchar (10),
 horario_de_entrada datetime, -- usar formato americano 
horario_de_saida datetime, 
sensor varchar (20)); 
insert into cadastro (nome, nome_estacionamento, endereço, numero, telefone, email, cnpj, data_criação, senha) value
('pedro vitor andrade', 'andradePark', 'Alameda Itu', 652, '11923450978', 'pedro.andrade@gmail.com', '54.456.345/0001-09'
, '23/03/2020 18:35', 'andradepark123');
desc estacionamento;
insert into estacionamento (placa, vagas, horario_de_entrada, horario_de_saida, sensor) value 
('DRV3O45', '23', '09:34', '14:21', 'S3');
select * from estacionamento;
select * from cadastro;
-- alterações da tabela 
alter table cadastro modify column data_criação varchar(40);
alter table estacionamento modify column horario_de_entrada varchar (20);
alter table estacionamento modify column horario_de_saida varchar (20);
alter table cadastro  add column senha varchar(18);

 -- inserts TABELA CADASTRO feito pelo CHRISTIAN 
insert into cadastro (nome, nome_estacionamento, endereço, numero, telefone, email, cnpj, data_criação, senha) values
('Jose de alfredo', 'parking mais', 'ruas dos flamingos', '234', '3856-2345', 'josealfredo@hotmail.com', '34.567.830/0000-00','03/09 10:06', 'parking000mais'),
('Antonio almeida e silva', 'estacionamento facil', 'avenida rei pelé','234', '11945670989', 'almeidaesilva@gmail.com', '78.890.123/1234-46', '03/09 10:13', 'estafacil4321'),
('Geraldo aparecido', 'parking zone', 'rua das lamentações','4567', '11987343466', 'geraldoap@outlook.com', '88.957.321/9090-66', '03/09 10:20', 'zone0000'),
('Maria barbosa', 'M-parking', 'Rua das andorinhas','1009', '3900-1234', 'barbosamoria@hotmail.com', '55.000.000/0000-00', '03/09 10:32', 'mp123456'),
('Adailton ferreira', 'estacionamento central', 'rua 25 de abril','12', '11923676789', 'adailtinho@hotmail.com', '89-321-123/4444-01', '03/09 10:38', 'adaestcent789');

 -- inserts TABELA ESTACIONAMENTO feito pelo CHRISTIAN
 insert into estacionamento (placa, vagas, horario_de_entrada, horario_de_saida, sensor) values
 ('CGT1234', '30', '10:00', '11;30', '38'),
 ('AGT890', '12', '13:48', '17:50', '22'),
 ('JJJ002', '55', '12:00', '14:00', '10'),
 ('AMG2021', '38', '08:50', '17:00', '30'),
 ('VWM8998', '20', '06:30', '10:00', '15');

 -- inserts do alvarenga nas duas tabelas :)
insert into cadastro (nome, nome_estacionamento, endereço, numero, telefone, email, cnpj, data_criação, senha)values
('pedro gomes', 'its a park', 'avenida paulista', '1340', '11987564324', 'gomes.pedro@gmail.com', '55.368.239/0001-00', '09/08 12:23', 'park123'),
 ('renato faria', 'farstop', 'avenida timoteo penteado' ,'345', '11965473242','farstop@hotmail.com.br', '13.113.633/0001-58', '22/07 15:33', 'Farstop342312'),
 ('rosana ptreck', 'rosana estacionamento', ' avenida reinaldo cesar', '123','11956473822','ptreck123@gmail.com','35.915.286/0001-10', '20/08 14:22', 'ptreck0100101010'),
 ('valeria nunes', 'staciona da val', 'rua das cachorras', '23','11988670944','nadavaleria@outlook.com', '57.502.045/0001-81','23/07 20:22', 'nadaavervaleria'),
 ('joão alvarenga', 'stoprenga', 'avenida salgado filho', '3938','11932077271','f.piza@gmail.com','87.137.371/0001-06', '09/08 22:34', 'kimetsunojoao');
 insert into estacionamento (placa, vagas, horario_de_entrada, horario_de_saida, sensor) values
('FNT7179', 12, '12:45', '16:22', 12), 
('EQJ2309',30,'12:00', '14:23', 30),
('CEF3833',24,'13:00', '15:34', 24),
('CLW1339',25, '11:23', '15:23', 25),
('CJP8703',12, '17:00', '20:40', 12);