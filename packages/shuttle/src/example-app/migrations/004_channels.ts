import { Kysely, sql } from "kysely";

export const up = async (db: Kysely<any>) => {
  // channels -------------------------------------------------------------------------------------
  await db.schema
    .createTable("channels")
    .addColumn("id", "bigserial", (col) => col.primaryKey())
    .addColumn("slug", "text", (col) => col.notNull()) // API의 id (예: "elitez")
    .addColumn("url", "text", (col) => col.notNull()) // 고유 URL
    .addColumn("name", "text")
    .addColumn("description", "text")
    .addColumn("image_url", "text")
    .addColumn("header_image_url", "text")
    .addColumn("lead_fid", "bigint") // 채널 리드 FID
    .addColumn("follower_count", "integer")
    .addColumn("member_count", "integer")
    .addColumn("public_casting", "boolean")
    .addColumn("external_link_title", "text")
    .addColumn("external_link_url", "text")
    .addColumn("created_at", "timestamptz", (col) =>
      col.notNull().defaultTo(sql`now()`)
    ) // 레코드 생성 시각(DB)
    .addColumn("updated_at", "timestamptz", (col) =>
      col.notNull().defaultTo(sql`now()`)
    ) // 레코드 갱신 시각(DB)
    .addColumn("last_seen_at", "timestamptz") // 동기화 시 마지막 확인 시각
    .execute();
};
