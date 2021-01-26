import React from 'react' 


const OperationLog = ({operationLog}) => {
  return (
      <tr>
          <td>{operationLog.description}</td>
          <td>{operationLog.operatedAT}</td>
      </tr>
  )
}

export default OperationLog