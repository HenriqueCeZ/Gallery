import React, {useState, useEffect, FormEvent} from 'react';
import * as C from './App.styles';
import * as Photos from './services/photos';
import {Photo} from './types/Photos'
import {PhotoItem} from './components/photoItem';


function App() {
  const [uploading , setUploading] = useState(false); 
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(()=>{
      const getPhotos = async () =>{
        setLoading(true);
        setPhotos( await Photos.getAll());//ler foto
        setLoading(false);

      }
      getPhotos();
  }
,[]);
const handleFormSubmit = async (e: FormEvent<HTMLFormElement> )=>{ // cancela o envio de arquivo por padrão
    e.preventDefault();


    const formData = new FormData(e.currentTarget);// pegando o formulário
    const file = formData.get('image') as File; //as file define o type definitivo

    if(file && file.size >0){
        setUploading(true);
        let result = await Photos.insert(file); //inserir fotos
        setUploading(false);
      if(result instanceof Error){
        alert(`${result.name}-${result.message}`);
      }else{
        let newPhotoList = [...photos];
        newPhotoList.push(result);
        setPhotos(newPhotoList);
      }
    }



}

  return (
    <C.Container>
      <C.Area>
          <C.Header>Galeria de Fotos</C.Header>
            <C.UploadForm method="POST" onSubmit={handleFormSubmit}>
                <input type="file" name="image"/>
                <input type="submit" value ="Enviar"/>
                {uploading && "Enviando..."}
            </C.UploadForm>

          {loading &&
            <C.ScreenWarning> 
                <div className="emoji">✋</div>
                <div>Carregando...</div>
           </C.ScreenWarning> 
            }
            {!loading && photos.length > 0 &&
              <C.PhotoList>
                  {photos.map((item,index)=>(
                      <PhotoItem key={index} url={item.url} name={item.name}/>

                  ))}
                  </C.PhotoList>
            }      
            {!loading && photos.length === 0 &&
            <C.ScreenWarning> 
                <div className="emoji">😞</div>
                <div>Não há fotos cadastradas</div>
           </C.ScreenWarning> 
            
            
            }

              
              
            
      </C.Area>

    </C.Container>
  );
}

export default App;
