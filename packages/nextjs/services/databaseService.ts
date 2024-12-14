import { createKysely } from "@vercel/postgres-kysely";
import { Selectable, Updateable } from "kysely";
import { Insertable, Kysely, sql } from "kysely";
import { UserTable } from "~~/repository/user/user.table";
import { UserStatus } from "~~/types/entities/user";

interface Database {
  user: UserTable;
}

class DatabaseService {
  private db: Kysely<Database>;
  constructor() {
    this.db = createKysely<Database>({
      connectionString: process.env.POSTGRES_URL,
    });
    this.createTableIfNotExists();
  }

  private async createTableIfNotExists() {
    await this.db.schema
      .createTable("user")
      .ifNotExists()
      .addColumn("id", "serial", col => col.primaryKey())
      .addColumn("created_at", sql`timestamp with time zone`, cb => cb.defaultTo(sql`current_timestamp`))
      .addColumn("wallet", "varchar")
      .addColumn("status", "varchar")
      .addColumn("document", "varchar")
      .execute();
  }

  async createUser({ wallet, document }: Insertable<UserTable>): Promise<Selectable<UserTable> | undefined> {
    // Check if user exists
    let user = await this.db.selectFrom("user").selectAll().where("wallet", "=", wallet).executeTakeFirst();
    if (!user) {
      user = await this.db
        .insertInto("user")
        .values({
          status: UserStatus.created,
          wallet: wallet,
          document: document,
        })
        .returningAll()
        .executeTakeFirst();
    }
    return user;
  }
  async updateUser({ id, status, document }: Updateable<UserTable>) {
    // update the user status data into the database
    await this.db.updateTable("user").set({ status, document }).where("id", "=", id!).execute();
  }

  async getUser({ wallet }: Pick<UserTable, "wallet">) {
    // Fetch the whitelist data where the wallet matches the provided value
    const result = await this.db.selectFrom("user").selectAll().where("wallet", "=", wallet).executeTakeFirst();
    return result;
  }
}

export const databaseService = new DatabaseService();
