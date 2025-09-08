module.exports = {
  apps: [
    {
      name: "shuttle-start-1",
      script: "yarn",
      args: "start start",
      env: {
        POSTGRES_URL: "postgres://shuttle:password@0.0.0.0:6541",
        REDIS_URL: "0.0.0.0:16379",
        HUB_HOST: "0.0.0.0:3383",
        SHARDS: "2",
        SHARD_NUM: "1",
        SUBSCRIBE_RPC_TIMEOUT:3600000
      }
    },
    {
      name: "shuttle-start-2",
      script: "yarn",
      args: "start start",
      env: {
        POSTGRES_URL: "postgres://shuttle:password@0.0.0.0:6541",
        REDIS_URL: "0.0.0.0:16379",
        HUB_HOST: "0.0.0.0:3383",
        SHARDS: "2",
        SHARD_NUM: "2",
        SUBSCRIBE_RPC_TIMEOUT:3600000
      }
    }
  ]
};