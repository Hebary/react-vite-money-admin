export const generarId = () => {
    const a = Math.random().toString(36).substring(15);
    const b = Date.now().toString(36);
    return a+b; 
}


export const formatearFecha = fecha   => {
    const fechaNueva = new Date(fecha);
        const config = {
            year: 'numeric',
            month:'long',
            day: '2-digit',
        }
    return fechaNueva.toLocaleDateString('es-ES', config);
}