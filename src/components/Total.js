import React from 'react'


function Total(props) {

  const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  console.log(props);

  const total = Object.keys(props.selected).reduce(
    (acc, curr) => acc + props.selected[curr].cost,
    0
  );
  return (
    <div className="summary__total__value">
      {USCurrencyFormat.format(total)}
    </div>
  )
}

export default Total;