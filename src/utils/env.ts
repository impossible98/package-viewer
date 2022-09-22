export function getEnv(key: string | number, ...value): string {
  try {
    if (process.env[key] === undefined) {
      return value[0];
    } else {
      return process.env[key];
    }
  } catch (error) {
    console.log(`Missing the ${key} environment variable`);
  }
}
