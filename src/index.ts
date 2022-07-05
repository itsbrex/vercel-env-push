import { parseEnvFile, validateFile } from './file'
import { pushEnvVar, validateVercelEnvs } from './vercel'

export async function pushEnvVars(envFilePath: string, envs: string[], options?: Options) {
  // FIXME(HiDeoo)
  console.warn('🚨 [index.ts:7] options', options)

  validateVercelEnvs(envs)

  // TODO(HiDeoo) Display envs

  validateFile(envFilePath)

  // TODO(HiDeoo) Display file name or maybe complete path

  const envVars = parseEnvFile(envFilePath)

  // TODO(HiDeoo) Display enviroment variables

  if (options?.dryRun) {
    return
  }

  // TODO(HiDeoo) Wait for confirmation (except if -y or something)

  for (const [envVarKey, envVarValue] of Object.entries(envVars)) {
    await pushEnvVar(envs, envVarKey, envVarValue)
  }
}

interface Options {
  dryRun?: boolean
}
