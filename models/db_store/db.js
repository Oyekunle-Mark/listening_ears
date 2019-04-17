import { config } from 'dotenv';
import { Pool } from 'pg';

config();

const db = new Pool();

export default db;
