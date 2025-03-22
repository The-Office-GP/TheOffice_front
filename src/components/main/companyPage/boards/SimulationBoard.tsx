import {Dispatch, FC, SetStateAction, useState} from 'react';
import StartSimulationButton from "../buttons/StartSimulationButton";
import ExitButton from "../../../share/ExitButton";

import "../../../../@styles/main/components/companyPage/simulation/SimulationBoard.css"

const SimulationBoard: FC<{setPage: Dispatch<SetStateAction<number>>}> = ({setPage}) => {

    return (
        <>
            <div className={"simulation-container"}>
                <div className={"exit-h2-container"}>
                    <ExitButton setPage={setPage}/>
                    <h2>Simulation</h2>
                </div>

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

                            <label className={"marketing-label "}>Prioriser le marketing &nbsp; </label>
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
                <StartSimulationButton setPage={setPage}/>

            </div>
        </>
    );
};

export default SimulationBoard;