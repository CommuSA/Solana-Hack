import * as borsh from '@project-serum/borsh'

export class Stuff {
    name: string;
    message: string;

    constructor(name: string, message: string) {
        this.name = name;
        this.message = message;
    }

    static mocks: Stuff[] = [
        new Stuff('CP-ABE: How to Effectively Protect the Electronic Documents', `As a recently proposed public key primitive, attribute-base encryption(ABE) divided into Ciphertext-policy ABE (CP-ABE) and Key-policy ABE (KP-ABE) is a highly promising tool for the management and protection of data. And Blockchain, as one of the core technologies of Bitcoin that is the most representative cryptocurrency, has received extensive attentions recently. Supervision and privacy protection are two difficulties in blockchain. In this paper, a new scheme combining blockchain and accountable CP-ABE is proposed. In this scheme, each change of the data is recorded on the blockchain. And the different permissions of access are realized through ABE. If a malicious user shares a decryption key illegally, it will be considered illegal. Similarly, if the authority generates a decryption key for any unauthorized user, it also will be considered illegal. This scheme allows any third party to publicly verify the identity of a decryption key. And it is achievable for an auditor to publicly audit whether a malicious user or the authority should be responsible for an exposed decryption key, and the key abuser cannot deny it. At last this scheme is applied to the management of electronic documents.`),
    ]

    borshInstructionSchema = borsh.struct([
        borsh.u8('variant'),
        borsh.str('name'),
        borsh.str('message'),
    ])

    static borshAccountSchema = borsh.struct([
        borsh.bool('initialized'),
        borsh.str('name'),
        borsh.str('message'),
    ])

    serialize(): Buffer {
        const buffer = Buffer.alloc(1000)
        this.borshInstructionSchema.encode({ ...this, variant: 0 }, buffer)
        return buffer.slice(0, this.borshInstructionSchema.getSpan(buffer))
    }

    static deserialize(buffer?: Buffer): Stuff|null {
        if (!buffer) {
            return null
        }

        try {
            const { name, message } = this.borshAccountSchema.decode(buffer)
            return new Stuff(name, message)
        } catch(e) {
            console.log('Deserialization error:', e)
            return null
        }
    }
}