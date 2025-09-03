import { Kysely, sql } from "kysely";

export const up = async (db: Kysely<any>) => {
  await db.schema
    .alterTable("casts")
    .addColumn("parent_fid", "bigint")
    .addColumn("parent_hash", "bytea")
    .execute();
};
