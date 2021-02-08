
module.exports = Job = (sequelize, Sequelize) => {
    const Job = sequelize.define('Job', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        title:{
            allowNull: false,
            type: Sequelize.STRING,
        },
        description:{
            allowNull: false,
            type: Sequelize.STRING
        },
        status: {
            allowNull: false,
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }
    });
    
    return Job;
}