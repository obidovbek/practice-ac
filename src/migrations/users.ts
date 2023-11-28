import { QueryInterface } from "sequelize";
import { DataTypes } from "sequelize";

module.exports = {
    up: async (queryInterface:QueryInterface) => {
      console.log(1111111111111111, queryInterface)
      await queryInterface.createTable('Users', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        balance: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        createdAt: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        updatedAt: {
          type: DataTypes.DATE,
          allowNull: false,
        },
      });
    },
  
    down: async (queryInterface) => {
      await queryInterface.dropTable('users');
    },
  };