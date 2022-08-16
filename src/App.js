/* eslint-disable default-case */
import Transaction from "./components/Transaction";
import FormComponent from "./components/FormComponent";
import './App.css'
import { useState, useEffect } from 'react';
import DataContext from "./data/DataContext";
import ReportComponent from "./components/ReportComponent";
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom'


function App() {
  const design = { color: "black", backgroundColor: "#E4A598", fontSize: "1.5rem", textAlign: "center", padding: "15px" }

  const initData = [
    { id: 1, title: "Dormitory", amount: -3000 },
    { id: 2, title: "Salary", amount: 30000 },
  ]
  const [items, setItems] = useState(initData)  // ^ New State 
  const [reportIncome, setReportIncome] = useState(0)
  const [reportExpense, setReportExpense] = useState(0)

  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {    // ^ Push new item before old data
      return [newItem, ...prevItem]
    })
  }

  useEffect(() => {
    const amounts = items.map(items => items.amount)
    const income = amounts.filter(element => element > 0).reduce((total, element) => total += element, 0)
    const expense = (amounts.filter(element => element < 0).reduce((total, element) => total += element, 0)) * -1

    setReportIncome(income.toFixed(2))
    setReportExpense(expense.toFixed(2))
  }, [items], reportIncome, reportExpense)

  return (
    <DataContext.Provider value={
      {
        income: reportIncome,
        expense: reportExpense
      }
    }>
      <div className="container">
        <h1 style={design}>Accounting</h1>
        <Router>
          <div>
            <ul className='horizontal-menu'>
              <li>
                <Link to='/'>ข้อมูลบัญชี</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </li>
              <li>
                <Link to='/insert'>ฟอร์มบันทึก</Link>
              </li>
            </ul>
            <Routes>
              <Route path='/' element={<ReportComponent />} />
              <Route path='/insert' element={
                <>
                  <FormComponent onAddItem={onAddNewItem} />
                  <Transaction item={items} />
                </>
              } />
            </Routes>
          </div>
        </Router>

      </div>
    </DataContext.Provider> // ^ Prop/Context(Global) Array from app to transaction
  );
}

export default App;
