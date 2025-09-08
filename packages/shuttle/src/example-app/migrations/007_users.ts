import { Kysely, sql } from "kysely";

export const up = async (db: Kysely<any>) => {
  // users -------------------------------------------------------------------------------------
  await db.schema
    .createTable("users")
    .addColumn("fid", "bigint", (col) => col.primaryKey())
    .addColumn("userName", "text", (col) => col.notNull())
    .addColumn("ethAddress", "text")
    .addColumn("solAddress", "text")
    .addColumn("displayName", "text")
    .addColumn("twitter", "text")
    .addColumn("url", "text")
    .addColumn("profilePicture", "text")
    .addColumn("bio", "text")
    .addColumn("location", "text")
    .addColumn("banner", "text")
    .addColumn("created_at", "timestamptz", (col) =>
      col.notNull().defaultTo(sql`now()`)
    ) // 레코드 생성 시각(DB)
    .addColumn("updated_at", "timestamptz", (col) =>
      col.notNull().defaultTo(sql`now()`)
    ) // 레코드 갱신 시각(DB)

    .execute();
};
