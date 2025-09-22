import Sequelize, { Model } from "sequelize";

class Product extends Model {
    static init(sequelize) {
        super.init(
            {
                name: {
                    type: Sequelize.STRING,
                    allowNull: false
                },

                price: {
                    type: Sequelize.DECIMAL(10, 2),
                    allowNull: false
                },

                description: {
                    type: Sequelize.STRING,
                    allowNull: true
                }
            },
            { sequelize }
        )
    }
}

export default Product