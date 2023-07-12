'use server'

const formSave=async(formData)=>{
    

    const name=formData.get('email')
    const password=formData.get('password')
    console.log(name, password)
  }

  export default formSave