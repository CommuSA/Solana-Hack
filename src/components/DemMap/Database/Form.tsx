import { FC } from 'react'
import { Stuff } from './Storage'
import { useState } from 'react'
import * as web3 from '@solana/web3.js'
import { Button, Checkbox, Form, Input } from 'antd';
import { useConnection, useWallet } from '@solana/wallet-adapter-react'

const { TextArea } = Input;

const STUDENT_INTRO_PROGRAM_ID = 'HdE95RSVsdb315jfJtaykXhXY478h53X6okDupVfY9yf'

export const FormPush: FC = () => {
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();

    const handleSubmit = (event: React.FormEvent) => {
        console.log(event)
        // event.preventDefault()
        const stuff = new Stuff(name, message)
        handleTransactionSubmit(stuff)
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };

    const handleTransactionSubmit = async (stuff: Stuff) => {
        if (!publicKey) {
            alert('Please connect your wallet!')
            return
        }

        const buffer = stuff.serialize()
        const transaction = new web3.Transaction()

        const [pda] = await web3.PublicKey.findProgramAddress(
            [publicKey.toBuffer()],
            new web3.PublicKey(STUDENT_INTRO_PROGRAM_ID)
        )

        const instruction = new web3.TransactionInstruction({
            keys: [
                {
                    pubkey: publicKey,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: pda,
                    isSigner: false,
                    isWritable: true
                },
                {
                    pubkey: web3.SystemProgram.programId,
                    isSigner: false,
                    isWritable: false
                }
            ],
            data: buffer,
            programId: new web3.PublicKey(STUDENT_INTRO_PROGRAM_ID)
        })

        transaction.add(instruction)

        try {
            let txid = await sendTransaction(transaction, connection)
            alert(`Transaction submitted: https://explorer.solana.com/tx/${txid}?cluster=devnet`)
            console.log(`Transaction submitted: https://explorer.solana.com/tx/${txid}?cluster=devnet`)
        } catch (e) {
            console.log(JSON.stringify(e))
            alert(JSON.stringify(e))
        }
    }

    return (
        <Form
            name="stores"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={handleSubmit}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please input the name of the stored content.' }]}
            >
            <Input color='gray.400'onChange={event => setName(event.currentTarget.value)}/>
            </Form.Item>

            <Form.Item label="Content"  name="message">
                <TextArea rows={4} onChange={event => setMessage(event.currentTarget.value)}/>
            </Form.Item>

            {/* <Form.Item
            name="visibility"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
            >
            <Checkbox>Public</Checkbox>
            </Form.Item> */}
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
}