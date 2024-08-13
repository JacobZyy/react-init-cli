import process from 'node:process'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import * as p from '@clack/prompts'
import c from 'picocolors'
import { run } from './run'

function header(): void {
  console.log('\n')
  p.intro(`${c.green(`react-template-create-cli`)}p`)
}

const instance = yargs(hideBin(process.argv)).scriptName('jacob-react-init-cli').usage('').command(
  '*',
  'figure a template or choose one',
  args => args.option('template', {
    type: 'string',
    default: 'react-init-template',
    describe: 'figure the react project template',
  }).option('yes', {
    alias: 'y',
    description: 'use the default template --> react-init-template',
    type: 'boolean',
  }).help(),
  async (args) => {
    header()
    await run(args)
  },
).showHelpOnFail(false)
  .alias('h', 'help')

instance
  .help()
  .argv

console.log('finish')
