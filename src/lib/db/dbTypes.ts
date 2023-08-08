import { InferModel } from 'drizzle-orm';
import { reg_users } from './schema/reqUsers';
export type RegUser = InferModel<typeof reg_users>; // return type when queried
export type NewRegUser = InferModel<typeof reg_users, 'insert'>; // insert type