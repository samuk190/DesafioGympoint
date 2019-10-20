import * as Yup from 'yup';
import Student from '../models/Student';

class StudentController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const StudentExists = await Student.findOne({
      where: { email: req.body.email },
    });

    if (StudentExists) {
      return res.status(400).json({ error: 'Student already Exists' });
    }
    // mesmo face de middleware
    // const user = await User.create(req.body); // todos os dados
    // retornar para o front end
    const { id, name, email, idade, peso, altura } = await Student.create(
      req.body
    );
    // cadastro
    return res.json({
      id,
      name,
      email,
      idade,
      peso,
      altura,
    });
  }

  async update(req, res) {
    // console.log(req.userId);
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const { email, id } = req.body;
    const student = await Student.findByPk(id);
    if (email !== student.email) {
      const userExists = await Student.findOne({
        where: { email },
      });
      if (userExists) {
        return res.status(400).json({ error: 'Email already Exists' });
      }
    }

    const { name, idade, peso, altura } = await student.update(req.body);
    return res.json({
      id,
      name,
      idade,
      peso,
      altura,
      email,
    });
  }
}

export default new StudentController();
