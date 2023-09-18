import { DataTypes, ModelDefined, Optional } from "sequelize";
import { UserDto } from "../dto/user.dto";
import db from "../../db";

type UserCreationAttributes = Optional<UserDto, "id">;

const User: ModelDefined<UserDto, UserCreationAttributes> = db.define(
  "User",
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);

export default User;
