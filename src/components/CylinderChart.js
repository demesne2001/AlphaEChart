// import React from 'react'
// import './cylinder.css'
// import { AlphaDashChart } from 'alpha-echart-library/dist/cjs'

// function CylinderChart() {

//     // const cylinder = {
//     //     charttype: 'cylinder',
//     //     height: '80%',
//     //     width: '100%',
//     //     chartId: 'cylinder',
//     // }

//     let lst = ['HTML', 'CSS', 'JS', 'BOOTSTRAP', 'REACT JS' , 'JAVA']
//     let Yaxis = ['100%', '80%', '60%', '40%', '20%']
//     let data = ['94%', '87%', '70%', '57%', '20%', '20%']

//     return (
//         <>
//             <div className="container margin_left_10_pr">
//                 <section className="background_grid">
//                     {Yaxis.map((key, i) => (
//                         <div className="grid_line" value={Yaxis[i]}></div>
//                     ))}
//                 </section>
//                 <section className="cylinder_container">
//                     {data.map((key, i) => (
//                         <div className="cylinder" style={{ maxHeight: data[i] }}></div>
//                     ))}
//                     {/* <div className="cylinder" style={{maxHeight: '94%'}}></div>
//                     <div className="cylinder" style={{maxHeight: '87%'}}></div>
//                     <div className="cylinder" style={{maxHeight: '70%'}}></div>
//                     <div className="cylinder" style={{maxHeight: '82%'}}></div>
//                     <div className="cylinder" style={{maxHeight: '62%'}}></div>
//                     <div className="cylinder" style={{maxHeight: '83%'}}></div> */}
//                 </section>
//                 <section className="labels">
//                     {lst.map((key, i) => (
//                         <div>{lst[i]}</div>
//                     ))}
//                 </section>
//             </div>

//             {/* <AlphaDashChart obj={cylinder} /> */}
//         </>
//     )
// }

// export default CylinderChart
