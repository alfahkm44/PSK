import Button from '../Elements/Button';
import Checkbox from '../Elements/CheckBox';
import LabeledInput from '../Elements/LabeledInput';
const FormSignIn = () => {

  return (
    <div className="mt-16">
                <form action="">
                  <div className="mb-6">
                        <LabeledInput />
                  </div>
                  <div className="mb-6">
                        <LabeledInput />
                  </div>
                  <div className="mb-3">
                    <Checkbox />
                  </div>
                  <div>
                    <Button /> 
                  </div>
                  
                </form>
              </div>
  )
}

export default FormSignIn
