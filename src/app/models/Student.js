import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        // so colunas inseridas no usuario
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        idade: Sequelize.INTEGER,
        peso: Sequelize.FLOAT,
        altura: Sequelize.FLOAT,
      },
      {
        sequelize,
        // outras opcoes
      }
    );
    return this;
    // trechos de codigos que sao executados de forma automatica
    // funciona de forma automatica baseado em ações no model
  }
}
export default User;
