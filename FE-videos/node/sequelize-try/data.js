const Sequelize = require('sequelize')
const sequelize = new Sequelize('learn-sequelize2','root', '123456', {
  host: '127.0.0.1',
  dialect: "mysql"
});

// Shop表的映射对象 ORM
const Shop = sequelize.define('shops', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  thumb_url: Sequelize.STRING,
  created_at: Sequelize.DATE,
  updated_at: Sequelize.DATE
}, {
  tableName: 'shops',
  timestamps: false
})

async function SearchShopById (id) {
  // Shop 数据表的映射对象
  return Shop.findByPk(id);
}

async function CreateShops(shop) {
  return Shop.create(shop)
}

module.exports = {
  SearchShopById,
  CreateShops
}