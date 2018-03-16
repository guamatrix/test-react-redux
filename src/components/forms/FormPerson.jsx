import React from 'react'
import PropTypes from 'prop-types'
import { withFormik } from 'formik'
import Yup from 'yup'
import InputText from '../inputs/InputText'
import CountriesSelect from '../inputs/CountriesSelect'

const propTypes = {
  onSubmit: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  countries: PropTypes.array.isRequired,
}

const FormPerson = ({
  onSubmit,
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  errors,
  touched,
  setFieldValue,
  countries,
}) => {
  const formItems = [
    {
      id: 1,
      name: 'name',
      label: 'Name:',
      placeholder: 'Name here',
      haveOnChange: false,
    },
    {
      id: 2,
      name: 'surname',
      label: 'Surname:',
      placeholder: 'Name here',
      haveOnChange: false,
    },
    {
      id: 3,
      name: 'countries',
      label: 'Countries:',
      placeholder: 'Select country',
      haveOnChange: false,
    },
    {
      id: 4,
      name: 'birthday',
      label: 'Birthday:',
      placeholder: 'mm/dd/yyyy',
      haveOnChange: false,
      pattern: '(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))'

    },
  ]
  return (
    <form onSubmit={handleSubmit} className="form-inline">
      {formItems.map(item => (
          item.id !== 3 ?
          <InputText
            key={item.id}
            name={item.name}
            label={item.label}
            placeholder={item.placeholder}
            error={errors[item.name]}
            touched={touched[item.name]}
            handleBlur={handleBlur}
            handleChange={handleChange}
            value={values[item.name]}
            setState={setFieldValue}
            customOnChange={item.haveOnChange}
            pattern={item.pattern}
          />
          :
            <CountriesSelect
              key={item.id}
              name={item.name}
              error={errors[item.name]}
              label={item.label}
              placeholder={item.placeholder}
              options={countries}
              onChange={handleChange}
              value={values[item.name]}
              touched={touched[item.name]}
              customOnChange={item.haveOnChange}
            />
      ))}
      <div className="button-content">
        <button type="submit" onClick={handleSubmit} className="button is-primary is-medium">
          Save
        </button>
      </div>
    </form>
  )
}

FormPerson.propTypes = propTypes

const initialState = {
  name: '',
  surname: '',
  countries: '',
  birthday: '',
}

const enhancedForm = withFormik({
  mapPropsToValues: () => (initialState),
  validationSchema: Yup.object().shape({
    name: Yup.string().required('Name is required'),
    surname: Yup.string().required('Surname is required'),
    countries: Yup.string().required('Contries is required'),
    birthday: Yup.string().required('Birthday is required'),
  }),
  handleSubmit: (values, { props, resetForm, setErrors }) => {
    const regex = /(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d/
    if (regex.test(values.birthday)) {
      props.onSubmit(values)
      resetForm()
    } else {
      setErrors({ birthday: 'Wrong format birthday (ej. mm/dd/yyyy)' })
    }
  }
})(FormPerson)

export default enhancedForm
