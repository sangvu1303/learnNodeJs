'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Clinics extends Model {
		static associate(models) {}
	}
	Clinics.init(
		{
			address: DataTypes.STRING,
			description: DataTypes.TEXT,
			image: DataTypes.STRING,
			name: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Clinics',
		},
	);
	return Clinics;
};
