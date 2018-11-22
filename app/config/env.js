const env = {
    database: 'deq53b9h74qmhj',
    username: 'omesfgsfpqjztd',
    password: '9d8aa4edd3fd5a5ba084c58b71611413df3ec89a5fec0d03df93cdabd5c50e9f',

    host: 'ec2-54-197-249-140.compute-1.amazonaws.com',
    dialect: 'postgres',
    dialectOptions: {
        ssl: true
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
        evict: 1000
    }
};
module.exports = env;