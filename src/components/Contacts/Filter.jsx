export function Filter({onFilter, filter}) {
    return (
        <div>
            <p>Find contacts by name</p>
            <input value={filter} type="text" onChange={onFilter} />
      </div>
    );
}