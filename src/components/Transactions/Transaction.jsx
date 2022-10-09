import PropTypes from 'prop-types';
import css from './Transactions.module.css'
export const TransactionHistory = ({ items }) => {
    return (
    <table className={css.transactionHistory}>
        <thead className={css.thead}>
            <tr className={css.theader}>
            <th className={css.th}>Type</th>
            <th className={css.th}>Amount</th>
            <th className={css.th}>Currency</th>
            </tr>
        </thead>

        <tbody className={css.tbody}>
            {items.map(item => (
                <tr className={css.tr} key={item.id}>
                <td className={css.text}>{item.type}</td>
                <td className={css.text}>{item.amount}</td>
                <td className={css.text}>{item.currency}</td>
                </tr>
            ))}
            
        </tbody>
    </table>
      
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string,
            amount: PropTypes.string,
            currency: PropTypes.string
        })
    )
    
    
};