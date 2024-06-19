import { AlphaDashChart } from 'alpha-echart-library/dist/cjs'
import React from 'react'


export function Demobullet() {

  let state = {
    'strmonth': '',
    'strbranch': '',
  }


  let bar = {
    themeId: 11,
    chartId: 'inside-Bar',
    charttype: 'inside-Bar',
    height: '400%',
    width: 500,
    legend: ['bafdfjhfdsr1', 'bfsdfsdfsdfsdfhgbytytgtgar2', 'bar3', 'bar44'],
    color: ['#00246B', 'blue'],
    widthlst: [30, 15, 7],
    Xaxis: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    Yaxis: [[320, 302, 301, 334, 390, 330, 320], [310, 132, 101, 134, 90, 230, 210], [203, 404, 506, 405, 603, 302, 230], [203, 404, 506, 405, 603, 302, 230]],
    idkey: 'strmonth',
    idlst: [2, 1, 24, 31, 23],
    alignment: 'V',
    barnum: 3,
    bargap: '-75%',
    maxval: 0,
    minval: 600
  }


  return (
    <>
      <AlphaDashChart obj={bar} state={state} />
    </>
  )
}

