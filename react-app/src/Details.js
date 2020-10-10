import React from 'react'
import './tailwind.output.css';

export default class Details extends React.Component {
  render() {
    return (
      <div>
        <h2 className="font-bold text-md text-tial-400">{this.props.codigo}</h2>
        <div className="flex flex-wrap bg-white border-b border-blue-tial-100">
          <div className="flex w-full m-4">
            <div className="flex items-center">
              <div className="flex flex-col p-4">
                <span className="font-light text-sm">Objeto saiu para entregar</span>
                <div className="flex">
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full m-4">
            <div className="flex items-center">
              <div className="flex flex-col p-4">
                <span className="font-light text-sm">Objeto entregue ao destinatário</span>
                <div className="flex">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
