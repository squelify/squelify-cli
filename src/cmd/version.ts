import { defineCommand } from 'citty'
import consola from 'consola'
import pkg from '../../package.json' assert { type: 'json' }

export default defineCommand({
  meta: {
    name: 'version',
    description: 'Print Squelify CLI version information',
  },
  args: {
    short: {
      type: 'boolean',
      description: 'Print only version number',
      default: false,
      alias: 's',
    },
    help: {
      type: 'boolean',
      description: 'Print information about the command',
      default: false,
    },
  },
  async run({ args }) {
    try {
      if (args.short) {
        consola.log(pkg.version)
        return
      }
      consola.log(`Squelify CLI v${pkg.version}`)
    } catch (error) {
      consola.error('Failed to run command:', error)
      process.exit(1)
    }
  },
})
