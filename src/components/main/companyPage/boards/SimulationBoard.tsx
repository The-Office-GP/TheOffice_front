import {Dispatch, FC, SetStateAction, useState} from 'react';
import StartSimulationButton from "../buttons/StartSimulationButton";
import "../../../../@styles/main/components/companyPage/simulation/SimulationBoard.css"

const SimulationBoard: FC<{setPage: Dispatch<SetStateAction<number>>}> = ({setPage}) => {

    const [stateSimulation, setStateSimulation] = useState<boolean>(false)

    return (
        <>
            <div className={"simulation-container"}
                 style={{backgroundImage: "url('/assets/simulation-background/Simulation-background.png')"}}>
                <h2>Simulation</h2>


                <div className={"settings"}>
                    <div className={"production-settings-part"}>
                        <div className={"setting-container-production"}>
                            <label>Rythme de production</label>
                            <input type={"range"} className={"range-input-production"}/>
                        </div>
                        <div className={"setting-container-production"}>
                            <label>Prioriser la production</label>
                            <input type={"range"} className={"range-input-production"}/>
                        </div>
                        <div className={"setting-container-production"}>
                            <label className={"marketing-label "}>Prioriser le marketing </label>

                            <input type={"range"} className={"range-input-production"}/>
                        </div>
                    </div>
                    <div className={"products-settings-part"}>
                        <div className={"settings-container-products"}>
                            <label>Palettes</label>
                            <input type={"range"} className={"range-input-products"}/>
                        </div>
                        <div className={"settings-container-products"}>
                            <label>Chaises</label>
                            <input type={"range"} className={"range-input-products"}/>
                        </div>
                        <div className={"settings-container-products"}>
                            <label>Tables</label>
                            <input type={"range"} className={"range-input-products"}/>
                        </div>
                        <div className={"settings-container-products"}>
                            <label>Cabanes</label>
                            <input type={"range"} className={"range-input-products"}/>
                        </div>
                    </div>
                </div>
                <StartSimulationButton setPage={setPage
                }/>


            </div>
        </>
    );
};

export default SimulationBoard;