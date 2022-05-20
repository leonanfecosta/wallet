import React from 'react';
import { connect } from 'react-redux';

class ExpensesTable extends React.Component {
  render() {
    const titles = [
      'Descrição',
      'Tag',
      'Método de pagamento',
      'Valor',
      'Moeda',
      'Câmbio utilizado',
      'Valor convertido',
      'Moeda de conversão',
      'Editar/Excluir',
    ];
    return (
      <table>
        <thead>
          <tr>
            { titles.map((title, index) => <th key={ index }>{ title }</th>) }
          </tr>
        </thead>
      </table>
    );
  }
}

export default connect()(ExpensesTable);
