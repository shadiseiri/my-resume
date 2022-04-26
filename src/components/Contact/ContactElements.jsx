import styled from 'styled-components';


export const ContactContainer = styled.div`
height: 750px;
display: flex;
align-items: center;
justify-content: center;
padding: 40px;

`

export const ContactForm = styled.form`


`

export const ContactWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
max-width: 1100px;
width: 100%;
`

export const ContactRowWrapper = styled.div`
margin-bottom: 30px;
display: flex;
width: 100%;


`

export const ContactInputWrapper = styled.div`
margin: 0 10px;
width: 100%;
box-sizing: border-box;

`

export const ContactNameInput = styled.input`
width: 100%;
border: none;
border-bottom: 1px solid #ccc;
outline: none;
padding: 5px;


&:focus{
    border-bottom: 1.5px solid #3e086a;
    /* border: 1.5px solid #37075d;
    border-radius: 5px; */
}
`

export const ContactEmailInput = styled.input`
width: 100%;
border: none;
border-bottom: 1px solid #ccc;
outline: none;
padding: 5px;


&:focus{
    
    border-bottom: 1.5px solid #3e086a;
}

`

export const ContactSubjectInput = styled.input`
width: 100%;
border: none;
outline: none;
border-bottom: 1px solid #ccc;
padding: 5px;




&:focus{
    
    border-bottom: 1.5px solid #3e086a;
}
`

export const ContactTextarea = styled.textarea`
width: 100%;
outline: none;
border: none;
border-bottom: 1px solid #ccc;
padding: 5px;




&:focus{
    
    border-bottom: 1.5px solid #3e086a;
}
`




export const ContactSubmit = styled.button`
width: 100%;
border: none;
/* border-bottom: 1px solid #ccc; */
cursor: pointer;
border-radius:50px;
background-color: #4c77bc;
padding: 14px 48px;
color: #fff;
font-size: 18px;
outline: none;
transition: all 0.2s ease-in-out;
box-sizing: border-box;

&:hover {
    transition: all 0.2s ease-in-out;
    color: #010606;
    background-color:#fff;
    border: 2px solid #ccc
  }


  @media screen and (max-width: 768px) {
    font-size:16px;
    padding: 12px 40px;
  }

  @media screen and (max-width: 480px) {

    font-size:16px;
 
  }

`
