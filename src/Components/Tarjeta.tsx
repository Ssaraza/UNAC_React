type TarjetaProps = {
    titulo: string;
    descripcion: string;
}

function Tarjeta({ titulo, descripcion }: TarjetaProps) {
    return (
        <div className="Tarjeta" style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
            <h1>{titulo}</h1>
            <p>{descripcion}</p>
        </div>
    );
}

export default Tarjeta;