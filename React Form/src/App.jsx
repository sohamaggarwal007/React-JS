import './App.css'
import { useForm } from "react-hook-form"

function App() {

  const {
    register, 
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    // API call
    await new Promise((resolve) => setTimeout(resolve, 5000))

    console.log("Submitting the form ", data);

  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <div>
        <label>First Name: </label>
        <input 
        className={errors.firstName ? "input-error" : ""}
        type="text" {...register('firstName', 
        { required: true, minLength: {value: 3, message:'Please enter atleast 3 charecters!'}})} />
        {errors.firstName && <p className='error-msg'>{errors.firstName.message}</p>}
      </div>
      
      <br/>

      <div>
        <label>Middle Name: </label>
        <input
        className={errors.middleName ? "input-error" : ""}
        type="text" {...register('middleName',
        { required: true, minLength: {value: 3, message:'Please enter atleast 3 charecters!'}})} />
        {errors.middleName && <p className='error-msg'>{errors.middleName.message}</p>}
      </div>
      
      <br/>
      
      <div>
        <label>Last Name: </label>
        <input
        className={errors.lastName ? "input-error" : ""}
        type="text" {...register('lastName', 
        { required: true, minLength: {value: 3, message:'Please enter atleast 3 charecters!'},
        pattern: {value: /[a-zA-Z]+/, message:'Please enter only alphabets!'} })} />
        {errors.lastName && <p className='error-msg'>{errors.lastName.message}</p>}
      </div>
      
      <br/>
      
      <input type="submit" disabled={isSubmitting} 
      value={isSubmitting ? "Submitting..." : "Submit"}
      />
      
    </form>
  )
}

export default App
