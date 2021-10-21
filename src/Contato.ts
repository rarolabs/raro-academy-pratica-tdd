/** 
 * 1) Como usuário, gostaria de criar um contato
 *    * E-mail e Data de Nascimento são opcionais
 *    * o telefone deve ser um telefone válido de 11 digitos, caso seja instanciado com mascara
 *        a mesma deve ser removida
 *    * Caso informe e-mail, esse e-mail deve ser válido
 *    * Em qualquer caso de erro, deve lançar uma exceção
 * 
 * 2) Como usuário, gostaria de alterar o nome de um contato
 *    * O nome deve ser uma string com tamanho, se não, lançar um erro
 *
 * 3) Como usuário gostaria de alterar o telefone de um contato
 *    * O telefone deve ser válido, se não, lançar um erro
 *
 * 4) Como usuário gostaria de alterar o email de um contato
 *    * O telefone deve ser válido, se não, lançar um erro
 * 
 * 5) Como usuário gostaria de alterar a data de nascimento de um contato
 *    * a data deve ser válida, se não, lançar um erro
 * 
 * 6) Como usuário, gostaria de saber quando é o próximo aniversário do contato
 *    * Caso o usuário não tenha data de nascimento informada, retornar null 
 * 
 */


export class Contato {

  public nome: string;
  public telefone: string;
  public email?: string;
  public dataNascimento?: Date;

  constructor(nome: string, telefone: string, email?: string, dataNascimento?: Date){
    ...
  }

}
