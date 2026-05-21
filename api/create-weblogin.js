/**
 * Script to create weblogin user in the database
 * Run this script: node create-weblogin.js
 */

const mysql = require('mysql2/promise');

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'varaosrc_prc',
  password: process.env.DB_PASSWORD || 'PRC!@#456&*(',
  database: process.env.DB_NAME || 'varaosrc_hospital_management',
  port: parseInt(process.env.DB_PORT || '3306'),
  connectTimeout: 30000
};

async function createWebLoginUser() {
  let connection;
  try {
    console.log('Connecting to database...');
    connection = await mysql.createConnection(dbConfig);
    console.log('Connected successfully!');

    // Check if weblogin user already exists
    const [existingUsers] = await connection.execute(
      'SELECT admin_id, username, admin_type FROM admin WHERE LOWER(username) = ?',
      ['weblogin']
    );

    if (existingUsers.length > 0) {
      console.log('✅ WebLogin user already exists:');
      console.log('   ID:', existingUsers[0].admin_id);
      console.log('   Username:', existingUsers[0].username);
      console.log('   Role:', existingUsers[0].admin_type);
      return;
    }

    // Insert weblogin user
    console.log('Creating weblogin user...');
    const [result] = await connection.execute(
      'INSERT INTO admin (username, password, admin_type, email) VALUES (?, ?, ?, ?)',
      ['weblogin', 'Admin@123', 'web', 'weblogin@varahasdc.co.in']
    );

    console.log('✅ WebLogin user created successfully!');
    console.log('   ID:', result.insertId);
    console.log('   Username: weblogin');
    console.log('   Password: Admin@123');
    console.log('   Role: web');
    console.log('   Email: weblogin@varahasdc.co.in');

  } catch (error) {
    console.error('❌ Error creating weblogin user:', error.message);
    process.exit(1);
  } finally {
    if (connection) {
      await connection.end();
      console.log('Database connection closed.');
    }
  }
}

// Run the script
createWebLoginUser();

