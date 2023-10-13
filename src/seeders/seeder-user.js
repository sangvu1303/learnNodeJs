'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert('Users', [
			{
				email: 'admin@local.com',
				password: 'admin123',
				firstName: 'SangVu',
				lastName: 'Admin',
				address: 'VN',
				phoneNumber: '0559421303',
				gender: '1',
				image: null,
				roleId: 'R1',
				positionId: 'Admin',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	async down(queryInterface, Sequelize) {},
};
