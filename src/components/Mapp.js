import React from 'react'
import { AlphaDashChart } from 'alpha-echart-library'
import './Custom.css'


function Mapp() {
    let map_andra = {
        charttype: 'andra-pradesh',
        height: '80%',
        width: '100%',
        chartId: '6',
    }

    let map_arunachal = {
        charttype: 'arunachal-pradesh',
        height: '80%',
        width: '100%',
        chartId: 'arunachal-pradesh',
    }
    let assam = {
        charttype: 'assam',
        height: '80%',
        width: '100%',
        chartId: 'assam',
    }
    let bihar = {
        charttype: 'bihar',
        height: '80%',
        width: '100%',
        chartId: 'bihar',
    }


    let chandigrah = {
        charttype: 'chandigrah',
        height: '80%',
        width: '100%',
        chartId: 'chandigrah',
    }

    let chhatisgrah = {
        charttype: 'chhatisgrah',
        height: '80%',
        width: '100%',
        chartId: 'chhatisgrah',
    }

    let goa = {
        charttype: 'goa',
        height: '80%',
        width: '100%',
        chartId: 'goa',
    }

    let gujarat = {
        charttype: 'gujarat',
        height: '80%',
        width: '100%',
        chartId: 'goa',
    }

    let haryana = {
        charttype: 'haryana',
        height: '80%',
        width: '100%',
        chartId: 'haryana',
    }

    let jammu = {
        charttype: 'jammu-kashmir',
        height: '80%',
        width: '100%',
        chartId: 'haryana',
    }



    let meghalaya = {
        charttype: 'meghalaya',
        height: '80%',
        width: '100%',
        chartId: 'meghalaya',
    }

    let mizoram = {
        charttype: 'mizoram',
        height: '80%',
        width: '100%',
        chartId: 'mizoram',
    }

    let nagaland = {
        charttype: 'nagaland',
        height: '80%',
        width: '100%',
        chartId: 'nagaland',
    }

    let orissa = {
        charttype: 'orissa',
        height: '80%',
        width: '100%',
        chartId: 'orissa',
    }

    let punjab = {
        charttype: 'punjab',
        height: '80%',
        width: '100%',
        chartId: 'punjab',
    }



    return (
        <>
            <div className="row">
              <div className="col-lg-4">
                  <div className="donut">
                      <h4>arunachal-pradesh</h4>
                      <AlphaDashChart obj={map_arunachal} />
                  </div>
              </div>
              <div className="col-lg-4">
                  <div className="donut">
                      <h4>assam</h4>
                      <AlphaDashChart obj={assam} />
                  </div>
              </div>
              <div className="col-lg-4">
                  <div className="donut">
                      <h4>bihar</h4>
                      <AlphaDashChart obj={bihar} />
                  </div>
              </div>
          </div>


          <div className="row">
              <div className="col-lg-4">
                  <div className="donut">
                      <h4>chandigrah</h4>
                      <AlphaDashChart obj={chandigrah} />
                  </div>
              </div>
              <div className="col-lg-4">
                  <div className="donut">
                      <h4>chhatisgrah</h4>
                      <AlphaDashChart obj={chhatisgrah} />
                  </div>
              </div>
              <div className="col-lg-4">
                  <div className="donut">
                      <h4>goa</h4>
                      <AlphaDashChart obj={goa} />
                  </div>
              </div>
          </div>


            <div className="row">
                <div className="col-lg-4">
                  <div className="donut">
                  <h4>gujarat</h4>
                  <AlphaDashChart obj={gujarat} />
                  </div>
                </div>
                
                <div className="col-lg-4">
                    <div className="donut">
                        <h4>andra-pradesh</h4>
                        <AlphaDashChart obj={map_andra} />
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="donut">
                        <h4>haryana</h4>
                        <AlphaDashChart obj={haryana} />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-4">
                  <div className="donut">
                        <h4>jammu-kashmir</h4>
                        <AlphaDashChart obj={jammu} />
                  </div>
                </div>
                
                <div className="col-lg-4">
                    <div className="donut">
                        <h4>meghalaya</h4>
                        <AlphaDashChart obj={meghalaya} />
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="donut">
                        <h4>mizoram</h4>
                        <AlphaDashChart obj={mizoram} />
                    </div>
                </div>
            </div>


            {/* <div className="row">
                <div className="col-lg-4">
                  <div className="donut">
                        <h4>nagaland</h4>
                        <AlphaDashChart obj={nagaland} />
                  </div>
                </div>
                
                <div className="col-lg-4">
                    <div className="donut">
                        <h4>orissa</h4>
                        <AlphaDashChart obj={orissa} />
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="donut">
                        <h4>punjab</h4>
                        <AlphaDashChart obj={punjab} />
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Mapp
