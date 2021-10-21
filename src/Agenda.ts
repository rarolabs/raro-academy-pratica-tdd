
import { Contato } from "./Contato";


/** 
 * 1) Como usuário, gostaria de criar uma agenda de contatos
 * 
 * 2) Como usuário, gostaria de encontrar um contato por uma parte do seu nome
 *
 * 3) Como usuário, gostaria de encontrar um contato pelo seu e-mail
 *
 * 4) Como usuário, gostaria de descobrir quais contatos fazem aniversário hoje
 *
 * 5) Como usuário, gostaria de salvar minha agenda em um arquivo JSON.
 *   * Caso não dê certo a gravação, lançar um erro 
 *
 * 6) Como usuário, gostaria de importar minha agenda através de um arquivo JSON.
 *   * Caso não dê certo a leitura, lançar um erro
 *
 */
 
export class Agenda {
   public contatos: Contato[];
}
