export const SelectInput = ({ label, name, options, value, onChange, disable }) => {
    return (
        <div className="w-[300px]">
            <label className="font-semibold text-gray-600 ">{label}: </label> <br />
            <select
                // className="border w-full border-gray-500 shadow-lg px-2 py-2 focus:border-indigo-400"
                className={`p-3 mt-1 border w-full border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out font-inter ${disable && "bg-gray-200"}`}
                name={name}
                value={value}
                disabled={disable}
                onChange={(e) => {
                    onChange(name, e.target.value)
                }}
            >
                <option value="">All {label}</option>
                {options.map((item, i) => (
                    <option key={i} value={item.name || item}>
                        {item.name || item}
                    </option>
                ))}
            </select>
        </div>
    )
}
