int pinoSensor = 0; // Saída do sensor na A0.
int valorLido = 0; //Varíavel auxiliar.
float temperatura = 0; //Variável que armazenará a temperatura lida
int linha =0; //variavel que se refere as linhas do excel

void setup() {//Função que será executada uma
Serial.begin(9600); //Inicia a comunicação serial 9600 bauds.
Serial.println("A temperatura atual é:"); //mostrar temperatura atual
}
void loop() {//Função que será executada continuamente.
valorLido = analogRead(pinoSensor);//Leitura analógica da porta A0
temperatura = (valorLido * 0.00488);// 5 volts/ 1023 = 0,0048 precisão do A/D
temperatura = temperatura * 100;// converte milivolts para celsius - cada 10mV == 1 grau C
linha++;//incrementa linha para que a leitura pule linha
Serial.print(temperatura);
Serial.print(",");
Serial.println(linha);

if(linha > 100)// loop para limitar a qte de dados
{
  linha = 0;
  Serial.println("ROW,SET,2");//alimentação das linhas sempre com os dados iniciados
  }
  delay(1000); //Tempo 10 milisegundos
  }
