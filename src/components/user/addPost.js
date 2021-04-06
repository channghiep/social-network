import React, {useState} from 'react';


import Dialog from '@material-ui/core/Dialog';

import IconButton from '@material-ui/core/IconButton';

import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

import './addPost.css'

import ReactQuill, {Quill} from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageUploader from "quill-image-uploader";

//subnit
// import ReactDOM from 'react-dom'
import { useForm  } from 'react-hook-form'

const Input = ({ label, register, required }) => (
  <>
    <label>{label}</label>
    <input name={label} ref={register({ required })} />
  </>
);

const Select = React.forwardRef(({ label }, ref) => (
  <>
    <label>{label}</label>
    <select name={label} ref={ref}>
      <option value="World">World</option>
      <option value="Politics">Politics</option>
      <option value="Entertain">Entertain</option>
    </select>
  </>
));


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
  });
Quill.register("modules/imageUploader", ImageUploader);  
export default function AddPost(props) {
  // const [files, setFiles] = useState([])
  const {register, handleSubmit} = useForm()

  // const onChangeHandler=event=>{
  //   console.log(event.target.files[0])
  // }
  let dataQuill;

	function handleChange(content) {
    dataQuill = content
    console.log(dataQuill)
  }
  const onSubmit = data => {
    console.log(data)
    data.custID = props.
    data.html = dataQuill;
    alert(JSON.stringify(data));
  };

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	console.log(data)
	// }
  // FilePond.setOptions({
  //   server:{
  //     url: '209.15.37.27',
  //     process:{
  //       url:'./process',
  //       method:'POST',
  //       withCredentials: false,
  //       headers: {},
  //       timeout: 7000,
  //       onload: null,
  //       onerror: null,
  //       ondata: null
  //     }
  //   }
  // })  
  // registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);
 
  
    return(
        <div>
             <Dialog fullScreen open={props.open} TransitionComponent={Transition}>
             

             <IconButton edge="start" color="inherit" onClick={props.closeNewPost} aria-label="close">
             <CloseIcon />
             </IconButton>
            <div className="compose-new-post">
              <p>COMPOSE NEW POST</p>
            </div>
            <div className="compose-post">
              <form onSubmit={handleSubmit(onSubmit)}>
                <Select label="category" ref={register} required/>
                <Input label="topic" register={register} required />
                <Input label="title" register={register} required />
                <Input label="headline" register={register} required />
                <Input label="teaser" register={register} required />
                <Input className="article" label="article" register={register} required />
                
                <ReactQuill
                  theme="snow"
                  register={register}
                  // value={value} 
                  onChange={handleChange}

                  // onChange={setValue}
                  modules = {{
                  // #3 Add "image" to the toolbar

                    toolbar: [
                      [{ 'header': [1, 2, false] }, { 'font': [] }],
                      ['bold', 'italic', 'underline','strike', 'blockquote'],
                      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
                      ['link', 'image', 'video'],
                      [{ 'align': [] }],

                      ['clean']          
                      ],
                    // # 4 Add module and upload function

                    imageUploader: {
                      upload: file => {
                        return new Promise((resolve, reject) => {
                        const formData = new FormData();
                        formData.append("image", file);
                  
                        fetch(
                          "http://localhost:3000/upload",
                          {
                            method: "POST",
                            body: formData
                          }).then(response => {
                            response.json().then(result => {
                              console.log(result);
                              resolve(result.path)
                            })
                            .catch(error => {
                              reject("Upload failed");
                              console.error("Error:", error);
                            });
                          });
                        })
                      }
                    }
                  }}
                    
                  formats = {[
                  'header', 'font',
                  'bold', 'italic', 'underline', 'strike', 'blockquote',
                  'list', 'bullet', 'indent',
                  'link', 'image','video', 'align'
                  ]}
                > 

                </ReactQuill>



                <input className="submitButton" type="submit" />
              </form>

   
            </div>
           
             </Dialog>
            
        </div>
    )
}