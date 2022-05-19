import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ExpensesForm extends React.Component {
  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input
            type="text"
            data-testid="value-input"
            id="value"
            name="value"
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            data-testid="description-input"
            id="description"
            name="description"
          />
        </label>
        <label htmlFor="currencies">
          Moeda:
          <select id="currencies" name="currencies">
            {currencies.map((currency) => (
              <option key={ currency } value={ currency }>{currency}</option>
            ))}
          </select>
        </label>
        <label htmlFor="method">
          Método:
          <select id="method" name="method" data-testid="method-input">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartao de Credito">Cartão de crédito</option>
            <option value="Cartao de Debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="category">
          Categoria:
          <select id="category" name="category" data-testid="tag-input">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saude">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

ExpensesForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(ExpensesForm);
