import { Kysely, sql } from "kysely";

export const up = async (db: Kysely<any>) => {
  await db.schema
    .alterTable("casts")
    .addColumn("channel_id", "bigint")
    .execute();

  await db.schema
    .alterTable("casts")
    .addForeignKeyConstraint(
      "casts_channel_id_fkey",
      ["channel_id"],
      "channels",
      ["id"]
    )
    .onDelete("set null")
    .onUpdate("cascade")
    .execute();

  await db.schema
    .createIndex("casts_channel_id_idx")
    .on("casts")
    .column("channel_id")
    .ifNotExists()
    .execute();

    await db.schema
    .createIndex("casts_hash_idx")
    .on("casts")
    .column("hash")
    .ifNotExists()
    .execute();
};
