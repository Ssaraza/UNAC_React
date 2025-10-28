type props = {
    value: string;
    label: string;
};

function InputText({ value, label }: props) {
    return (
        <div>
            <label>{label}</label>
            <input type="text" value={value} />
        </div>
    );
}

export default InputText;