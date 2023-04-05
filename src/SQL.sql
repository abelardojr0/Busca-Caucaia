CREATE TABLE estabelecimento (
	id INT GENERATED ALWAYS AS IDENTITY,
	nome VARCHAR(255),
	imagem TEXT,
	cep VARCHAR(45),
	endereco VARCHAR(255),
	bairro VARCHAR(255),
	numero VARCHAR(45),
	telefone VARCHAR(255),
	inicioSemana VARCHAR(255),
	finalSemana VARCHAR(255),
	horarioAbertura VARCHAR(255),
	horarioFechamento VARCHAR(255),
	descricao VARCHAR(255),
	produtos VARCHAR(255),
	id_categoria INT REFERENCES categoria (id),

	PRIMARY KEY (id)
)

CREATE TABLE usuario(
	id INT GENERATED ALWAYS AS IDENTITY,
	nome VARCHAR(255),
	email VARCHAR(255),
	cep VARCHAR(9),
	endereco VARCHAR(255),
	bairro VARCHAR(255),
	senha VARCHAR(255),
	
	PRIMARY KEY(id)
)

INSERT INTO estabelecimento VALUES (DEFAULT, 3,  'Jals', 'https://scontent.ffor14-1.fna.fbcdn.net/v/t39.30808-6/298972571_491602209632552_600877181994153160_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=p5iPtEi8VAUAX_D5FHj&_nc_ht=scontent.ffor14-1.fna&oh=00_AfD7PncbT50sIQPu9_ioYGD8fuFg30d2NhMl7EL93ne1Ew&oe=64286C03', '85 985858585', '0', 'seg-sex', '08-22', '61658070', '450', 'NADA', 'vazio' )