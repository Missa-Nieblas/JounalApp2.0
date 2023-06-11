

export const fileUpload = async() => {
    if( !file ) throw new Error('No tenemos ningun Archivo a subir');

    const cloudUrl = 'https://api.cloudinary.com/v1_1/du11vmxrb/upload';

    const formData = new FormData();
    formData.append('upload_preset','react-journal');
    formData.append('file', file );

    try{
        const resp = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        } );


        if( !resp.ok ) throw new Error('No se pudo subir la imagen prrio')
        
        const cloudResp = await resp.json();


        return cloudResp.secure_url;

    }catch(error){
        console.log(error);
        throw new Error( error.message );
    }

}