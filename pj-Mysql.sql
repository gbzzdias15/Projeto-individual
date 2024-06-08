create database myk;
use myk;

create table usuario(
idUsuario int primary key auto_increment,
nome varchar (45),
email varchar(45),
senha varchar(45));


select * from usuario;

create table jogo(
idJogo int primary key,
qtdCartas int);

insert into jogo values (
1,10);

create table vezesJogadas(
idVezes int,
fkUsuario  int ,
foreign key (fkUsuario) references usuario(idUsuario),
fkJogo int,
foreign key (fkJogo) references jogo(idJogo),
 primary key (idVezes,fkUsuario,fkJogo),
 vezesJogadas int,
 tempo int);
 
 
  select round(avg(vezesJogadas), 0) as jogadas, nome from vezesJogadas
  join usuario on idUsuario = fkUsuario group by usuario.nome;
  
 select tempo, nome, vezesJogadas from vezesJogadas
 join usuario on idUsuario = fkUsuario join jogo on idJogo = fkJogo order by tempo; 
 
 select * from vezesJogadas;
 
 SELECT idUsuario, nome,count(vezesJogadas) as vezesJogadas, email  FROM usuario left  
 join vezesJogadas on idUsuario = fkUsuario WHERE email = 'biel@gmail.com' AND senha = '123456' group by idUsuario;

  select tempo , nome from vezesJogadas join usuario on idUsuario = fkUsuario ;
  
     select tempo, nome from vezesJogadas join usuario on idUsuario = fkUsuario join jogo on idJogo = fkJogo order by tempo; 