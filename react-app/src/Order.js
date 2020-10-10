import React from 'react'
import './tailwind.output.css';

export default class Order extends React.Component {
  render() {
    return (
      <div>
        <div className="flex flex-wrap bg-white border-b border-blue-tial-100">
          <div className="flex w-full m-4">
            <div className="flex items-center">
              <div className="flex flex-col p-4">
                <h3 className="font-bold text-md text-tial-400">{this.props.codigo}</h3>
                <span className="font-light text-sm">Objeto entregue ao destinatário</span>
                <div className="flex">
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-grow w-full items-center justify-end">
              <div className="flex items-center mr-2 space-x-4">
              <button class="bg-gray-300 hover:bg-gray-400 font-bold  text-red-700 py-2 px-4 rounded inline-flex items-center" onClick={() => this.props.onDetails(this.props.codigo)}>
                <span className="text-lg uppercase font-semibold text-green-700 hover:text-green-300">Detalhes</span>
              </button>
              <button class="bg-gray-300 hover:bg-gray-400 font-bold  text-red-700 py-2 px-4 rounded inline-flex items-center" onClick={() => this.props.onRemove(this.props.codigo)}>
                <span className="text-lg uppercase font-semibold text-red-700 hover:text-red-300">Remover</span>
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
