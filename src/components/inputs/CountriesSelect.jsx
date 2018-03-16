import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  options: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  touched: PropTypes.bool,
}

const defaultProps = {
  error: null,
  touched: false,
}

const CountriesSelect = ({
  options,
  name,
  label,
  error,
  placeholder,
  onChange,
  value,
  touched,
}) => {
  const icon = options.length < 2 ? 'fa-spinner fa-spin' : 'fa-globe'
  return (
    <div className="input-horizontal">
      <label className="label" htmlFor={name}>{label}</label>
      <div className="field-body">
        <div className="field is-narrow">
          <div className="control has-icons-left">
            <div className="select">
              <select placeholder="Select option" name={name} value={value} onChange={onChange}>
                <option value="" disabled>{placeholder}</option>
                {options.map(item => (
                  <option key={item.numericCode} value={item.name}>{item.name}</option>
                ))}
              </select>
            </div>
            <span className="icon is-small is-left">
              <i className={`fa ${icon}`}></i>
            </span>
            {error && touched &&
              <p className="help is-danger">{error}</p>
            }

          </div>
        </div>
      </div>
    </div>
  )
}

CountriesSelect.propTypes = propTypes
CountriesSelect.defaultProps = defaultProps

export default CountriesSelect
