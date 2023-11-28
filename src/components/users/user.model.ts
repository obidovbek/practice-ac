import { DataTypes, Model, Sequelize } from 'sequelize';

interface UserAttributes {
  id: number;
  balance: number;
}

class User extends Model<UserAttributes> implements UserAttributes {
  public id!: number;
  public balance!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export const initUserModel = (sequelize: Sequelize) => {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      balance: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'users',
    }
  );
};

export default User;