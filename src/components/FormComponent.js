import { useState, useEffect } from 'react'
import './FormComponent.css'
import { v4 as uuidv4 } from 'uuid';  // ^ Library for gen UUID

const FormComponent = (props) => {

    // & State Hook Function
    const [title, setTitle] = useState('') // ^ Initial is none
    const [amount, setAmount] = useState(0) // ^ Initial is 0
    const [formValid,setFormValid] = useState(false)

    const inputTitle = (event) => {
        setTitle(event.target.value)  // ^ Input to state
    }
    const inputAmount = (event) => {
        setAmount(event.target.value)
    }
    const saveItem = (event) => {
        event.preventDefault()
        const itemData = {  // ^ Pull data from state
            id: uuidv4(),
            title: title,
            amount: Number(amount)
        }
        props.onAddItem(itemData)
        setTitle('')
        setAmount(0)  // ^ When submit clear input to default, dont forget to coding value in <input>
    }

    useEffect(()=> {
        const checkData = title.trim().length>0 && amount!==0
        setFormValid(checkData)
    },[amount])

    // * Content Zone
    return (
        <div>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุชื่อรายการของคุณ" onChange={inputTitle} value={title} />
                </div>
                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder="(+ รายรับ, - รายจ่าย)" onChange={inputAmount} value={amount} />
                </div>
                <div>
                    <button type='submit' className='btn' disabled={!formValid}>Submit</button>
                </div>
            </form>
        </div>
    )

}

export default FormComponent