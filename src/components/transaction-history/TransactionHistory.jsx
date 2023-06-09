import PropTypes from "prop-types";
import { Table, TableHeader, TableData, TableRow } from './TransactionHistory.styled.js';

const TransactionHistory = ({ items }) => {
    return (
        <Table className="transaction-history">
            <thead>
                <tr>
                    <TableHeader>Type</TableHeader>
                    <TableHeader>Amount</TableHeader>
                    <TableHeader>Currency</TableHeader>
                </tr>
            </thead>
            <tbody>
                {items.map(({ id, type, amount, currency }) => (
                    <TableRow key={id}>
                        <TableData>{type}</TableData>
                        <TableData>{amount}</TableData>
                        <TableData>{currency}</TableData>
                    </TableRow>
                ))}
            </tbody>
        </Table>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })
    ),
};

export default TransactionHistory;