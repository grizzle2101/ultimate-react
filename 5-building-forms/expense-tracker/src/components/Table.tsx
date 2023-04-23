import { ExpenseItem } from "./ExpenseItem";

interface TableProps {
  expenseItems: ExpenseItem[];
  onRemove: (data: any) => void;
}

function Table({ expenseItems, onRemove }: TableProps) {
  return (
    <>
      <h1>Expenses Sheet:</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {expenseItems.length ? (
            expenseItems.map((item, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.description}</td>
                <td>{item.amount}</td>
                <td>{item.category}</td>
                <td>
                  <button
                    onClick={() => onRemove(index)}
                    className="btn btn-danger"
                    type="submit"
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <h3 className="text-danger">Table is Empty</h3>
          )}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td>Total:</td>
            <td>
              {"$" +
                expenseItems
                  .reduce((total, item) => total + item.amount, 0)
                  .toString()}
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}

export default Table;
