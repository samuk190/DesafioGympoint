import Sequelize, { Model } from 'sequelize';

class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        // so colunas inseridas no usuario
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        age: Sequelize.INTEGER,
        weight: Sequelize.FLOAT,
        height: Sequelize.FLOAT,
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
export default Student;
