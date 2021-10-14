import styled from 'styled-components';

export const Container = styled.div`
        background-color: #27282F;
        color: #FFF;
        height: 100vh;

`;

export const Area = styled.div `

        margin: auto;
        max-width:980px;
        padding: 30px 0;

`;

export const Header = styled.h1`

        margin: 0;
        padding: 0;
        text-align: center;
        margin-bottom: 30px;



`;

export const ScreenWarning = styled.div`
         text-align: center;

        .emoji{
            font-size: 50px;
            margin-bottom:20px; 

        }
`;

export const PhotoList = styled.div`
        display: grid;
        grid-template-columns:repeat(4,1fr);
        gap:10px;

`;
export const FormArea = styled.div `
        display:flex;
        align-items: center;
        justify-content: space-between;
        background-color: #3D3F43;
        margin-bottom: 30px;
       





`;

export const UploadForm = styled.form `
        
        padding: 15px;
        border-radius:10px;

        input[type=submit]{
                background-color:#756DF4;
                border:0;
                color: #FFF;
                font-size:15px;
                border-radius: 10px;
                margin: 0px 10px;
                cursor: pointer;
            &:hover {
                 opacity: .9;
            } 

        }

`;

export const DeleteForm = styled.form `
                
                padding: 15px;
                border-radius:10px;
                
        

        input[type=submit]{
                background-color:#756DF4;
                border:0;
                color: #FFF;
                font-size:15px;
                border-radius: 10px;
                margin: 0px 10px;
                cursor: pointer;
            &:hover {
                 opacity: .9;
            } 

        }

`;












