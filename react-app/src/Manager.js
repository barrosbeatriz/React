import React from 'react'
import Order from './Order'
import Details from './Details'
import './tailwind.output.css';

export default class Rastreador extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      order: null,
      mode: 'track'
    }
    this.track = this.track.bind(this)
    this.remove = this.remove.bind(this)
    this.details = this.details.bind(this)
    this.reset = this.reset.bind(this)
    this.see = this.see.bind(this)
  }

  render() {
    let panel, orders
    if (this.state.mode === 'track') {
      panel = (
        <div>
          <form className="w-full max-w-sm pt-4" onSubmit={this.track}>
            <div className="flex items-center border-b border-blue-700 py-2">
              <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Código de rastreamento" name="order"/>
              <button className="flex-shrink-0 bg-blue-700 hover:bg-blue-700 border-blue-700 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
                Rastrear
              </button>
            </div>
          </form>
          <button className="object-scale-down w-full mt-6 bg-blue-700 hover:bg-blue-300 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow uppercase" onClick={this.see}>
            Meus Pedidos
          </button>
        </div>
      )
    } else if (this.state.mode === 'details') {
      panel = (
        <div>
          <div className="flex flex-wrap flex-col md:flex-row py-2">
            <Details codigo={this.order}/>
          </div>
          <button className="object-scale-down w-full bg-blue-700 hover:bg-blue-300 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow uppercase" onClick={this.reset}>
            Voltar
          </button>
        </div>
      )
    } else {
      orders = this.state.orders.map((order, index) =>
        <Order key={index} codigo={order} onRemove={this.remove} onDetails={this.details}/>
      )
      panel = (
          <div>
            <div className="flex flex-wrap flex-col md:flex-row py-2">
              {orders}
          	</div>
            <button className="object-scale-down w-full bg-blue-700 hover:bg-blue-300 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow uppercase" onClick={this.reset}>
              Voltar
            </button>
          </div>
      )
    }

    return (
      <div className="max-w-md mx-auto flex p-12 bg-gray-100 mt-12 rounded-lg shadow-xl">
        <div className="mx-6 pt-1">
          <img className="object-scale-down h-48 w-full mb-12" src="/logo.png"/>
          <h1 className="text-2xl text-blue-700 leading-tight text-center">
            Rastreamento Correios
          </h1>
          {panel}
        </div>
      </div>
    )
  }

  remove(o) {
    this.setState((state) => {
      const orders = state.orders.filter(function(order) {
        return order !== o
      })
      return { orders }
    })
    this.setState({
      mode: 'track'
    });
  }

  details(o) {
    this.setState({
      mode: 'details',
      order: o
    })
  }

  track(event) {
    event.preventDefault();
    this.setState({
      orders: this.state.orders.concat(event.target.order.value),
      mode: 'orders'
    });
  }

  see() {
    this.setState({
      mode: 'orders'
    });
  }

  reset() {
    this.setState({
      mode: 'track'
    });
  }
}
