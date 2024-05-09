import { AlphaDashChart } from 'alpha-echart-library/dist/cjs'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Custom.css';


function AntVcharts() {
    let chartdata = {
        "FromDate": "",
        "ToDate": "",
        "TotalRow": "",
        "strCompanyID": "",
        "strBranchID": "",
        "strItemGroupID": "",
        "strItemID": "",
        "Unit": "",
        "PrintGroupBy": "BranchName,br.BranchID"
    }
    const [getdata, setgetdata] = useState([])

    useEffect(() => {
        Graph()
    }, [])

    const Graph = () => {
        axios.post("http://192.168.1.208:2024/StockToSales/GetStockToSales", chartdata, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        })
            .then((response) => {
                setgetdata(response.data.lstResult)
            })
            .catch(error => console.error(error))
    }


    let chartopt = {
        charttype: 'antv-two-bar',
        series: getdata,
    }


  return (
      <>

          <div className="row">
              <div className="col-lg-4">
                  <div className="donut">
                      <h4>comp_bar</h4>
                      <AlphaDashChart obj={chartopt} />
                  </div>
              </div>
              {/* <div className="col-lg-4">
                  <div className="donut">
                      <h4>bar-comparison-chart</h4>
                      <AlphaDashChart obj={compbaropt} />
                  </div>
              </div>
              <div className="col-lg-4">
                  <div className="donut">
                      <h4>three-yaxis</h4>
                      <AlphaDashChart obj={three_yaxis} />
                  </div>
              </div> */}
          </div>
          
    </>
  )
}

export default AntVcharts
