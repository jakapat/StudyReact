import { useContext } from "react"
import DataContext from "../data/DataContext"
import './ReportComponent.css'


const ReportCOmponent = () => {
    const { income, expense } = useContext(DataContext)
    const formatNumber=(num)=>{
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    return (
        <div>
            <h4 align="center">ยอดคงเหลือ (บาท)</h4>
            <h1 align="center">{formatNumber((income - expense).toFixed(2))}</h1>
            <div className="report-container">
                <div>
                    <h4>ยอดรายรับ</h4>
                    <p className="report plus">฿ {formatNumber(income)}</p>
                </div>
                <div>
                    <h4>ยอดรายจ่าย</h4>
                    <p className="report minus">฿ {formatNumber(expense)}</p>
                </div>
            </div>
        </div>
    )

}

export default ReportCOmponent