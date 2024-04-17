

export const Filter = ({ filter, setFilter }) => {
    const handleChange = event => {
        setFilter(event.target.value);
    };

    return (
    <input
    type="text"
    value={filter}
    onChange={handleChange}
    placeholder="Search contacts"
    />
    );
};