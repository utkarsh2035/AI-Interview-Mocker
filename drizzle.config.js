/** @type { import("drizzle-kit").Config } */
export default{
  schema: "./utils/schema.js",
  dialect: 'postgresql',
  dbCredentials: {
      url: 'postgresql://Interview_owner:oSas3At2cyvd@ep-shiny-snowflake-a14oee7a.ap-southeast-1.aws.neon.tech/Interview?sslmode=require'
  }
}