<<<<<<< HEAD
Steps to run locally or on EC2:

1. Install dependencies:
   npm install

2. Create a .env file (or set environment variables in your shell / systemd unit / user-data) with DB_HOST, DB_USER, DB_PASS, DB_NAME.

3. Start the app:
   npm start
   (If using port 80 you may need sudo on Linux, or set PORT to 3000.)

EC2 notes:
- Open the instance security group inbound for the chosen PORT (80/3000).
- Add environment variables on the instance (export VAR=...), or use a systemd unit that sets Environment= lines, or provide via user-data.
- Ensure the EC2 can reach the RDS (VPC/subnet/security group).
=======
Steps to run locally or on EC2:

1. Install dependencies:
   npm install

2. Create a .env file (or set environment variables in your shell / systemd unit / user-data) with DB_HOST, DB_USER, DB_PASS, DB_NAME.

3. Start the app:
   npm start
   (If using port 80 you may need sudo on Linux, or set PORT to 3000.)

EC2 notes:
- Open the instance security group inbound for the chosen PORT (80/3000).
- Add environment variables on the instance (export VAR=...), or use a systemd unit that sets Environment= lines, or provide via user-data.
- Ensure the EC2 can reach the RDS (VPC/subnet/security group).
>>>>>>> 09c502855776095b01c2b204c9ff36f91c4aa121
