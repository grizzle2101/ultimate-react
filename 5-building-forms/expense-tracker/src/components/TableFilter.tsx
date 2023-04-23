interface TableFilterProps {
  onCategorySelection: (data: any) => void;
}

function TableFilter({ onCategorySelection }: TableFilterProps) {
  const options = ["Groceries", "Education", "Entertainment"];

  return (
    <>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>

        <select
          className="form-select"
          aria-label="Select a Category..."
          onChange={(event) => {
            onCategorySelection(event.target.value);
          }}
        >
          {options.map((element, index) => (
            <option key={index} value={element}>
              {element}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default TableFilter;
