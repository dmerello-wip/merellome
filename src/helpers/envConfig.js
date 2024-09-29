import { loadEnvConfig } from '@next/env'

const projectDir = process.cwd()
// console.log(process.env.BASE_URL);
loadEnvConfig(projectDir)