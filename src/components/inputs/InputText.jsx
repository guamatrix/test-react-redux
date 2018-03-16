import React from 'react'
import PropTypes from 'prop-types';

const propTypes = {
  handleBlur: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  pattern: PropTypes.string,
  touched: PropTypes.bool,
  setState: PropTypes.func.isRequired,
  customOnChange: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ])
}

const defaultProps = {
  type: 'text',
  placeholder: '',
  error: '',
  touched: false,
  customOnChange: false,
  pattern: '',
}

const InputText = ({
  handleBlur,
  handleChange,
  value,
  name,
  type,
  label,
  placeholder,
  error,
  touched,
  setState,
  customOnChange,
}) => {
  const onChange = ev => {
    switch (customOnChange) {
      default:
        return handleChange(ev)
    }
  }

  const classError = error && touched ? 'is-danger' : ''
  return (
    <div className="input-horizontal">
      <label className="label" htmlFor={name}>{label}</label>
      <div className="field-body">
        <div className="field">
          <div className="control is-expanded has-icons-right">
            <input
              className={`input ${classError}`}
              value={value}
              name={name}
              type={type}
              onBlur={handleBlur}
              onChange={onChange}
              placeholder={placeholder}
              id={name}
              required
            />
            {error === '' && touched &&
              <span className="icon is-small is-right">
                <i className="fa fa-check fa-xs"></i>
              </span>
            }
            {error && touched &&
              <p className="help is-danger">{error}</p>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

InputText.propTypes = propTypes
InputText.defaultProps = defaultProps

export default InputText
