import React from 'react';
import URL from '../../URL';

function handlerCreateProduct(event){
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", event.target.name.value);
    formData.append("price", event.target.price.value);
    formData.append("comment", event.target.comment.value);
    formData.append("category", event.target.category.value)
    formData.append("imgURL", event.target.imgFile.files[0]);
    
 fetch(URL + '/products', {
      method: "POST",
      body: formData
  }) 
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })  
}

const Admin = () => {
    return(
        <div>
            <form onSubmit={ (e) => { handlerCreateProduct(e) } }>
                <input type="text" name='name' placeholder='name'/>
                <input type="text" name='comment' placeholder='comment'/>
                <input type="text" name='price' placeholder='price'/>
                <select name='category'>
                    <option value="man">MAN</option>
                    <option value="woman">WOMAN</option>
                    <option value="children">CHILDREN</option>
                </select>
                <input type="file" id='imgFile'/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default Admin;