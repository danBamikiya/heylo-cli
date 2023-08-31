import type { Arguments, CommandBuilder } from "yargs"

type Options = {
    name: string;
    upper: boolean | undefined
}

const command: string = 'greet <name>'
const desc: string = 'Greet <name> with Heylo'

const builder: CommandBuilder<Options, Options> = (yargs) => yargs.options({
    upper: {type: 'boolean'}
}).positional('name', { type: 'string', demandOption: true })

const handler = (argv: Arguments<Options>): void => {
    const { name, upper } = argv;
    const greeting = `Heylo, ${name}!`
    process.stdout.write(upper ? greeting.toUpperCase() : greeting)
    process.exit(0)
}

export {
    command,
    desc,
    builder,
    handler
}