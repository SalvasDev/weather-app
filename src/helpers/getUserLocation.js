


export const getUserLocation = async () => {

    return new Promise((resolve, reject) => {

        navigator.geolocation.getCurrentPosition(
            ({ coords }) => {
                resolve([coords.longitude, coords.latitude])
            },
            (err) => {
                alert('No se pudo obtener la geolocalización');
                reject();
            }
        )

    });

}
