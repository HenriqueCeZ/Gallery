import {Photo} from '../types/Photos';
import {storage} from '../libs/firebase';
import {ref, listAll, getDownloadURL, uploadBytes} from 'firebase/storage';
import {v4 as createId} from 'uuid';
export const getAll = async () =>{ //Função que busca as fotos e retorna na esturutura que eu quero
            let list: Photo[] = [];

            const imagesFolder = ref(storage, "images");
            const photoList = await listAll(imagesFolder);

            for(let i in photoList.items){
                let photoUrl = await getDownloadURL(photoList.items[i]); 
                list.push({
                    name:photoList.items[i].name,
                    url: photoUrl
                
                });
            } 
            return list;

}


export const insert = async (file:File)=>{  //função que faz o upload das imagens

        if(['image/jpeg','image/jpg','image/png'].includes(file.type)){ //verifica os arquivos de image 
            let randomName = createId();
            let newFile = ref(storage , `images/${randomName}`)
            let upload = await uploadBytes(newFile, file);
            let photoUrl = await getDownloadURL(upload.ref);
            return{     //retornando um objeto da foto
                name: upload.ref.name,
                url: photoUrl
            } as Photo;
        }else{
            return new Error('Tipo de arquivo não permitido.');
        }



}