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
        height: 500,
        width: 500
    }

    let pieantv = {
        charttype: 'antv-pie',
        height: 500,
        width: 500,
        series: [
            { product: "G", sales: 0.45 },
            { product: "J", sales: 0.55 },
            { product: "H", sales: 0.75 },
        ]
    }

    let musicantv = {
        charttype: 'antv-music',
        series: [
            { term: 'Zombieland', count: 9 },
            { term: 'Wieners', count: 8 },
            { term: 'Toy Story', count: 8 },
            { term: 'trashkannon', count: 7 },
            { term: 'the GROWLERS', count: 6 },
            { term: 'mudweiser', count: 6 },
            { term: 'ThunderCats', count: 4 },
            { term: 'The Taqwacores - Motion Picture', count: 4 },
            { term: 'The Shawshank Redemption', count: 2 },
            { term: 'The Olivia Experiment', count: 1 },
        ],
        height: 500,
        width: 600
    }

    let antvstackedbar = {
        charttype: 'antv-stacked-radialbar',
        series: [
            {
                year: '1991',
                value: 3,
                type: 'Lon',
            },
            {
                year: '1992',
                value: 4,
                type: 'Lon',
            },
            {
                year: '1993',
                value: 3.5,
                type: 'Lon',
            },
            {
                year: '1994',
                value: 5,
                type: 'Lon',
            },
            {
                year: '1995',
                value: 4.9,
                type: 'Lon',
            },
            {
                year: '1996',
                value: 6,
                type: 'Lon',
            },
            {
                year: '1997',
                value: 7,
                type: 'Lon',
            },
            {
                year: '1998',
                value: 9,
                type: 'Lon',
            },
            {
                year: '1999',
                value: 13,
                type: 'Lon',
            },
            {
                year: '1991',
                value: 3,
                type: 'Bor',
            },
            {
                year: '1992',
                value: 4,
                type: 'Bor',
            },
            {
                year: '1993',
                value: 3.5,
                type: 'Bor',
            },
            {
                year: '1994',
                value: 5,
                type: 'Bor',
            },
            {
                year: '1995',
                value: 4.9,
                type: 'Bor',
            },
            {
                year: '1996',
                value: 6,
                type: 'Bor',
            },
            {
                year: '1997',
                value: 7,
                type: 'Bor',
            },
            {
                year: '1998',
                value: 9,
                type: 'Bor',
            },
            {
                year: '1999',
                value: 13,
                type: 'Bor',
            },
        ],
        height: 500,
        width: 600
    }

    let antvheatmapbar = {
        charttype: 'antv-heatmap-bar',
        height: 500,
        width: 1000
    }


    let antvpolarcompare = {
        charttype: 'antv-polar-comparebar',
        height: 500,
        width: 500
    }


    return (
        <>

            <div className="row">
                <div className="col-lg-4">
                    <div className="donut">
                        <h4>comp_bar</h4>
                        <div className='antv' >
                            <AlphaDashChart obj={chartopt} />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="donut">
                        <h4>antv-pie</h4>
                        <div className='antv' >
                            <AlphaDashChart obj={pieantv} />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="donut">
                        <h4>antv-music</h4>
                        <div className='antv' >
                            <AlphaDashChart obj={musicantv} />
                        </div>
                    </div>
                </div>
            </div>



            <div className="row">
                <div className="col-lg-4">
                    <div className="donut">
                        <h4>antv-stacked-radialbar</h4>
                        {/* <div className='antv' > */}
                        <AlphaDashChart obj={antvstackedbar} />
                        {/* </div> */}
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="donut">
                        <h4>antv-heatmap-bar</h4>
                        {/* <div className='antv' > */}
                        <AlphaDashChart obj={antvheatmapbar} />
                        {/* </div> */}
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col-lg-4">
                    <div className="donut">
                        <h4>antv-polar-comparebar</h4>
                        {/* <div className='antv' > */}
                        <AlphaDashChart obj={antvpolarcompare} />
                        {/* </div> */}
                    </div>
                </div>
            </div>

        </>
    )
}

export default AntVcharts
